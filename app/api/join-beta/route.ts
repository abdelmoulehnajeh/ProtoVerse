import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Basic email validation
const isEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Shared validation
function validateBase(user: any) {
  if (!user.name?.trim()) return "Name is required";
  if (!user.email || !isEmail(user.email)) return "Invalid email";

  if (user.isbusiness) {
    if (!user.businessname?.trim()) return "Business name required";
    if (!user.businessemail || !isEmail(user.businessemail))
      return "Invalid company email";
  }
  return null;
}

function validatePartner(partner: any) {
  const base = validateBase(partner);
  if (base) return base;

  if (!partner.printers || partner.printers.length === 0)
    return "At least one printer is required";

  for (let i = 0; i < partner.printers.length; i++) {
    const p = partner.printers[i];
    if (!p.brand || !p.model || !p.material || !p.location)
      return `Missing fields in printer#${i + 1}`;
  }

  return null;
}

// Clean keys
const clean = (v: any) => (v?.trim ? v.trim() : v || null);

// POST HANDLER
export async function POST(req: NextRequest) {
  const body = await req.json();
  const type = body.type;

  if (!["user", "partner"].includes(type))
    return NextResponse.json(
      { success: false, error: "Type invalide" },
      { status: 400 }
    );

  const client = await pool.connect();

  try {
    // Validation
    const error =
      type === "partner" ? validatePartner(body) : validateBase(body);
    if (error) return NextResponse.json({ success: false, error }, { status: 400 });

    const table = type === "user" ? `public."user"` : "public.partner";

    // Check duplicate
    const check = await client.query(
      `SELECT id FROM ${table} WHERE email = $1`,
      [body.email.toLowerCase().trim()]
    );
    if (check.rows.length > 0)
      return NextResponse.json(
        { success: false, error: "This email address already exists." },
        { status: 409 }
      );

    // Insert
    const sql = type === "user"
      ? `INSERT INTO public."user"
         (name, email, country, city, isbusiness, businessname, businessemail, businesstype, countrycityop)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
         RETURNING id, name, email`
      : `INSERT INTO public.partner
         (name, email, country, city, isbusiness, businessname, businessemail, businesstype, countrycityop, printers)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
         RETURNING id, name, email`;

    const params = [
      clean(body.name),
      clean(body.email?.toLowerCase()),
      clean(body.country),
      clean(body.city),
      body.isbusiness,
      clean(body.businessname),
      clean(body.businessemail?.toLowerCase()),
      clean(body.businesstype),
      clean(body.countrycityop),
    ];

    if (type === "partner") {
      params.push(JSON.stringify(body.printers));
    }

    const result = await client.query(sql, params);

    return NextResponse.json(
      { success: true, data: result.rows[0] },
      { status: 201 }
    );

  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: "Erreur serveur" },
      { status: 500 }
    );
  } finally {
    client.release();
  }
}

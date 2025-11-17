"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Loader2, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeader from "@/components/sectionHeader";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { User, Building2, Printer, Plus, MapPin, Mail, Globe } from "lucide-react";

interface UserForm {
  name: string;
  email: string;
  country: string;
  city: string;
  isbusiness: boolean;
  businessname: string;
  businessemail: string;
  businesstype: string;
  countrycityop: string;
}

interface PrinterType {
  brand: string;
  model: string;
  material: string;
  location: string;
}

interface PartnerForm extends UserForm {
  printers: PrinterType[];
}

export default function JoinBeta() {
  const { t } = useTranslation();

  const [userForm, setUserForm] = useState<UserForm>({
    name: "",
    email: "",
    country: "",
    city: "",
    isbusiness: false,
    businessname: "",
    businessemail: "",
    businesstype: "",
    countrycityop: "",
  });

  const [partnerForm, setPartnerForm] = useState<PartnerForm>({
    name: "",
    email: "",
    country: "",
    city: "",
    isbusiness: false,
    businessname: "",
    businessemail: "",
    businesstype: "",
    countrycityop: "",
    printers: [{ brand: "", model: "", material: "", location: "" }],
  });

  const [submittedType, setSubmittedType] = useState<"user" | "partner" | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [isLoadingPartner, setIsLoadingPartner] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();
          const city = data.address.city || data.address.town || data.address.village || "";
          const country = data.address.country || "";
          setUserForm((prev) => ({ ...prev, city, country }));
          setPartnerForm((prev) => ({ ...prev, city, country }));
        } catch (err) {
        }
      });
    }
  }, []);

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setUserForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setErrorMessage(""); // Clear error on input change
  };

  const handlePartnerChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index?: number,
    field?: keyof PrinterType
  ) => {
    const { name, value, type, checked } = e.target;
    if (field !== undefined && index !== undefined) {
      const updated = [...partnerForm.printers];
      updated[index][field] = value;
      setPartnerForm((prev) => ({ ...prev, printers: updated }));
    } else {
      setPartnerForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    }
    setErrorMessage(""); // Clear error on input change
  };
const [successMessage, setSuccessMessage] = useState(""); // nouvel état pour le message de succès

const handleUserSubmit = async () => {
  setErrorMessage("");
  setSuccessMessage(""); // clear previous success
  setIsLoadingUser(true);

  try {
    const res = await fetch("/api/join-beta", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "user", ...userForm }),
    });

    const result = await res.json();

    if (!res.ok) {
      setErrorMessage(result.error || "Une erreur est survenue");
      return;
    }

    if (result.success) {
      setSubmittedType("user");
      setSuccessMessage("User form successfully submitted !"); // message succès
      // Reset form
      setUserForm({
        name: "",
        email: "",
        country: userForm.country,
        city: userForm.city,
        isbusiness: false,
        businessname: "",
        businessemail: "",
        businesstype: "",
        countrycityop: "",
      });
    } else {
      setErrorMessage(result.error || "Erreur lors de la soumission");
    }
  } catch (err: any) {
    setErrorMessage("Erreur de connexion au serveur");
  } finally {
    setIsLoadingUser(false);
  }
};

const handlePartnerSubmit = async () => {
  setErrorMessage("");
  setSuccessMessage(""); // clear previous success
  setIsLoadingPartner(true);

  try {
    const res = await fetch("/api/join-beta", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "partner", ...partnerForm }),
    });

    const result = await res.json();

    if (!res.ok) {
      setErrorMessage(result.error || " erreur ");
      return;
    }

    if (result.success) {
      setSubmittedType("partner");
      setSuccessMessage("Partner form successfully submitted !"); // message succès
      // Reset form
      setPartnerForm({
        name: "",
        email: "",
        country: partnerForm.country,
        city: partnerForm.city,
        isbusiness: false,
        businessname: "",
        businessemail: "",
        businesstype: "",
        countrycityop: "",
        printers: [{ brand: "", model: "", material: "", location: "" }],
      });
    } else {
      setErrorMessage(result.error || "Erreur lors de la soumission");
    }
  } catch (err: any) {
    setErrorMessage("Erreur de connexion au serveur");
  } finally {
    setIsLoadingPartner(false);
  }
};


  const addPrinter = () => {
    setPartnerForm((prev) => ({
      ...prev,
      printers: [...prev.printers, { brand: "", model: "", material: "", location: "" }],
    }));
  };

  const removePrinter = (index: number) => {
    if (partnerForm.printers.length > 1) {
      setPartnerForm((prev) => ({
        ...prev,
        printers: prev.printers.filter((_, i) => i !== index),
      }));
    }
  };

  return (
    <section id="beta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-muted/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <SectionHeader
          title={t.joinBetaTitle}
          highlight={t.joinBetaTitleHighlight}
          subtitle={t.joinBetaSubtitle}
        />

        <Tabs defaultValue="users" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-card/50 backdrop-blur-sm p-1 rounded-xl border border-border/50">
            <TabsTrigger
              value="users"
              className="text-base rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
            >
              <User className="w-4 h-4 mr-2" /> {t.forUsers}
            </TabsTrigger>
            <TabsTrigger
              value="partners"
              className="text-base rounded-lg data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground transition-all duration-300"
            >
              <Building2 className="w-4 h-4 mr-2" /> {t.forPartners}
            </TabsTrigger>
          </TabsList>

          {/* ------------------ USER FORM ------------------- */}
          <TabsContent value="users">
            {submittedType === "user" ? (
              <div className="flex flex-col items-center justify-center p-8 bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-200 rounded-xl text-center shadow-xl animate-fade-in space-y-3 border border-green-200 dark:border-green-800">
                <CheckCircle2 className="w-16 h-16 text-green-600 dark:text-green-400 animate-pulse" />
                <span className="text-xl font-semibold">Registration successful!</span>
                <p className="text-sm opacity-80">Thank you for registering. We will contact you soon.</p>
                <Button
                  variant="outline"
                  onClick={() => setSubmittedType(null)}
                  className="mt-4 border-green-600 text-green-600 hover:bg-green-50"
                >
                  New registration
                </Button>
              </div>
            ) : (
              <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/50 shadow-xl">
                {errorMessage && (
                  <div className="mb-4 p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200 text-sm">
                    {errorMessage}
                  </div>
                )}
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-border/30">
                        <td className="px-4 py-3 flex items-center gap-2 font-medium">
                          <User className="w-4 h-4" /> Full name *
                        </td>
                        <td className="px-4 py-3">
                          <Input
                            name="name"
                            value={userForm.name}
                            onChange={handleUserChange}
                            placeholder="Enter your full name
"
                            required
                          />
                        </td>
                      </tr>
                      <tr className="border-b border-border/30">
                        <td className="px-4 py-3 flex items-center gap-2 font-medium">
                          <Mail className="w-4 h-4" /> Email *
                        </td>
                        <td className="px-4 py-3">
                          <Input
                            name="email"
                            type="email"
                            value={userForm.email}
                            onChange={handleUserChange}
                            placeholder="votre.email@exemple.com"
                            required
                          />
                        </td>
                      </tr>
                      <tr className="border-b border-border/30">
                        <td className="px-4 py-3 flex items-center gap-2 font-medium">
                          <Globe className="w-4 h-4" /> Country
                        </td>
                        <td className="px-4 py-3">
                          <Input
                            name="country"
                            value={userForm.country}
                            onChange={handleUserChange}
                            placeholder="country"
                          />
                        </td>
                      </tr>
                      <tr className="border-b border-border/30">
                        <td className="px-4 py-3 flex items-center gap-2 font-medium">
                          <MapPin className="w-4 h-4" /> City
                        </td>
                        <td className="px-4 py-3">
                          <Input
                            name="city"
                            value={userForm.city}
                            onChange={handleUserChange}
                            placeholder="city"
                          />
                        </td>
                      </tr>

                      {/* Business Checkbox */}
                      <tr className="border-b border-border/30 bg-muted/30">
                        <td className="px-4 py-3 font-medium">I own a business</td>
                        <td className="px-4 py-3">
                          <Checkbox
                            checked={userForm.isbusiness}
                            onCheckedChange={(checked) =>
                              setUserForm((prev) => ({ ...prev, isbusiness: !!checked }))
                            }
                          />
                        </td>
                      </tr>

                      {userForm.isbusiness && (
                        <>
                          <tr className="border-b border-border/30">
                            <td className="px-4 py-3 flex items-center gap-2 font-medium">
                              <Building2 className="w-4 h-4" /> Business name *
                            </td>
                            <td className="px-4 py-3">
                              <Input
                                name="businessname"
                                value={userForm.businessname}
                                onChange={handleUserChange}
                                placeholder="Business Name"
                                required={userForm.isbusiness}
                              />
                            </td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="px-4 py-3 flex items-center gap-2 font-medium">
                              <Mail className="w-4 h-4" />Professional email*
                            </td>
                            <td className="px-4 py-3">
                              <Input
                                name="businessemail"
                                type="email"
                                value={userForm.businessemail}
                                onChange={handleUserChange}
                                placeholder="email@entreprise.com"
                                required={userForm.isbusiness}
                              />
                            </td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="px-4 py-3 font-medium">Business type </td>
                            <td className="px-4 py-3">
                              <Input
                                name="businesstype"
                                value={userForm.businesstype}
                                onChange={handleUserChange}
                                placeholder="Ex: E-commerce, Service..."
                              />
                            </td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="px-4 py-3 font-medium">country / city of operation</td>
                            <td className="px-4 py-3">
                              <Input
                                name="countrycityop"
                                value={userForm.countrycityop}
                                onChange={handleUserChange}
                                placeholder="country / city of operation"
                              />
                            </td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
{successMessage && (
  <div className="text-green-600 font-semibold mb-4 text-center">
    {successMessage}
  </div>
)}
{errorMessage && (
  <div className="text-red-600 font-semibold mb-4 text-center">
    {errorMessage}
  </div>
)}

<Button
  className="mt-6 w-full bg-gradient-to-r from-primary to-blue-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
  onClick={handleUserSubmit}
  disabled={isLoadingUser}
>
  {isLoadingUser ? (
    <div className="flex items-center justify-center">
      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
     Submission in progress...
    </div>
  ) : (
    "Join beta as User "
  )}
</Button>

                </div>
              </Card>
            )}
          </TabsContent>

          {/* ----------------- PARTNER FORM ----------------- */}
          <TabsContent value="partners">
            {submittedType === "partner" ? (
              <div className="flex flex-col items-center justify-center p-8 bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-200 rounded-xl text-center shadow-xl animate-fade-in space-y-3 border border-green-200 dark:border-green-800">
                <CheckCircle2 className="w-16 h-16 text-green-600 dark:text-green-400 animate-pulse" />
                <span className="text-xl font-semibold">Registered partnership!</span>
                <p className="text-sm opacity-80">
                  Thank you for becoming a partner. Our team will contact you shortly.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmittedType(null)}
                  className="mt-4 border-green-600 text-green-600 hover:bg-green-50"
                >
                  New registration
                </Button>
              </div>
            ) : (
              <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/50 shadow-xl">
                {errorMessage && (
                  <div className="mb-4 p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200 text-sm">
                    {errorMessage}
                  </div>
                )}
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <tbody>
                      <tr className="border-b border-border/30">
                        <td className="px-4 py-3 flex items-center gap-2 font-medium">
                          <User className="w-4 h-4" /> full name *
                        </td>
                        <td className="px-4 py-3">
                          <Input
                            name="name"
                            value={partnerForm.name}
                            onChange={handlePartnerChange}
                            placeholder="full name"
                            required
                          />
                        </td>
                      </tr>
                      <tr className="border-b border-border/30">
                        <td className="px-4 py-3 flex items-center gap-2 font-medium">
                          <Mail className="w-4 h-4" /> Email *
                        </td>
                        <td className="px-4 py-3">
                          <Input
                            name="email"
                            type="email"
                            value={partnerForm.email}
                            onChange={handlePartnerChange}
                            placeholder="votre.email@exemple.com"
                            required
                          />
                        </td>
                      </tr>
                      <tr className="border-b border-border/30">
                        <td className="px-4 py-3 flex items-center gap-2 font-medium">
                          <Globe className="w-4 h-4" /> country
                        </td>
                        <td className="px-4 py-3">
                          <Input
                            name="country"
                            value={partnerForm.country}
                            onChange={handlePartnerChange}
                            placeholder="country"
                          />
                        </td>
                      </tr>
                      <tr className="border-b border-border/30">
                        <td className="px-4 py-3 flex items-center gap-2 font-medium">
                          <MapPin className="w-4 h-4" /> city
                        </td>
                        <td className="px-4 py-3">
                          <Input
                            name="city"
                            value={partnerForm.city}
                            onChange={handlePartnerChange}
                            placeholder="city"
                          />
                        </td>
                      </tr>

                      {/* Business Checkbox */}
                      <tr className="border-b border-border/30 bg-muted/30">
                        <td className="px-4 py-3 font-medium">I own a business
</td>
                        <td className="px-4 py-3">
                          <Checkbox
                            checked={partnerForm.isbusiness}
                            onCheckedChange={(checked) =>
                              setPartnerForm((prev) => ({ ...prev, isbusiness: !!checked }))
                            }
                          />
                        </td>
                      </tr>

                      {partnerForm.isbusiness && (
                        <>
                          <tr className="border-b border-border/30">
                            <td className="px-4 py-3 flex items-center gap-2 font-medium">
                              <Building2 className="w-4 h-4" /> Business name  *
                            </td>
                            <td className="px-4 py-3">
                              <Input
                                name="businessName"
                                value={partnerForm.businessname}
                                onChange={handlePartnerChange}
                                placeholder="Business Name"
                                required={partnerForm.isbusiness}
                              />
                            </td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="px-4 py-3 flex items-center gap-2 font-medium">
                              <Mail className="w-4 h-4" /> Professional email *
                            </td>
                            <td className="px-4 py-3">
                              <Input
                                name="businessEmail"
                                type="email"
                                value={partnerForm.businessemail}
                                onChange={handlePartnerChange}
                                placeholder="email@entreprise.com"
                                required={partnerForm.isbusiness}
                              />
                            </td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="px-4 py-3 font-medium">Business type</td>
                            <td className="px-4 py-3">
                              <Input
                                name="businessType"
                                value={partnerForm.businesstype}
                                onChange={handlePartnerChange}
                                placeholder="Ex: Fabrication, Service..."
                              />
                            </td>
                          </tr>
                          <tr className="border-b border-border/30">
                            <td className="px-4 py-3 font-medium">country / city of operation</td>
                            <td className="px-4 py-3">
                              <Input
                                name="countryCityop"
                                value={partnerForm.countrycityop}
                                onChange={handlePartnerChange}
                                placeholder="country / city of operation"
                              />
                            </td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>

                  {/* Printers Section */}
                  <div className="mt-8 p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                      <Printer className="w-5 h-5 text-secondary" />
                      3D printers   *
                    </h3>

                    {partnerForm.printers.map((printer, idx) => (
                      <div
                        key={idx}
                        className="mb-4 p-4 bg-card rounded-lg border border-border/50 relative"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-medium text-sm">printer #{idx + 1}</span>
                          {partnerForm.printers.length > 1 && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removePrinter(idx)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <label className="text-xs font-medium mb-1 block">brand</label>
                            <Input
                              value={printer.brand}
                              onChange={(e) => handlePartnerChange(e, idx, "brand")}
                              placeholder="Ex: Creality"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-medium mb-1 block">model</label>
                            <Input
                              value={printer.model}
                              onChange={(e) => handlePartnerChange(e, idx, "model")}
                              placeholder="Ex: Ender 3"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-medium mb-1 block">material</label>
                            <Input
                              value={printer.material}
                              onChange={(e) => handlePartnerChange(e, idx, "material")}
                              placeholder="Ex: PLA, ABS, PETG"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-medium mb-1 block">location</label>
                            <Input
                              value={printer.location}
                              onChange={(e) => handlePartnerChange(e, idx, "location")}
                              placeholder="Ex: Bureau, Atelier"
                            />
                          </div>
                        </div>
                      </div>
                    ))}

                    <Button
                      variant="outline"
                      onClick={addPrinter}
                      className="w-full border-secondary/40 hover:border-secondary/60 hover:bg-secondary/10"
                    >
                      <Plus className="w-4 h-4 mr-2" />   add another printer
                    </Button>
                  </div>

{successMessage && (
  <div className="text-green-600 font-semibold mb-4 text-center">
    {successMessage}
  </div>
)}
{errorMessage && (
  <div className="text-red-600 font-semibold mb-4 text-center">
    {errorMessage}
  </div>
)}

<Button
  className="mt-6 w-full bg-gradient-to-r from-secondary to-purple-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
  onClick={handlePartnerSubmit}
  disabled={isLoadingPartner}
>
  {isLoadingPartner ? (
    <div className="flex items-center justify-center">
      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      Submission in progress...
    </div>
  ) : (
    "Join beta as Partner "
  )}
</Button>

                </div>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    // Vérifie le thème enregistré ou la préférence du système
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light")

    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="border-primary/40 hover:border-primary/20 glow-cyan transition-all duration-300 cursor-pointer group"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-secondary-foreground hover:white" />
      ) : (
        <Sun className="h-5 w-5 text-secondary-foreground" />
      )}
    </Button>
  )
}

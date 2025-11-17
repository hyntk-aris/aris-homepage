"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function DarkModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-9 w-9 rounded-md" />
  }

  const isDark = resolvedTheme === "dark"

  const handleToggle = () => {
    const newTheme = isDark ? "light" : "dark"
    console.log("Toggling theme from", resolvedTheme, "to", newTheme)
    setTheme(newTheme)
  }

  return (
    <button
      onClick={handleToggle}
      className="relative z-20 inline-flex items-center justify-center rounded-md p-2 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-800"
      aria-label="Toggle dark mode"
      title={`Current: ${resolvedTheme}`}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-neutral-700" />
      )}
    </button>
  )
}

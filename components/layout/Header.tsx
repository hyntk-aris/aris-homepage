"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar"
import { DarkModeToggle } from "@/components/ui/dark-mode-toggle"
import { Home, Briefcase, FolderOpen, Info, Newspaper } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const items = [
    { name: "Home", link: "/" },
    { name: "Dịch vụ", link: "/services" },
    { name: "Dự án", link: "/projects" },
    { name: "About", link: "/about" },
    { name: "Tin tức", link: "/news" },
  ]

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset
      setScrolled(y > 24)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header className={`w-full transition-all duration-300 ${scrolled ? "fixed top-0 left-0 right-0 z-50" : "relative bg-transparent"}`}>
        <Navbar>
          <NavBody>
            <div className="flex items-center">
              <NavbarLogo />
            </div>

            <NavItems
              items={items}
              onItemClick={() => setIsOpen(false)}
            />

            <div className="flex items-center gap-3">
              <DarkModeToggle />
              <NavbarButton href="/contact">Contact Us</NavbarButton>
            </div>
          </NavBody>

          <MobileNav visible={isOpen}>
            <MobileNavHeader>
              <div className="flex items-center">
                <NavbarLogo />
              </div>
              <div>
                <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
              </div>
            </MobileNavHeader>

            <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
              {items.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  className="block w-full rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </header>

      {/* spacer to avoid layout jump when header becomes fixed - adjust h-16 if header height differs */}
      <div className={scrolled ? "h-16" : "h-0"} />
    </>
  )
}

"use client"

import { useState } from "react"
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

  const items = [
    { name: "Home", link: "/" },
    { name: "Dịch vụ", link: "/services" },
    { name: "Dự án", link: "/projects" },
    { name: "About", link: "/about" },
    { name: "Tin tức", link: "/news" },
  ]

  return (
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
  )
}

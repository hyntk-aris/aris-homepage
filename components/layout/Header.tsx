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
import { ChevronDown } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)

  const serviceItems = [
    { name: "Dịch vụ Toàn diện", link: "/services/one-stop" },
    { name: "Phát triển Hệ thống", link: "/services/system-development" },
    { name: "Phát triển Mobile", link: "/services/mobile-development" },
    { name: "Kiểm soát Chất lượng", link: "/services/quality-control" },
    { name: "Thiết kế UI/UX", link: "/services/ui-ux" },
    { name: "Nghiên cứu & Phát triển", link: "/services/research-development" },
    { name: "Chuyển đổi Số", link: "/services/digital-transformation" },
    { name: "Dịch vụ BPO", link: "/services/bpo" },
    { name: "Bảo trì Hệ thống", link: "/services/maintenance" },
  ]

  const items = [
    { name: "Case Studies", link: "/use-cases" },
    { name: "Sản phẩm", link: "/products" },
    { name: "Tin tức", link: "/news" },
    { name: "Blog", link: "/blog" },
    { name: "Tuyển dụng", link: "/recruitments" },
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
      <header className={`w-full transition-all duration-200 ${scrolled ? "fixed top-0 left-0 right-0 z-50" : "relative"}`}>
        <Navbar>
          <NavBody>
            <div className="flex items-center">
              <NavbarLogo />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors">
                Trang chủ
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors flex items-center gap-1">
                  Dịch vụ
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute left-0 mt-0 w-56 bg-white dark:bg-neutral-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.link}
                      href={item.link}
                      className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/about-us" className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors">
                Về chúng tôi
              </Link>

              {items.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <DarkModeToggle />
              <Link href="/contact">
                <button className="bg-slate-900 text-white rounded-full px-6 py-2 hover:opacity-90 transition-opacity font-semibold dark:bg-slate-100 dark:text-slate-900 text-sm">
                  Liên hệ
                </button>
              </Link>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
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
              <Link
                href="/"
                className="block w-full rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200"
                onClick={() => setIsOpen(false)}
              >
                Trang chủ
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="w-full">
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="w-full text-left rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 flex items-center justify-between"
                >
                  Dịch vụ
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesDropdownOpen && (
                  <div className="pl-4">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.link}
                        href={item.link}
                        className="block w-full rounded-md px-3 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300"
                        onClick={() => {
                          setIsOpen(false)
                          setServicesDropdownOpen(false)
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about-us"
                className="block w-full rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200"
                onClick={() => setIsOpen(false)}
              >
                Về chúng tôi
              </Link>

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

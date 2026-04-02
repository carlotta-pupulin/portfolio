"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "#F5F4F1", borderRadius: "0 0 8px 8px" }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-[#1A1918] hover:opacity-60 transition-opacity"
        >
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ background: "#c8f04a" }}
          />
          pupulin
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm transition-opacity text-[#1A1918] ${
                    isActive ? "opacity-100 font-medium" : "opacity-40 hover:opacity-70"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

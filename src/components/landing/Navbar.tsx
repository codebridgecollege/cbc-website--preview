"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/base-path";
import { usePathname } from "next/navigation";

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 45 : -10;

      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileMenu(false);
    }
  };

  const navItems = [
    { name: "Courses", href: isHome ? "/#courses" : "/courses", id: "courses" },
    { name: "Testimonials", href: "/#reviews", id: "reviews" },
    { name: "Methodology", href: "/#methodology", id: "methodology" },
    { name: "Lecturers", href: "/#tutors", id: "tutors" },
    { name: "Partnerships", href: "/#organizations", id: "organizations" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 nav-glass ${scrolled ? "shadow-lg" : ""}`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-12">
        <div className="h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 z-50 group shrink-0"
            aria-label="CodeBridge Home"
          >
            <Image
              src={withBasePath("/images/logo.png")}
              alt="CodeBridge Logo"
              width={158}
              height={48}
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              style={{ filter: "brightness(0) invert(1)" }}
              unoptimized
            />
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) =>
                  isHome ? scrollToSection(e, item.id) : undefined
                }
                className="text-sm xl:text-base font-semibold text-slate-300 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-brand-blue hover:after:w-full after:transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenModal}
              className="hidden lg:flex btn btn-primary !h-10 !px-8 !text-sm xl:!text-base !font-semibold shadow-md shadow-blue-900/40"
            >
              Contact Us
            </button>
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden p-2 text-white z-50 focus:outline-none"
              aria-label="Toggle menu"
            >
              {!mobileMenu ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-0 left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 shadow-xl pt-24 pb-8 z-40 transition-all duration-200 ${mobileMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
      >
        <div className="px-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) =>
                isHome ? scrollToSection(e, item.id) : undefined
              }
              className="block text-2xl font-bold text-white py-3 border-b border-slate-800"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-6">
            <button
              onClick={() => {
                onOpenModal();
                setMobileMenu(false);
              }}
              className="btn btn-primary w-full text-lg h-14 shadow-lg shadow-blue-900/50"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

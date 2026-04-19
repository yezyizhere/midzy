"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    }

    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  function toggleMenu() {
    setOpenMenu((prev) => !prev);
  }

  const navLinks = [
    { href: "/", label: "메인 페이지" },
    { href: "/live", label: "라이브" },
    { href: "/broadcast", label: "공방참여" },
    { href: "/practice", label: "공방신청연습" },
    { href: "/cheer", label: "응원법" },
    { href: "/streaming", label: "스밍리스트" },
    { href: "/survey", label: "최애찾기" },
  ];

  return (
    <section ref={headerRef} className="bg-neutral-900 border-b border-zinc-200 text-zinc-200 h-15 z-50 relative">
      <nav className="h-full flex items-center justify-between mx-7 relative z-50 bg-neutral-900">
        <Link href="/">
          <img src="/picture/logo.png" alt="ITZY" className="w-8 h-7" />
        </Link>

        <div className="flex gap-5">
          <button type="button" aria-expanded={openMenu} onClick={toggleMenu} className="focus:outline-none relative z-50">
            <div className={`hamburger ${openMenu ? "is-active" : ""}`}>
              <span className="line block w-5 h-0.5 bg-gray-100 my-1 mx-auto transition-all duration-300"></span>
              <span className="line block w-5 h-0.5 bg-gray-100 my-1 mx-auto transition-all duration-300"></span>
              <span className="line block w-5 h-0.5 bg-gray-100 my-1 mx-auto transition-all duration-300"></span>
            </div>
          </button>
        </div>
      </nav>

      <nav
        className={`bg-neutral-900 transition-all duration-300 ease-in-out absolute left-0 right-0 w-full z-40 ${
          openMenu ? "max-h-96 opacity-100" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="px-7 py-5 flex flex-col gap-5 border-b border-zinc-200 shadow-xl bg-neutral-900">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${pathname === link.href ? "text-pink-500" : ""} hover:text-pink-400 transition-colors`}
              onClick={() => setOpenMenu(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      {/* Required styles since JSX style scope in next requires config, let's use direct CSS classes for hamburger or global CSS */}
      <style>{`
        .hamburger.is-active .line:nth-child(2) {
          opacity: 0;
        }

        .hamburger.is-active .line:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }

        .hamburger.is-active .line:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }
      `}</style>
    </section>
  );
}

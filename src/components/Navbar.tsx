"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopRegionsOpen, setDesktopRegionsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileRegionsOpen, setMobileRegionsOpen] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopRegionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const isActive = (href: string) => pathname === href;

  const regionLinks = [
    "southeast-asia",
    "europe",
    "north-america",
    "south-america",
    "africa",
    "middle-east",
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/main_logo.png"
              alt="Golden Shoestrings"
              width={50}
              height={58}
              className="h-[58px] w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-gray-600">
            {/* Regions Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDesktopRegionsOpen(!desktopRegionsOpen)}
                className="flex items-center gap-1 font-medium hover:text-gray-900 transition-colors focus:outline-none"
              >
                Regions
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    desktopRegionsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {desktopRegionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-30">
                  {regionLinks.map((region) => (
                    <Link
                      key={region}
                      href={`/regions/${region}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      {region
                        .split("-")
                        .map((word) => word[0].toUpperCase() + word.slice(1))
                        .join(" ")}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other desktop links */}
            {[
              { href: "/travel-hacks", label: "Travel Hacks" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-medium hover:text-gray-900 transition-colors ${
                  isActive(href) ? "text-[#DBA858] font-semibold" : ""
                }`}
              >
                {label}
              </Link>
            ))}

            {/* Search */}
            <div className="relative">
              {!searchOpen ? (
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="Open search"
                  className="text-gray-600 hover:text-gray-900 transition-colors focus:outline-none"
                >
                  🔍
                </button>
              ) : (
                <form
                  onSubmit={handleSearchSubmit}
                  className="flex items-center border border-gray-300 rounded-md bg-white transition-all duration-200 w-64"
                >
                  <input
                    type="text"
                    ref={searchInputRef}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="flex-1 px-3 py-2 text-sm text-gray-700 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Submit search"
                    className="px-3 py-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                  >
                    🔍
                  </button>
                </form>
              )}
            </div>

            <Link
              href="/newsletter"
              className={`bg-[#DBA858] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#c99747] transition-colors ${
                isActive("/newsletter") ? "ring-2 ring-offset-1 ring-[#DBA858]" : ""
              }`}
            >
              Subscribe
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          {/* Custom Regions Accordion */}
          <div
            className="flex items-center justify-between px-4 py-3 text-gray-700 font-medium hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() => setMobileRegionsOpen(!mobileRegionsOpen)}
          >
            <span>Regions</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                mobileRegionsOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {mobileRegionsOpen && (
            <div className="pl-6 pb-2 flex flex-col space-y-1">
              {regionLinks.map((region) => (
                <Link
                  key={region}
                  href={`/regions/${region}`}
                  className="block px-2 py-1 text-gray-700 hover:bg-gray-100 transition-colors rounded"
                >
                  {region
                    .split("-")
                    .map((word) => word[0].toUpperCase() + word.slice(1))
                    .join(" ")}
                </Link>
              ))}
            </div>
          )}

          {/* Other Mobile Links */}
          {["/travel-hacks", "/about", "/contact", "/newsletter"].map((path) => (
            <Link
              key={path}
              href={path}
              className={`block px-4 py-3 text-gray-700 font-medium hover:bg-gray-100 transition-colors ${
                isActive(path) ? "bg-[#FAF7F2] font-semibold text-[#DBA858]" : ""
              }`}
            >
              {path.replace("/", "").replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

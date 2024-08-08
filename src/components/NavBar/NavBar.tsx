"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { NavItems } from "../../helpers/NavItems.helper";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
export const NavBar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full items-center justify-evenly gap-4  bg-detailColor text-basicFont md:flex transition-all duration-300 ${
        isScrolled ? `p-2 rounded-b` : `p-5`
      }`}
    >
      <div className="flex items-center justify-between">
        <h2 className="cursor-default text-2xl drop-shadow-md">VLDM</h2>
        <button
          className="text-gray-700 hover:text-gray-900 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div className={`text-center  ${isOpen ? "hidden" : "block"}`}>
        <ul className="grid items-center gap-4 text-center md:flex">
          {NavItems.map((item) => {
            return (
              <Link
                key={item.Name}
                href={item.Href}
                className={`p2 hover:text-basicDarkFont  hover:scale-110 ${
                  pathname === item.Href
                    ? `font-semibold text-basicFont drop-shadow-lg`
                    : ``
                }`}
              >
                {item.Name}
              </Link>
            );
          })}
          <ThemeToggle />
        </ul>
      </div>
    </nav>
  );
};

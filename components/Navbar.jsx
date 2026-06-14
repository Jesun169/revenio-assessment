"use client";

import Link from "next/link";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import {
  Menu,
  X,
  User,
  LogOut,
  PackagePlus,
  Settings,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const { user, logout } = useAuth();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [dropdownOpen, setDropdownOpen] =
    useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
              P
            </div>

            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ProductHub
            </span>
          </Link>

          {/* Desktop Menu */}

          <div className="text-black hidden md:flex items-center gap-8">

            <Link
              href="/"
              className="hover:text-blue-600 transition"
            >
              Home
            </Link>

            <Link
              href="/items"
              className="hover:text-blue-600 transition"
            >
              Items
            </Link>

            <Link
              href="/about"
              className="hover:text-blue-600 transition"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="hover:text-blue-600 transition"
            >
              Contact
            </Link>

            <Link
              href="/faq"
              className="hover:text-blue-600 transition"
            >
              FAQ
            </Link>

            {/* User Dropdown */}

            {user ? (
              <div className="relative">

                <button
                  onClick={() =>
                    setDropdownOpen(
                      !dropdownOpen
                    )
                  }
                  className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition"
                >
                  <User size={18} />

                  <span>
                    {user.displayName ||
                      user.email}
                  </span>

                  <ChevronDown size={18} />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border overflow-hidden">

                    <div className="p-4 border-b">

                      <h3 className="font-semibold">
                        {
                          user.displayName
                        }
                      </h3>

                      <p className="text-sm text-gray-500">
                        {user.email}
                      </p>

                    </div>

                    <Link
                      href="/items/add"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                    >
                      <PackagePlus size={18} />
                      Add Product
                    </Link>

                    <Link
                      href="/items/manage"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                    >
                      <Settings size={18} />
                      Manage Products
                    </Link>

                    <button
                      onClick={logout}
                      className="w-full text-left flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-red-600"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>

                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-3">

                <Link
                  href="/login"
                  className="px-5 py-2 border rounded-full hover:bg-gray-100 transition"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transition"
                >
                  Register
                </Link>

              </div>
            )}
          </div>

          {/* Mobile Button */}

          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="md:hidden"
          >
            {menuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div className="md:hidden pb-5 flex flex-col gap-4 text-black">

            <Link href="/">
              Home
            </Link>

            <Link href="/items">
              Items
            </Link>

            <Link href="/about">
              About
            </Link>

            <Link href="/contact">
              Contact
            </Link>

            <Link href="/faq">
              FAQ
            </Link>

            {user ? (
              <>
                <p className="font-semibold">
                  {user.email}
                </p>

                <Link href="/items/add">
                  Add Product
                </Link>

                <Link href="/items/manage">
                  Manage Products
                </Link>

                <button
                  onClick={logout}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login">
                  Login
                </Link>

                <Link href="/register">
                  Register
                </Link>
              </>
            )}

          </div>
        )}

      </div>
    </nav>
  );
}
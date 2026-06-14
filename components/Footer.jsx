import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ProductHub
            </h2>

            <p className="mt-4 text-gray-400 leading-relaxed">
              A modern product management platform built
              with Next.js and Firebase. Explore, manage,
              and discover products effortlessly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>

              <Link href="/items" className="hover:text-white transition">
                Products
              </Link>

              <Link href="/about" className="hover:text-white transition">
                About
              </Link>

              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Resources
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link href="/faq" className="hover:text-white transition">
                FAQ
              </Link>

              <Link href="/login" className="hover:text-white transition">
                Login
              </Link>

              <Link href="/register" className="hover:text-white transition">
                Register
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>📧 support@producthub.com</p>
              <p>📱 +880 1234 567890</p>
              <p>📍 Dhaka, Bangladesh</p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ProductHub. All rights reserved.
          </p>

          <div className="flex gap-5 text-gray-400">

            <a href="#" className="hover:text-white transition">
              Facebook
            </a>

            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>

            <a href="#" className="hover:text-white transition">
              GitHub
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}
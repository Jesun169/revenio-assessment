"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Discover
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Premium Products
              </span>
              For Every Need
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Explore a curated collection of high-quality products, manage your inventory effortlessly, and enjoy a seamless shopping experience with ProductHub.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/items"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition"
              >
                Browse Products
              </Link>

              <Link
                href="/about"
                className="px-8 py-4 rounded-xl border border-gray-300 font-semibold hover:bg-gray-100 transition"
              >
                Learn More
              </Link>

            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">

              <div>
                <h3 className="text-3xl font-bold text-blue-600">500+</h3>
                <p className="text-gray-500">Products</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-purple-600">1K+</h3>
                <p className="text-gray-500">Customers</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-pink-600">98%</h3>
                <p className="text-gray-500">Satisfaction</p>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="relative">

            <div className="bg-white rounded-3xl shadow-2xl p-6 border">

              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200"
                alt="Product"
                className="rounded-2xl w-full h-[450px] object-cover"
              />

            </div>

            {/* Floating Card 1 */}
            <div className="absolute -left-5 top-10 bg-white p-4 rounded-2xl shadow-xl">
              <p className="text-sm text-gray-500">Featured Product</p>
              <h4 className="font-bold">Smart Watch</h4>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -right-5 bottom-10 bg-white p-4 rounded-2xl shadow-xl">
              <p className="text-sm text-gray-500">Rating</p>
              <h4 className="font-bold">⭐ 4.9 / 5</h4>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
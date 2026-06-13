"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import productsData from "@/data/products";

export default function ItemsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const localProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    setProducts([
      ...productsData,
      ...localProducts,
    ]);
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All"
        ? true
        : product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white">
          <div className="max-w-7xl mx-auto px-6 py-20 text-center">
            <h1 className="text-5xl font-bold">
              Explore Products
            </h1>

            <p className="mt-3 text-white/80">
              Browse all available products
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-6 rounded-2xl shadow-lg">

            <div className="grid md:grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="p-3 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <select
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
                className="p-3 rounded-xl border text-black"
              >
                <option value="All">
                  All Categories
                </option>

                <option value="Laptop">
                  Laptop
                </option>

                <option value="Phone">
                  Phone
                </option>

                <option value="Tablet">
                  Tablet
                </option>

                <option value="Accessory">
                  Accessory
                </option>
              </select>

            </div>

          </div>

          {/* Products */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition overflow-hidden"
                >

                  <img
                    src={
                      product.image ||
                      "https://via.placeholder.com/600x400"
                    }
                    alt={product.title}
                    className="h-56 w-full object-cover"
                  />

                  <div className="p-5">

                    <h2 className="text-xl text-black font-bold">
                      {product.title}
                    </h2>

                    <p className="text-gray-500 text-sm mt-2">
                      {product.description}
                    </p>

                    <div className="flex justify-between items-center mt-5">

                      <span className="text-blue-600 font-bold">
                        ${product.price}
                      </span>

                      <Link
                        href={`/items/${product.id}`}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl hover:scale-105 transition"
                      >
                        View Details
                      </Link>

                    </div>

                  </div>

                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <h2 className="text-2xl font-bold text-gray-700">
                  No Products Found
                </h2>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}
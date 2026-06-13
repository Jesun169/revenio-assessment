"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ManagePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    setProducts(storedProducts);
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    const updatedProducts = products.filter(
      (product) => product.id !== id
    );

    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );

    setProducts(updatedProducts);
  };

  return (
    <ProtectedRoute>
      <div className="relative min-h-screen overflow-hidden">

        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

          {/* Header */}
          <div className="text-center mb-12">

            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium">
              Product Management
            </span>

            <h1 className="text-5xl font-bold mt-4">
              Manage Products
            </h1>

            <p className="text-gray-600 mt-3">
              View and manage all your added products.
            </p>

          </div>

          {/* Empty State */}
          {products.length === 0 ? (
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 text-center shadow-xl">

              <h2 className="text-2xl font-bold">
                No Products Found
              </h2>

              <p className="text-gray-500 mt-3">
                Add your first product to get started.
              </p>

              <Link
                href="/items/add"
                className="inline-block mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold"
              >
                Add Product
              </Link>

            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden border border-white/40 hover:-translate-y-2 transition duration-300"
                >

                  <img
                    src={
                      product.image ||
                      "https://via.placeholder.com/500x300"
                    }
                    alt={product.title}
                    className="h-56 w-full object-cover"
                  />

                  <div className="p-6">

                    <div className="flex justify-between items-start mb-3">

                      <h2 className="text-xl font-bold">
                        {product.title}
                      </h2>

                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                        {product.category}
                      </span>

                    </div>

                    <p className="text-gray-600 text-sm line-clamp-2">
                      {product.description}
                    </p>

                    <div className="mt-4 flex justify-between items-center">

                      <span className="text-2xl font-bold text-purple-600">
                        ${product.price}
                      </span>

                    </div>

                    <div className="mt-6 flex gap-3">

                      <Link
                        href={`/items/${product.id}`}
                        className="flex-1 text-center py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                      >
                        View
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(product.id)
                        }
                        className="flex-1 py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

      </div>
    </ProtectedRoute>
  );
}
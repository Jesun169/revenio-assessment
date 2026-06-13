"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AddPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    fullDescription: "",
    price: "",
    image: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    const newProduct = {
      id: Date.now(),
      ...formData,
      price: Number(formData.price),
    };

    localStorage.setItem(
      "products",
      JSON.stringify([...existingProducts, newProduct])
    );

    setSuccess("✅ Product added successfully!");

    setFormData({
      title: "",
      category: "",
      description: "",
      fullDescription: "",
      price: "",
      image: "",
    });

    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  return (
    <ProtectedRoute>
      <div className="relative min-h-screen overflow-hidden">

        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 text-black">

          <div className="text-center mb-10">

            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium">
              Product Management
            </span>

            <h1 className="text-5xl text-gray-400 font-bold mt-4">
              Add New Product
            </h1>

            <p className="text-gray-500 mt-3">
              Create and manage your products easily.
            </p>

          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/40 p-8">

            {success && (
              <div className="mb-6 bg-green-100 text-green-700 p-4 rounded-xl">
                {success}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <div>
                <label className="block mb-2 font-medium">
                  Product Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="MacBook Pro M4"
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">
                    Select Category
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

              <div>
                <label className="block mb-2 font-medium">
                  Short Description
                </label>

                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  placeholder="Short product summary"
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Full Description
                </label>

                <textarea
                  rows="5"
                  name="fullDescription"
                  value={formData.fullDescription}
                  onChange={handleChange}
                  required
                  placeholder="Detailed product information..."
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Price ($)
                </label>

                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  placeholder="999"
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Image URL
                </label>

                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                  placeholder="https://example.com/image.jpg"
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-[1.02] transition"
              >
                Add Product
              </button>

            </form>

          </div>

        </div>

      </div>
    </ProtectedRoute>
  );
}
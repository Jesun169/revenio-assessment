"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function AddPage() {
  return (
    <ProtectedRoute>

      <div className="max-w-xl mx-auto py-10">

        <h1 className="text-4xl font-bold mb-8">
          Add Product
        </h1>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Title"
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            placeholder="Short Description"
            className="w-full border p-3 rounded"
          />

          <textarea
            placeholder="Full Description"
            className="w-full border p-3 rounded"
          />

          <input
            type="number"
            placeholder="Price"
            className="w-full border p-3 rounded"
          />

          <input
            type="text"
            placeholder="Image URL"
            className="w-full border p-3 rounded"
          />

          <button
            className="bg-blue-600 text-white px-6 py-3 rounded"
          >
            Submit
          </button>

        </form>

      </div>

    </ProtectedRoute>
  );
}
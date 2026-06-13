"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import products from "@/data/products";

export default function ManagePage() {
  return (
    <ProtectedRoute>

      <div className="max-w-7xl mx-auto px-5 py-10">

        <h1 className="text-4xl font-bold mb-8">
          Manage Products
        </h1>

        <div className="overflow-x-auto">

          <table className="w-full border">

            <thead>
              <tr className="bg-gray-100">
                <th className="p-3">
                  Product
                </th>
                <th className="p-3">
                  Category
                </th>
                <th className="p-3">
                  Price
                </th>
                <th className="p-3">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>

              {products.map(
                (product) => (
                  <tr
                    key={product.id}
                    className="border-t"
                  >
                    <td className="p-3">
                      {product.title}
                    </td>

                    <td className="p-3">
                      {product.category}
                    </td>

                    <td className="p-3">
                      $
                      {product.price}
                    </td>

                    <td className="p-3">

                      <button className="bg-blue-600 text-white px-3 py-1 rounded mr-2">
                        View
                      </button>

                      <button className="bg-red-500 text-white px-3 py-1 rounded">
                        Delete
                      </button>

                    </td>
                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </ProtectedRoute>
  );
}
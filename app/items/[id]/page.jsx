"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import productsData from "@/data/products";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const localProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    const allProducts = [
      ...productsData,
      ...localProducts,
    ];

    const foundProduct = allProducts.find(
      (item) => String(item.id) === String(id)
    );

    setProduct(foundProduct);

    if (foundProduct) {
      const related = allProducts
        .filter(
          (item) =>
            item.category === foundProduct.category &&
            item.id !== foundProduct.id
        )
        .slice(0, 3);

      setRelatedProducts(related);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">
          Product Not Found
        </h1>

        <Link
          href="/items"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">

      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

        <Link
          href="/items"
          className="inline-flex items-center mb-8 text-blue-600 font-semibold hover:underline"
        >
          ← Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8">

          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[500px] object-cover rounded-2xl"
          />

          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
              {product.category}
            </span>

            <h1 className="text-5xl text-black font-bold mt-5">
              {product.title}
            </h1>

            <p className="text-3xl font-bold text-blue-600 mt-4">
              ${product.price}
            </p>

            <p className="text-gray-600 mt-6 leading-relaxed">
              {product.fullDescription ||
                product.description}
            </p>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">
                Specifications
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li>✅ Premium Quality</li>
                <li>✅ 1 Year Warranty</li>
                <li>✅ Fast Delivery</li>
                <li>✅ Secure Payment</li>
              </ul>
            </div>

          </div>

        </div>

        <div className="mt-20">

          <h2 className="text-4xl font-bold mb-8">
            Related Products
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {relatedProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-5">

                  <h3 className="text-xl text-black font-bold">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {item.description}
                  </p>

                  <Link
                    href={`/items/${item.id}`}
                    className="inline-block mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg"
                  >
                    View Details
                  </Link>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}
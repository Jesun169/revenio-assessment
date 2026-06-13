import Link from "next/link";
import products from "@/data/products";

export default function FeaturedProducts() {
  const featured = products.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-12">

        <h2 className="text-4xl font-bold">
          Featured Products
        </h2>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {featured.map((product) => (
          <div
            key={product.id}
            className="bg-white/80 rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition"
          >

            <img
              src={product.image}
              alt={product.title}
              className="h-60 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-xl font-bold">
                {product.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {product.description}
              </p>

              <Link
                href={`/items/${product.id}`}
                className="inline-block mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg"
              >
                View Product
              </Link>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
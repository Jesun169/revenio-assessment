export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Store Owner",
      review:
        "ProductHub made managing products incredibly easy.",
    },
    {
      name: "David Smith",
      role: "Entrepreneur",
      review:
        "The UI is beautiful and the experience is seamless.",
    },
    {
      name: "Emily Brown",
      role: "Manager",
      review:
        "Exactly what I needed for product management.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-12">

        <h2 className="text-4xl font-bold">
          What Users Say
        </h2>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-lg hover:-translate-y-2 transition"
          >

            <div className="text-yellow-500 text-xl">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="text-gray-600 mt-4">
              "{item.review}"
            </p>

            <h3 className="font-bold mt-6">
              {item.name}
            </h3>

            <p className="text-sm text-gray-500">
              {item.role}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}
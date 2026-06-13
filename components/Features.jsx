export default function Features() {
  const features = [
    {
      icon: "🚀",
      title: "Fast Performance",
      description:
        "Built with Next.js App Router for lightning-fast experience.",
    },
    {
      icon: "🔐",
      title: "Secure Authentication",
      description:
        "Firebase Authentication protects your account and products.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description:
        "Looks perfect on desktop, tablet, and mobile devices.",
    },
    {
      icon: "⚡",
      title: "Easy Management",
      description:
        "Add, view, and manage products with ease.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Powerful Features
        </h2>

        <p className="text-gray-600 mt-3">
          Everything you need in one platform.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition"
          >
            <div className="text-5xl">
              {feature.icon}
            </div>

            <h3 className="text-xl font-bold mt-4">
              {feature.title}
            </h3>

            <p className="text-gray-600 mt-3">
              {feature.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}
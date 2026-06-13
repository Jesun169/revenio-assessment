export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200"
            alt="Why Choose Us"
            className="rounded-3xl shadow-xl"
          />
        </div>

        <div>

          <h2 className="text-4xl font-bold">
            Why Choose ProductHub?
          </h2>

          <p className="text-gray-600 mt-5">
            ProductHub combines modern technology,
            beautiful design, and secure authentication
            to deliver a premium user experience.
          </p>

          <div className="mt-8 space-y-4">

            <div>✅ Secure Firebase Login</div>
            <div>✅ Easy Product Management</div>
            <div>✅ Modern UI Design</div>
            <div>✅ Fully Responsive Layout</div>

          </div>

        </div>

      </div>

    </section>
  );
}
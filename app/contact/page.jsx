export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10">

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-12 text-center">

          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
            📩 Get In Touch
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-black">
            Contact
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              ProductHub
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            Have questions, feedback, or suggestions?
            We'd love to hear from you.
          </p>

        </section>

        {/* Contact Content */}
        <section className="max-w-7xl mx-auto text-black px-6 pb-20">

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Contact Info */}
            <div className="space-y-6">

              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-3">
                  📍 Address
                </h3>

                <p className="text-gray-600">
                  Kaliganj, Dhaka, Bangladesh
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-3">
                  📧 Email
                </h3>

                <p className="text-gray-600">
                  contact@producthub.com
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-3">
                  📞 Phone
                </h3>

                <p className="text-gray-600">
                  +880 1234 567890
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-3">
                  ⏰ Working Hours
                </h3>

                <p className="text-gray-600">
                  Monday - Friday
                </p>

                <p className="text-gray-600">
                  9:00 AM - 6:00 PM
                </p>
              </div>

            </div>

            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl">

              <h2 className="text-3xl font-bold mb-6">
                Send a Message
              </h2>

              <form className="space-y-5">

                <div>
                  <label className="block mb-2 font-medium">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-[1.02] transition"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </section>

      </div>

    </div>
  );
}
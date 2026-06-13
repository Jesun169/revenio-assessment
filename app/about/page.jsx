export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10">

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">

          <div className="text-center">

            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
              🚀 About ProductHub
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-gray-400">
              Smart Product
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Management Platform
              </span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              ProductHub is a modern product management
              application built with Next.js and Firebase.
              It allows users to browse products, view
              details, manage inventory, and securely
              access protected features through
              authentication.
            </p>

          </div>

        </section>

        {/* About Content */}
        <section className="max-w-7xl mx-auto px-6 pb-20">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Side */}
            <div>

              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200"
                alt="About ProductHub"
                className="rounded-3xl shadow-2xl w-full"
              />

            </div>

            {/* Right Side */}
            <div>

              <h2 className="text-4xl font-bold text-gray-400">
                Why ProductHub?
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed">
                ProductHub was designed to provide a clean,
                responsive, and user-friendly experience for
                managing products. Whether you're showcasing
                products, organizing inventory, or learning
                modern web development, ProductHub delivers
                a professional solution.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex gap-3">
                  <span className="text-green-500">✅</span>
                  <p>Secure Firebase Authentication</p>
                </div>

                <div className="flex gap-3">
                  <span className="text-green-500">✅</span>
                  <p>Protected Routes & User Management</p>
                </div>

                <div className="flex gap-3">
                  <span className="text-green-500">✅</span>
                  <p>Responsive Modern UI Design</p>
                </div>

                <div className="flex gap-3">
                  <span className="text-green-500">✅</span>
                  <p>Dynamic Product Details Pages</p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold text-gray-400">
              Key Features
            </h2>

            <p className="mt-3 text-gray-600">
              Everything needed for modern product management.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-bold">Products</h3>
              <p className="text-gray-600 mt-2">
                Browse and discover products easily.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold">Authentication</h3>
              <p className="text-gray-600 mt-2">
                Secure login and registration with Firebase.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold">Fast Performance</h3>
              <p className="text-gray-600 mt-2">
                Built with Next.js App Router for speed.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold">Responsive</h3>
              <p className="text-gray-600 mt-2">
                Optimized for desktop, tablet, and mobile.
              </p>
            </div>

          </div>

        </section>

      </div>

    </div>
  );
}
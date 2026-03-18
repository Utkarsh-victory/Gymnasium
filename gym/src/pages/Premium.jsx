export default function Premium() {
  return (
    <section className="relative min-h-screen text-white flex items-center justify-center px-6 md:px-20 overflow-hidden">

      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full text-center">

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Premium <span className="text-red-500">Membership</span>
        </h1>

        <p className="text-gray-300 mb-10 text-lg">
          Complete transformation package with personal coaching, diet plans, and VIP access.
        </p>

        <div className="bg-black/70 border border-red-500 rounded-2xl p-8 shadow-2xl backdrop-blur-md hover:scale-105 transition duration-300">

          <h2 className="text-5xl font-bold text-red-500 mb-4">₹4999</h2>
          <p className="text-gray-400 mb-6">per month</p>

          <ul className="space-y-3 text-gray-300 text-lg">
            <li>✔ Full Gym Access</li>
            <li>✔ Unlimited Cardio & Strength</li>
            <li>✔ Personal Trainer (Daily)</li>
            <li>✔ Customized Diet Plan</li>
            <li>✔ Body Transformation Tracking</li>
            <li>✔ Supplement Guidance</li>
            <li>✔ Priority Support</li>
            <li>✔ VIP Locker & Steam Access</li>
          </ul>

          <button className="mt-8 bg-red-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 hover:scale-110 transition duration-300 shadow-lg">
            Join Now
          </button>

        </div>

      </div>
    </section>
  );
}
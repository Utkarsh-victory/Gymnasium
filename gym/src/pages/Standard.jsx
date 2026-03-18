export default function Standard() {
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
          Standard <span className="text-red-500">Membership</span>
        </h1>

        <p className="text-gray-300 mb-10 text-lg">
          Ideal for regular gym-goers with additional support and training benefits.
        </p>

        <div className="bg-black/70 border border-gray-500 rounded-2xl p-8 shadow-xl backdrop-blur-md hover:scale-105 transition duration-300">

          <h2 className="text-5xl font-bold text-red-500 mb-4">₹1999</h2>
          <p className="text-gray-400 mb-6">per month</p>

          <ul className="space-y-3 text-gray-300 text-lg">
            <li>✔ Full Gym Access</li>
            <li>✔ Cardio + Strength Area</li>
            <li>✔ Locker Facility</li>
            <li>✔ Group Classes (Zumba/Yoga)</li>
            <li>✔ 2 Personal Trainer Sessions / Week</li>
            <li>✔ Basic Diet Guidance</li>
            <li>❌ Customized Diet Plan</li>
          </ul>

          <button className="mt-8 bg-red-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 hover:scale-110 transition duration-300 shadow-lg">
            Join Now
          </button>

        </div>

      </div>
    </section>
  );
}
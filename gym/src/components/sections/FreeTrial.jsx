import { useState } from "react";

export default function FreeTrial() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    plan: "Basic",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Free Trial Requested 🚀");
    console.log(form);
  };

  return (
    <section
      id="free-trial"
      className="relative py-24 text-white overflow-hidden flex justify-center items-center"
    >
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
        className="absolute inset-0 w-full h-full object-cover opacity-20 scale-110 animate-[zoomBg_12s_ease-in-out_infinite_alternate]"
      />
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 opacity-0 animate-[fadeUp_1s_ease-out_forwards]">
          Get Your <span className="text-red-500">Free Trial</span>
        </h2>

        <p className="text-gray-300 mb-10 opacity-0 animate-[fadeUp_1s_ease-out_forwards] [animation-delay:0.3s]">
          Try our gym for free and start your fitness journey today!
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-black/70 border border-gray-700 rounded-2xl p-8 backdrop-blur-md shadow-xl space-y-6 opacity-0 animate-[fadeUp_1s_ease-out_forwards] [animation-delay:0.6s] hover:shadow-[0_0_40px_rgba(255,0,0,0.3)] transition duration-500"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black border border-gray-600 focus:border-red-500 focus:scale-105 transition duration-300 outline-none"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black border border-gray-600 focus:border-red-500 focus:scale-105 transition duration-300 outline-none"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black border border-gray-600 focus:border-red-500 focus:scale-105 transition duration-300 outline-none"
          />

          {/* Plan */}
          <select
            name="plan"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black border border-gray-600 focus:border-red-500 transition duration-300 outline-none"
          >
            <option>Basic</option>
            <option>Standard</option>
            <option>Premium</option>
          </select>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-red-500 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 hover:scale-110 transition duration-300 shadow-lg"
          >
            Start Free Trial
          </button>
        </form>
      </div>

      {/* 🔥 INLINE ANIMATION */}
      <style>
        {`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomBg {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        `}
      </style>
    </section>
  );
}

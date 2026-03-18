import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent 🚀");
    console.log(form);
  };

  return (
    <section className="relative min-h-screen text-white flex items-center justify-center px-6 md:px-20 overflow-hidden">
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-black/85"></div>

      <div className="relative z-10 w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-6 opacity-0 animate-[fadeLeft_1s_ease-out_forwards]">
          <h1 className="text-4xl md:text-6xl font-bold">
            Contact <span className="text-red-500">Us</span>
          </h1>

          <p className="text-gray-300">
            Have questions or want to join our gym? Reach out to us and start
            your fitness journey today!
          </p>

          <div className="space-y-3 text-gray-400">
            <p>📍 Meerut, India</p>
            <p>📞 +91 9876543210</p>
            <p>📧 gym@email.com</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-black/70 border border-gray-700 rounded-2xl p-8 backdrop-blur-md shadow-xl space-y-6 opacity-0 animate-[fadeRight_1s_ease-out_forwards]"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black border border-gray-600 focus:border-red-500 focus:scale-105 transition duration-300 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black border border-gray-600 focus:border-red-500 focus:scale-105 transition duration-300 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black border border-gray-600 focus:border-red-500 focus:scale-105 transition duration-300 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-red-500 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 hover:scale-110 transition duration-300 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* 🔥 Animation */}
      <style>
        {`
        @keyframes fadeLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeRight {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        `}
      </style>
    </section>
  );
}

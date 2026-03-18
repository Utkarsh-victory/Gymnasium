export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-16 pb-8 px-6 md:px-20 overflow-hidden">

      {/* Background glow */}
      <div className="absolute w-72 h-72 bg-red-500/20 blur-3xl rounded-full top-0 left-0"></div>
      <div className="absolute w-72 h-72 bg-red-500/10 blur-3xl rounded-full bottom-0 right-0"></div>

      <div className="relative z-10 grid md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h1 className="text-3xl font-bold text-red-500">GYM</h1>
          <p className="mt-4 text-gray-400">
            Transform your body and mind with the best fitness programs and expert trainers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-red-500 cursor-pointer transition">Home</li>
            <li className="hover:text-red-500 cursor-pointer transition">Services</li>
            <li className="hover:text-red-500 cursor-pointer transition">Gallery</li>
            <li className="hover:text-red-500 cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* Membership */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Membership</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-red-500 cursor-pointer transition">Basic Plan</li>
            <li className="hover:text-red-500 cursor-pointer transition">Standard Plan</li>
            <li className="hover:text-red-500 cursor-pointer transition">Premium Plan</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-400">📍 Meerut, India</p>
          <p className="text-gray-400 mt-2">📞 +91 9876543210</p>
          <p className="text-gray-400 mt-2">📧 gym@email.com</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="relative z-10 border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
        © 2026 GYM. All Rights Reserved.
      </div>

    </footer>
  );
}
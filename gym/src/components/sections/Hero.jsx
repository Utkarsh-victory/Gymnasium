import AboutSection from "./AboutSection";
export default function Hero() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
          alt="gym"
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-110 transition-transform duration-[10000ms] hover:scale-125"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 space-y-6">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg animate-pulse">
            Transform Your Body <br />
            <span className="text-red-500">Build Your Strength</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 max-w-xl mx-auto opacity-0 animate-[fadeIn_1.5s_ease-in_forwards]">
            Push your limits and achieve your dream physique with expert
            trainers.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-red-500 px-6 py-3 rounded-lg hover:bg-red-600 hover:scale-110 transition duration-300 shadow-xl">
              Join Now
            </button>

            <button className="border border-gray-400 px-6 py-3 rounded-lg hover:border-red-500 hover:text-red-500 transition duration-300">
              Explore
            </button>
          </div>
        </div>
      </section>
      <AboutSection />
    </>
  );
}

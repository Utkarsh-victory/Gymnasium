import useInView from "../../hooks/useInView";

export default function AboutSection() {
  const [ref1, show1] = useInView();
  const [ref2, show2] = useInView();

  return (
    <section className="relative text-white overflow-hidden">

      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10">

        {/* SECTION 1 */}
        <div
          ref={ref1}
          className="flex flex-col md:flex-row items-center px-6 md:px-20 py-24 gap-12"
        >
          {/* TEXT */}
          <div
            className={`md:w-1/2 transition-all duration-700 ${
              show1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <h2 className="text-4xl font-bold">
              Train Like a <span className="text-red-500">Beast</span>
            </h2>
            <p className="text-gray-300 mt-4">
              Build strength with world-class training equipment and expert guidance.
            </p>
          </div>

          {/* IMAGE */}
          <div
            className={`md:w-1/2 transition-all duration-700 ${
              show1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* SECTION 2 */}
        <div
          ref={ref2}
          className="flex flex-col md:flex-row-reverse items-center px-6 md:px-20 py-24 gap-12"
        >
          {/* TEXT */}
          <div
            className={`md:w-1/2 transition-all duration-700 ${
              show2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <h2 className="text-4xl font-bold">
              Build Your <span className="text-red-500">Strength</span>
            </h2>
            <p className="text-gray-300 mt-4">
              Personalized workout and diet plans for best results.
            </p>
          </div>

          {/* IMAGE */}
          <div
            className={`md:w-1/2 transition-all duration-700 ${
              show2 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
              className="rounded-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
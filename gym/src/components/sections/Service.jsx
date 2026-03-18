import useInView from "../../hooks/useInView";

export default function Services() {
  const [ref, show] = useInView();

const services = [
  {
    title: "Strength Training",
    desc: "Build muscle and increase strength with advanced weight training equipment.",
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
  },
  {
    title: "Cardio Training",
    desc: "Improve endurance and burn fat with high-intensity cardio workouts.",
    img: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74",
  },
  {
    title: "Personal Training",
    desc: "Get one-on-one guidance from certified trainers for faster results.",
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
  },
  {
    title: "Yoga & Flexibility",
    desc: "Enhance flexibility and relax your body with guided yoga sessions.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
  },
  {
    title: "Diet & Nutrition",
    desc: "Customized diet plans to support your fitness and transformation goals.",
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
  },
  {
    title: "Group Classes",
    desc: "Join fun and energetic group sessions like Zumba, HIIT, and aerobics.",
    img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f",
  },
];

  return (
    <section className="relative text-white py-24 overflow-hidden">

      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="absolute inset-0 bg-black/90"></div>

      <div className="relative z-10 px-6 md:px-20">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Our <span className="text-red-500">Services</span>
        </h2>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {services.map((service, i) => (
            <div
              key={i}
              className={`bg-black/70 border border-gray-700 rounded-2xl overflow-hidden shadow-xl transition-all duration-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] ${
                show
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <img
                src={service.img}
                alt="service"
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-red-500">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
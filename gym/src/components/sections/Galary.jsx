import useInView from "../../hooks/useInView";

import img1 from "../../assets/images/gymSetupBg2.png";
import img2 from "../../assets/images/man-8545861_1280.jpg";
import img3 from "../../assets/images/pexels-hamidtajikph-17959562.jpg";
import img4 from "../../assets/images/u5bsvl4sxeq5nhz9smb0.webp";
import img5 from "../../assets/images/078b1-16852755676448-1920.webp";
import img6 from "../../assets/images/glutes-exercises-arnold-gym.webp";
import img7 from "../../assets/images/istockphoto-1279522744-170667a.jpg";

export default function Gallery() {
  const [ref, show] = useInView();

  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <section className="relative text-white py-24 overflow-hidden">

      {/* Background */}
      <img
        src={img1}
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="absolute inset-0 bg-black/90"></div>

      <div className="relative z-10 px-6 md:px-20">

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Our <span className="text-red-500">Gallery</span>
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-xl transition-all duration-700 ${
                show
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={img}
                alt="gym"
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
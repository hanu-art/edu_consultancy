import { useEffect, useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Their strategic insights helped us streamline our placement operations and improve interview conversion significantly within a year.",
    name: "Rahul Mehta",
    designation: "Training & Placement Officer, Indore Institute",
  },
  {
    quote:
      "The structured roadmap and execution support transformed our campus hiring pipeline.",
    name: "Priya Sharma",
    designation: "Director, SkillBridge Academy",
  },
  {
    quote:
      "We achieved measurable growth in student placements after implementing their consulting framework.",
    name: "Amit Verma",
    designation: "CEO, NextGen Tech Solutions",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (!isPaused) startAutoSlide();
    return () => stopAutoSlide();
  }, [isPaused]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-full py-24 bg-[#f9fafb]">
      <div
        className="max-w-3xl mx-auto px-6 text-center relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute -left-14 top-1/2 -translate-y-1/2 border border-[#007bff] text-[#007bff] p-2 rounded-full hover:bg-[#007bff] hover:text-white transition"
        >
          <ArrowLeft size={18} />
        </button>

        <button
          onClick={handleNext}
          className="absolute -right-14 top-1/2 -translate-y-1/2 border border-[#007bff] text-[#007bff] p-2 rounded-full hover:bg-[#007bff] hover:text-white transition"
        >
          <ArrowRight size={18} />
        </button>

        {/* Fixed Height Wrapper (important) */}
        <div className="relative min-h-[140px] flex items-center justify-center">

          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`absolute transition-opacity duration-700 ease-in-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-sm md:text-base leading-relaxed text-gray-600 font-normal">
                {item.quote}
              </p>

              <div className="mt-6">
                <p className="text-[#007bff] text-sm font-medium">
                  – {item.name}
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  {item.designation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-[#007bff] w-5"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

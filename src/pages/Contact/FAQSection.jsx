import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide structured campus recruitment strategies, curriculum optimization consulting, corporate partnership development, and mentorship frameworks to improve placement outcomes."
  },
  {
    question: "How do I schedule a consultation?",
    answer:
      "You can schedule a consultation by visiting our Contact page and submitting the inquiry form. Our team will respond within 24 hours."
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work primarily with colleges, IT institutes, and placement-driven organizations aiming to enhance hiring success."
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Most consulting engagements range between 4 to 12 weeks depending on project scope."
  },
  {
    question: "Do you provide ongoing support after the project?",
    answer:
      "Yes, we offer continued advisory and performance monitoring support to ensure sustained growth."
  },
  {
    question: "How are your consultants qualified?",
    answer:
      "Our consultants bring hands-on industry experience in recruitment strategy and academic alignment."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-normal text-[#1f2d3d]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Answers to common inquiries about our consulting services.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">

          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-5">

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left group"
              >
                <span className="text-sm md:text-base font-normal text-[#1f2d3d] group-hover:text-[#0056D2] transition">
                  {faq.question}
                </span>

                <Plus
                  size={18}
                  className={`transition-all duration-300 ${
                    activeIndex === index
                      ? "rotate-45 text-[#0056D2]"
                      : "text-gray-500 group-hover:text-[#0056D2]"
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  activeIndex === index
                    ? "max-h-40 mt-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

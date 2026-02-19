import { useState } from "react";
import { createStudent } from "../../api/students/students.api";

export default function ContactSection() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createStudent(formData);
      alert("Form Submitted Successfully");

      setFormData({
        name: "",
        email: "",
        phone: "",
        description: "",
      });

    } catch (error) {
      console.error(error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <section className="relative w-full py-28 bg-white overflow-hidden">

      {/* Background Pattern - Layer 1 */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <img
          src="/images/contour.png"
          alt="Pattern"
          className="w-[75%] opacity-15 object-contain"
        />
      </div>

      {/* Background Pattern - Layer 2 */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none rotate-180">
        <img
          src="/images/contour.png"
          alt="Pattern"
          className="w-[65%] opacity-10 object-contain"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-medium text-[#1f2d3d]">
            Contact & Support
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We're here to assist you. Whether it's inquiries, consultation,
            or partnership discussions, feel free to reach out.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* Form Card */}
          <div className="bg-[#fafdff] p-8">

            <h3 className="text-lg font-medium text-[#1f2d3d] mb-6">
              Get in Touch with Us
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>

              <div>
                <label className="text-sm text-gray-600">Name *</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-2 w-full border border-gray-300 px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Email *</label>
                <input
                  type="email"
                  placeholder="example@company.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-2 w-full border border-gray-300 px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Phone Number</label>
                <input
                  type="text"
                  placeholder="+91 000 000 0000"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="mt-2 w-full border border-gray-300 px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Message *</label>
                <textarea
                  rows="3"
                  placeholder="Leave us a message"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="mt-2 w-full border border-gray-300 px-4 py-2.5 text-sm resize-none bg-white focus:outline-none focus:border-gray-400"
                />
              </div>

              {/* Brand Button */}
              <button
                type="submit"
                className="w-full bg-[#0056D2] hover:bg-[#0047B3] text-white text-sm font-medium px-6 py-2.5 transition"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* Support Info */}
          <div className="space-y-10 text-sm text-gray-700">

            <div>
              <h4 className="font-medium text-[#1f2d3d]">
                Chat to Support
              </h4>
              <p className="mt-2 text-gray-600">
                Connect with our team for consultation and support guidance.
              </p>
              <a
                href="#"
                className="inline-block mt-3 text-[#0056D2] font-medium hover:underline"
              >
                Start Live Chat
              </a>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h4 className="font-medium text-[#1f2d3d]">
                Call Us
              </h4>
              <p className="mt-2 text-gray-600">
                Monday – Friday, 9:00 AM – 6:00 PM
              </p>
              <p className="mt-2 text-[#1f2d3d]">
                +91 98716 98765
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h4 className="font-medium text-[#1f2d3d]">
                Email Support
              </h4>
              <p className="mt-2 text-gray-600">
                We typically respond within 24 hours.
              </p>
              <a
                href="mailto:support@yourconsultancy.com"
                className="mt-2 inline-block text-[#0056D2] font-medium hover:underline"
              >
                support@yourconsultancy.com
              </a>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h4 className="font-medium text-[#1f2d3d]">
                Office Location
              </h4>
              <p className="mt-2 text-gray-600">
                Vijay Nagar, Indore – 452001
                <br />
                Madhya Pradesh, India
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

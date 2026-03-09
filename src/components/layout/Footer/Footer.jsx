import { Link } from "react-router-dom";
import { Mail, MapPin, Phone,Linkedin, Instagram, Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center">
              <img
                src="/images/edu_logo.png"
                alt="EduSkillPlace"
                className="h-[60px] w-auto object-contain"
              />
            </Link>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              EduSkillPlace provides expert guidance for college and university
              admissions, helping students choose the right path for their
              future. We also offer industry-oriented training programs,
              placement preparation, and career mentoring through strong
              industry collaborations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Quick Links
            </h4>

            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li>
                <Link to="/" className="hover:text-[#007bff] transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-[#007bff] transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-[#007bff] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Services
            </h4>

            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li>
                Admission Guidance
              </li>

              <li>
                Industry Training Programs
              </li>

              <li>
                Placement Preparation
              </li>

              <li>
                Internship Assistance
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Contact
            </h4>

            <ul className="mt-6 space-y-4 text-sm text-gray-600">

              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-[#007bff]" />
                 96/98 Suyash Vihar , Near Marriot Hotel , Indore
              </li>

              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#007bff]" />
                 hr@eduskillplace.com
              </li>

              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#007bff]" />
                +91 8962756565
              </li>

            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">

              <a href="#" className="text-gray-500 hover:text-[#007bff] transition">
                <Linkedin size={18} />
              </a>

              <a href="#" className="text-gray-500 hover:text-[#007bff] transition">
                <Instagram size={18} />
              </a>

              <a href="#" className="text-gray-500 hover:text-[#007bff] transition">
                <Facebook size={18} />
              </a>

             <a
  href="https://wa.me/918962756565"
  className="text-gray-500 hover:text-green-600 transition"
>
  <FaWhatsapp size={18} />
</a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-16 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} EduSkillPlace. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
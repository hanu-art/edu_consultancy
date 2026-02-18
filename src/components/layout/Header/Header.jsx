import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS } from "./header.data";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
      
      <div className="flex items-center h-[72px] w-full">

   
<div className="pl-8 flex-shrink-0 h-full flex items-center">
  <Link to="/" className="flex items-center h-full">
    <img
      src="/images/edu_logo.png"
      alt="EduSkillPlace Consultancy Services"
      className="h-[60px] w-auto object-contain"
    />
  </Link>
</div>





        {/* Center Navigation */}
        <div className="flex-1 flex justify-center">
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((item, index) => (
              <div key={index} className="relative group">

                {!item.dropdown ? (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-[14.5px] font-normal transition-colors duration-200 ${
                        isActive
                          ? "text-[#0056D2]"
                          : "text-[#1F2D3D] hover:text-[#0056D2]"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <>
                    {/* Parent WITHOUT Arrow */}
                    <div className="cursor-pointer text-[14.5px] font-normal text-[#1F2D3D] hover:text-[#0056D2] transition-colors duration-200">
                      {item.label}
                    </div>

                    {/* Dropdown */}
                    <div className="absolute top-full left-0 mt-3 w-56 bg-white shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.dropdown.map((subItem, subIndex) => (
                        <NavLink
                          key={subIndex}
                          to={subItem.path}
                          className="block px-4 py-2 text-[14px] text-slate-600 hover:bg-slate-50 hover:text-[#0056D2] transition-colors"
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  </>
                )}

              </div>
            ))}
          </nav>
        </div>

        {/* Right Full Height CTA */}
        <div className="hidden lg:flex h-full flex-shrink-0">
          <Link
            to="/contact"
            className="flex items-center justify-center
                       h-full px-10
                       bg-[#0056D2] hover:bg-[#0047B3]
                       text-white text-[14px] font-medium
                       transition-colors duration-200"
          >
            Free Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden ml-auto pr-6 text-[#0A2540] text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-6">
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map((item, index) => (
              <div key={index}>
                {!item.dropdown ? (
                  <NavLink
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="block text-[15px] font-normal text-[#1F2D3D]"
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === index ? null : index
                        )
                      }
                      className="flex items-center justify-between w-full text-[15px] font-normal text-[#1F2D3D]"
                    >
                      <span>{item.label}</span>
                    </button>

                    {mobileDropdown === index && (
                      <div className="mt-3 ml-4 flex flex-col gap-3">
                        {item.dropdown.map((subItem, subIndex) => (
                          <NavLink
                            key={subIndex}
                            to={subItem.path}
                            onClick={() => setMobileOpen(false)}
                            className="text-[14px] text-slate-600"
                          >
                            {subItem.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 bg-[#0056D2] hover:bg-[#0047B3] text-white text-[14px] font-medium px-6 py-2 text-center"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      )}

    </header>
  );
};

export default Header;

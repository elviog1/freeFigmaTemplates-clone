import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="flex justify-center">
      <div className="max-w-7xl">
        <nav className="flex h-28">
          <div className="flex gap-10 items-center">
            <img
              src="https://uploads-ssl.webflow.com/5ff546436062a3ce715bcd1d/638ecdd98ce65fc3a572f295_fft-logo.svg"
              alt="logo"
              className="w-64"
            />
            <div className="md:flex hidden gap-14">
              <a
                href="#website"
                className="hover:text-hoverColor text-sm font-medium"
              >
                Websites
              </a>
              <a
                href="#mobile"
                className="hover:text-hoverColor text-sm font-medium"
              >
                Mobile Apps
              </a>
              <a
                href="#illustrations"
                className="hover:text-hoverColor text-sm font-medium"
              >
                Illustration & Icons
              </a>
              <a
                href="#wireframes"
                className="hover:text-hoverColor text-sm font-medium"
              >
                Wireframes & Design Systems
              </a>
              <a href="#">
                <img src="https://uploads-ssl.webflow.com/5ff546436062a3ce715bcd1d/60039f7b15ff57798bbf6fa0_search.svg" />
              </a>
            </div>
            <button className="block md:hidden" onClick={handleOpen}>
              <span className="text-4xl border-4 border-gray-500 px-3 rounded-xl">{open ? "-" : "+"}</span>
            </button>
          </div>
        </nav>
        {/* MOBILE */}
        {open && (
          <div className="flex flex-col items-center gap-4 md:hidden">
            <a
              href="#website"
              className="hover:text-hoverColor text-sm font-medium"
            >
              Websites
            </a>
            <a
              href="#mobile"
              className="hover:text-hoverColor text-sm font-medium"
            >
              Mobile Apps
            </a>
            <a
              href="#illustrations"
              className="hover:text-hoverColor text-sm font-medium"
            >
              Illustration & Icons
            </a>
            <a
              href="#wireframes"
              className="hover:text-hoverColor text-sm font-medium"
            >
              Wireframes & Design Systems
            </a>
            <a href="#">
              <img src="https://uploads-ssl.webflow.com/5ff546436062a3ce715bcd1d/60039f7b15ff57798bbf6fa0_search.svg" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

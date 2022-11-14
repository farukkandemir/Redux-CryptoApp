import React, {useState} from "react";
import {FaHome} from "react-icons/fa";
import {BsGraphUp, BsNewspaper} from "react-icons/bs";
import {FcStatistics} from "react-icons/fc";
import Footer from "./Footer";
import {Link} from "react-router-dom";

function Sidebar() {
  const [active, setActive] = useState("Home");

  const links = [
    {name: "Home", icon: <FaHome />, href: "/"},
    {name: "Cyrptocurrencies", icon: <BsGraphUp />, href: "/cryptocurrencies"},
    {name: "Statistics", icon: <FcStatistics />, href: "/statistics"},
    {name: "News", icon: <BsNewspaper />, href: "/news"},
  ];

  return (
    <nav className="lg:h-screen lg:w-64 bg-darkBlue text-lightGray static lg:fixed lg:top-0 lg:left-0">
      <div>
        <h1 className="text-2xl text-center pt-4">CryptoMania</h1>
      </div>
      <ul className="pt-8 flex lg:block overflow-y-auto">
        {links.map((link, index) => (
          <Link to={link.href} key={index}>
            <li
              onClick={() => setActive(link.name)}
              className={`flex gap-2 mb-4 px-4 py-2 items-center md:text-lg cursor-pointer ${
                active === link.name &&
                "bg-blue-500 rounded-xl text-white transition-all duration-500"
              }`}
            >
              <span>{link.icon}</span>
              <p>{link.name}</p>
            </li>
          </Link>
        ))}
      </ul>

      <Footer />
    </nav>
  );
}

export default Sidebar;

import React from "react";
import './Header.css'

const Header = () => {
  const menuItems = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/link",
    },
    {
      name: "Research",
      link: "/research",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <header className="header">
      <h1>NSF BATCH 10</h1>

      <ul className="menu">
        {menuItems.map((items, index) => (
          <li key={index}>{items.name}</li>
        ))}
      </ul>

      <button className="button">Let's Connect</button>
    </header>
  );
};

export default Header;

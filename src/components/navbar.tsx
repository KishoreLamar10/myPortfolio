import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LuHouse, LuFolder, LuBriefcase, LuWrench, LuPenLine } from "react-icons/lu";
import "./navbar.css";

const navItems = [
  { icon: <LuHouse />, href: "#hero",       label: "Home" },
  { icon: <LuFolder />, href: "#portfolio",  label: "Projects" },
  { icon: <LuBriefcase />, href: "#experience", label: "Experience" },
  { icon: <LuWrench />, href: "#skills",    label: "Skills" },
  { icon: <LuPenLine />, href: "#contact",  label: "Contact" },
];

function Navbar() {
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const sectionIds = ["hero", "portfolio", "experience", "skills", "contact"];
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      let current = "#hero";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop) current = `#${id}`;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="pill-nav">
      <div className="pill-nav-inner">
        {navItems.map((item) => (
          <motion.a
            key={item.href}
            href={item.href}
            className={`pill-nav-item ${active === item.href ? "active" : ""}`}
            onClick={() => setActive(item.href)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            title={item.label}
            aria-label={item.label}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;

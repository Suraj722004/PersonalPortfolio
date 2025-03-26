import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Education", href: "#education" }
  ];

  const openResume = () => {
    window.open("https://drive.google.com/file/d/1GEmGsT-S_kmPo99TP1x0Q3nCgL8BSzvt/view?usp=drivesdk", "_blank");
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-blue-400 shadow-md backdrop-blur-sm py-4 hover:bg-aqua" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-blue-700">
          Portfolio<span className="text-highlight">.</span>
        </a>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-blue-800 text-lg mt-1 hover:text-aqua transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={openResume} 
            className="bg-highlight text-navy hover:bg-aqua px-4 py-2 rounded-lg"
          >
            Resume
          </button>
        </nav>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white py-4 px-6 shadow-lg absolute w-full left-0 top-full">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-navy py-2 hover:text-aqua transition-colors duration-300"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={openResume} 
              className="bg-highlight text-navy hover:bg-aqua w-full py-2 rounded-lg"
            >
              Resume
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavBar;

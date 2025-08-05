import { useState, useEffect } from "react";
import { useTheme } from "@/components/ui/theme-provider";
import { smoothScrollTo } from "@/lib/smooth-scroll";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    smoothScrollTo(id);
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glassmorphic-dark py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">Tahir</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="hover:text-blue-400 transition-colors text-foreground"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg glassmorphic hover:bg-white/20 transition-all"
            >
              <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg glassmorphic hover:bg-white/20 transition-all"
            >
              <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glassmorphic-dark rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left hover:text-blue-400 transition-colors text-foreground"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

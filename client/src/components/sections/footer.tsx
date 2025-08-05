import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export function Footer() {
  const { personal, socialLinks } = portfolioData;

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      gray: "hover:text-gray-400",
      blue: "hover:text-blue-400",
      green: "hover:text-green-400",
    };
    return colorMap[color] || "hover:text-blue-400";
  };

  return (
    <footer className="py-12 glassmorphic-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center mb-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0 text-center md:text-left"
          >
          </motion.div>
          
          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="hidden md:flex space-x-6 mb-6 md:mb-0"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => smoothScrollTo(item.id)}
                className="text-muted-foreground hover:text-blue-400 transition-colors text-sm"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
                className={`text-muted-foreground ${getColorClass(link.color)} transition-colors`}
              >
                <i className={`${link.icon} text-2xl`} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8 text-center"
        >
          <p className="text-muted-foreground text-sm">
            &copy; 2024 {personal.name}. All rights reserved. Built with passion from {personal.location}.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

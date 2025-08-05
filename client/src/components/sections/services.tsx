import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio-data";

export function Services() {
  const { services } = portfolioData;

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Services</h2>
          <p className="text-xl text-muted-foreground">What I can do for you</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FlipCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ icon, title, description, color, delay = 0 }) {
  const [flipped, setFlipped] = useState(false);

  const handleHover = () => setFlipped(true);
  const handleLeave = () => setFlipped(false);

  const rotation = useTransform(useMotionValue(flipped ? 180 : 0), angle => `rotateY(${angle}deg)`);

  const getColor = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "text-blue-400",
      green: "text-green-400",
      purple: "text-purple-400",
      yellow: "text-yellow-400",
    };
    return colorMap[color] || "text-blue-400";
  };

  return (
    <motion.div
      className="relative w-full h-64 perspective"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8, delay }}
        className="relative w-full h-full transition-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full backface-hidden glassmorphic-dark p-6 flex flex-col items-center justify-center text-center rounded-xl"
          style={{ transform: "rotateY(0deg)", zIndex: flipped ? 0 : 2 }}
        >
          <i className={`${icon} text-5xl ${getColor(color)} mb-4`} />
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full backface-hidden glassmorphic-dark p-6 flex flex-col justify-center text-center rounded-xl"
          style={{ transform: "rotateY(180deg)", zIndex: flipped ? 2 : 0 }}
        >
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

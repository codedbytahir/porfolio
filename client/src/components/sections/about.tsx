import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";

export function About() {
  const { personal } = portfolioData;

  const timelineItems = [
    {
      title: "Software Engineer",
      description: "Building modern web and mobile applications",
      color: "blue",
    },
    {
      title: "Mobile App Developer",
      description: "Specializing in Kotlin & Jetpack Compose",
      color: "purple",
    },
    {
      title: "Backend Engineer",
      description: "Java, Spring Boot, and database optimization",
      color: "green",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">About Me</h2>

          <div className="glassmorphic-dark rounded-2xl p-8 max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground leading-relaxed mb-8 text-justify"
            >
              {personal.story}
            </motion.p>

            {/* Centered Developer Timeline (cards + inner text) */}
            <div className="flex flex-col items-center space-y-6">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center w-full max-w-xl glassmorphic rounded-lg p-6 transition-transform cursor-pointer text-center"
                >
                  <div
                    className={`w-4 h-4 bg-${item.color}-500 rounded-full mb-3`}
                  />
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

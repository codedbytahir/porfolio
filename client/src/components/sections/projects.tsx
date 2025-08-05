import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";

export function Projects() {
  const { projects } = portfolioData;
  const featuredProjects = projects.filter(project => project.featured);

  const getTechColor = (tech: string) => {
    const colorMap: Record<string, string> = {
      Kotlin: "bg-purple-500/20 text-purple-400",
      Java: "bg-red-500/20 text-red-400",
      "Spring Boot": "bg-green-500/20 text-green-400",
      React: "bg-cyan-500/20 text-cyan-400",
      "Jetpack Compose": "bg-blue-500/20 text-blue-400",
      HTML: "bg-orange-500/20 text-orange-400",
      CSS: "bg-blue-500/20 text-blue-400",
      JavaScript: "bg-yellow-500/20 text-yellow-400",
      XML: "bg-gray-500/20 text-gray-400",
      Android: "bg-green-500/20 text-green-400",
      Firebase: "bg-orange-500/20 text-orange-400",
      "AI/ML": "bg-purple-500/20 text-purple-400",
      OpenAI: "bg-green-500/20 text-green-400",
      PostgreSQL: "bg-blue-500/20 text-blue-400",
    };
    return colorMap[tech] || "bg-gray-500/20 text-gray-400";
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">Some of my recent work</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                rotateX: 10,
                rotateY: 10,
                scale: 1.05,
              }}
              className="project-card glassmorphic-dark rounded-2xl overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold mb-3 gradient-text"
                >
                  {project.name}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground mb-4 text-sm"
                >
                  {project.description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                  viewport={{ once: true }}
                  className="text-sm text-muted-foreground font-medium"
                >
                  {project.category}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Mention */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glassmorphic-dark rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Other Notable Projects</h3>
            <p className="text-muted-foreground mb-6">
              I've also worked on various other projects including Billify (billing system), 
              Melo (music streaming app), AEDA (analytics dashboard), and multiple YouTube automation systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {projects.filter(p => !p.featured).map((project) => (
                <motion.span
                  key={project.id}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 glassmorphic rounded-lg text-sm font-medium text-foreground cursor-pointer"
                >
                  {project.name}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

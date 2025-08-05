import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";

export function Skills() {
  const { skills } = portfolioData;

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { text: string; bg: string; border: string }> = {
      blue: { text: "text-blue-400", bg: "bg-blue-400", border: "border-blue-400" },
      red: { text: "text-red-400", bg: "bg-red-400", border: "border-red-400" },
      purple: { text: "text-purple-400", bg: "bg-purple-400", border: "border-purple-400" },
      green: { text: "text-green-400", bg: "bg-green-400", border: "border-green-400" },
      yellow: { text: "text-yellow-400", bg: "bg-yellow-400", border: "border-yellow-400" },
      cyan: { text: "text-cyan-400", bg: "bg-cyan-400", border: "border-cyan-400" },
      indigo: { text: "text-indigo-400", bg: "bg-indigo-400", border: "border-indigo-400" },
      pink: { text: "text-pink-400", bg: "bg-pink-400", border: "border-pink-400" },
    };
    return colorMap[color] || colorMap.blue;
  };

  const getLevelText = (level: number) => {
    if (level >= 90) return "Expert Level";
    if (level >= 80) return "Advanced Level";
    if (level >= 70) return "Intermediate Level";
    return "Beginner Level";
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground">Technologies I work with</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const colors = getColorClasses(skill.color);
            
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                }}
                className="skill-card glassmorphic-dark rounded-2xl p-6 transition-all duration-300 hover:neon-border"
              >
                <div className="text-center">
                  <motion.i
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`${skill.icon} text-4xl ${colors.text} mb-4`}
                  />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{skill.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{skill.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      className={`${colors.bg} h-2 rounded-full`}
                    />
                  </div>
                  
                  <span className="text-sm text-muted-foreground">
                    {getLevelText(skill.level)}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

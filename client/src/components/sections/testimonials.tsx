import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";

export function Testimonials() {
  const { testimonials } = portfolioData;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <motion.i
        key={index}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`fas fa-star ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Testimonials</h2>
          <p className="text-xl text-muted-foreground">What clients say about my work</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glassmorphic-dark rounded-2xl p-6 transition-transform"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                viewport={{ once: true }}
                className="text-muted-foreground italic mb-4 text-sm leading-relaxed"
              >
                "{testimonial.content}"
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                viewport={{ once: true }}
                className="flex space-x-1"
              >
                {renderStars(testimonial.rating)}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

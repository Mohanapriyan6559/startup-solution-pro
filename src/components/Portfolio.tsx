import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Recent <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore my latest work — click any project to see detailed samples and designs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => navigate(`/project/${p.id}`)}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="hidden group-hover:flex items-center gap-2 bg-background text-foreground px-5 py-2.5 rounded-full font-medium text-sm shadow-lg"
                    >
                      <Eye size={16} />
                      View Samples
                    </motion.div>
                  </div>
                  {/* Category badge */}
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground bg-gradient-to-r ${p.color}`}>
                    {p.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {p.description}
                  </p>
                  <div className="flex items-center gap-1 mt-3 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore Samples
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

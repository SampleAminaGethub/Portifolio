import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imag from "../images/EMS.png";
import imag2 from "../images/food.png";
import imag3 from "../images/wedd.png";



const projects = [
  {
    title: 'Employee Managment System',
    description: 'A modern employee managment solution ',
    image: imag,
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    color: 'from-purple-600 to-pink-600'
  },
  {
    title: 'Profissional Food Website',
    description: 'A modern food website offering delicious, freshly prepared meals made with quality ingredients and passion.',
    image: imag2,
    tags: ["React",'Next.js', 'TypeScript'],
    color: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'Wedding Managment Website',
    description: 'Real-time social platform with instant messaging, stories, and content sharing capabilities.',
    image: imag3,
    tags: ['React ', 'java', 'PostgreSQL',"Docker"],
    color: 'from-cyan-600 to-teal-600'
  },
  {
    title: 'Task Management Tool',
    description: 'Collaborative project management platform with kanban boards and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1658806300183-342fe517d68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzYxNzg3MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Flutter', 'firbase'],
    color: 'from-teal-600 to-green-600'
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-100/50 to-blue-100/50 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-6">
            A collection of my recent work showcasing my skills in web development and design
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-4`}>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ type: "spring" }}
                    >
                      <Button
                        size="icon"
                        variant="outline"
                        className="bg-white/20 border-white/40 backdrop-blur-sm hover:bg-white/30"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </Button>
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ type: "spring" }}
                    >
                      <Button
                        size="icon"
                        variant="outline"
                        className="bg-white/20 border-white/40 backdrop-blur-sm hover:bg-white/30"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </Button>
                    </motion.div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

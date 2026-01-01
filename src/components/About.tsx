import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Sparkles, Rocket, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import meImage from '../images/me.png'; 


const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable and scalable code is my passion'
  },
  {
    icon: Sparkles,
    title: 'Creative Design',
    description: 'Bringing ideas to life with beautiful interfaces'
  },
  {
    icon: Rocket,
    title: 'Fast Performance',
    description: 'Optimized applications for the best user experience'
  },
  {
    icon: Heart,
    title: 'User-Focused',
    description: 'Creating solutions that users love to interact with'
  }
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-purple-600 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-20"
                animate={{
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <ImageWithFallback
                src={ meImage}
                alt="Professional workspace"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-slate-900">Turning Ideas into Code</h3>
            <p className="text-slate-600">
               I'm Amina Ibrahim, a passionate developer and lifelong learner. I enjoy building
  web applications that are not only functional but also intuitive and visually appealing.
  I love exploring new technologies and constantly improving my skills to create meaningful
  digital experiences.
            </p>
            <p className="text-slate-600">
              My approach combines technical expertise with creative problem-solving,
              ensuring every project not only meets requirements but exceeds expectations.
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Next.js'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full border border-purple-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 h-full transition-shadow hover:shadow-lg">
                <motion.div
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h4 className="text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "C++", "Rust", "HTML", "CSS", "R"]
    },
    {
      title: "Frameworks & Libraries", 
      skills: ["React", "Tailwind CSS", "Flask", "Framer Motion", "Pandas", "NumPy", "Scikit-learn", "OpenCV", "Matplotlib", "Seaborn", "Tkinter", "Pygame", "Shadcn UI", "Lucide React"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "Vite", "Google Cloud", "MongoDB", "MySQL", "OpenAI", "Figma", "Hugging Face", "Arduino", "Internet of Things (IoT)", "Geographic Information Systems (GIS)"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-black dark:text-white">Technical</span>{" "}
            <span className="text-green-600 dark:text-green-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-green-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building innovative solutions across various domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <Card className="h-full border-green-200 dark:border-green-400/30 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-green-600 dark:text-green-400 text-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                        className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200 dark:hover:bg-green-800/30 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Data Engineering Intern",
      company: "Department of History of Art & Architecture, UMass Amherst",
      location: "Amherst, MA",
      period: "March 2025 - Present",
      technologies: ["Python", "SQL", "Pandas", "MySQL", "HTML/CSS", "YAML", "Markdown"],
      achievements: [
        "Developed and migrated 15+ interactive educational modules from Articulate360 to Pressbooks platform using Markdown, HTML/CSS, YAML, and Python scripts",
        "Managed structured datasets using SQL, Pandas, and Python, improving data cleaning efficiency and integration",
        "Improved backend performance by implementing caching strategies and optimizing MySQL queries"
      ]
    },
    {
      title: "Open Source Developer",
      company: "Open Source Contribution Initiative, CICS, UMass Amherst",
      location: "Hybrid",
      period: "January 2025 - April 2025",
      technologies: ["Rust", "Bevy Engine", "Git", "GitLab", "CI/CD"],
      achievements: [
        "Contributed to Veloren, an open-source multiplayer RPG, implementing new gameplay features using Rust and Bevy Engine",
        "Learned Git, GitLab workflows, and CI/CD pipelines, managing version control and code reviews in large-scale projects",
        "Enhanced game mechanics and performance by refactoring code and integrating community feedback"
      ]
    },
    {
      title: "Undergraduate Research Volunteer",
      company: "Wireless and Sensor Systems Lab (WSSL), UMass Amherst",
      location: "Amherst, MA",
      period: "December 2024 - February 2025",
      technologies: ["Python", "OpenCV", "TensorFlow", "YOLOv11", "Computer Vision", "IoT", "GIS"],
      achievements: [
        "Researched fire detection using Computer Vision and Machine Learning on UAV and CCTV imagery under Prof. VP Nguyen",
        "Trained YOLOv11 model using OpenCV and TensorFlow; curated and labeled dataset of 6,000+ images",
        "Co-authored research poster on IoT-enabled monitoring and GIS integration for wildfire prevention"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-black dark:text-white">Professional</span>{" "}
            <span className="text-green-600 dark:text-green-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-green-300 max-w-3xl mx-auto">
            Gaining real-world experience through internships, research, and open-source contributions
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="border-green-200 dark:border-green-400/30 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                        <Building className="h-4 w-4 mr-2" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200 dark:hover:bg-green-800/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <motion.li
                        key={achievementIndex}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: achievementIndex * 0.1 }}
                        className="flex items-start text-gray-700 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

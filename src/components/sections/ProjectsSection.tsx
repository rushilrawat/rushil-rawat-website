
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "ClubConnect",
      period: "February 2024",
      technologies: ["MySQL", "Tkinter", "Python", "C++"],
      description: "Developed a user interface and database to manage student records, achievements, and events, generating comprehensive reports; completed 4 project phases with 50% improved feature delivery.",
      achievements: [
        "Deployed across 11 clubs, assisting 30+ teachers in managing data for 400+ students and 150+ alumni",
        "Achieved 100% client satisfaction through feedback-driven iterations"
      ]
    },
    {
      title: "PayEd",
      period: "October 2023", 
      technologies: ["JavaScript", "CSS", "HTML"],
      description: "Conceptualized and developed PayEd, an interactive FinTech platform to teach high school students financial literacy, incorporating gamified lessons and a mock digital wallet.",
      achievements: [
        "Pitched the platform at IIIT-Delhi's Business Pitch Ideathon",
        "Earned recognition among the Top 10 out of 200+ presentations across India",
        "Addressed the financial education gap with an innovative and scalable approach"
      ]
    },
    {
      title: "Accident Detection & Reporting Helmet",
      period: "December 2022",
      technologies: ["Webcam", "Arduino", "C++", "GSM", "Sensors"],
      description: "Innovated a helmet that detects accidents and reports the location via SMS to authorities while activating an emergency buzzer for nearby help.",
      achievements: [
        "Improved feature delivery by 30% through iterative development",
        "Presented a product roadmap for enhancements, emphasizing societal impact",
        "Cost-effective, accessible safety solution to boost user adoption and scalability"
      ]
    },
    {
      title: "Fire Fighting Drone \"Agni Rakshak\"",
      period: "October 2021",
      technologies: ["Arduino", "Drone"],
      description: "Designed a quadcopter firefighting drone to enhance safety and response time during emergencies, showcasing innovation through faster fire exhaust management in tests.",
      achievements: [
        "Won the prestigious INSPIRE Award from India's Department of Science & Technology",
        "Recognized for real-world application potential and impact"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-black dark:text-white">Featured</span>{" "}
            <span className="text-green-600 dark:text-green-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-green-300 max-w-3xl mx-auto">
            Innovative solutions addressing real-world challenges through technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full border-green-200 dark:border-green-400/30 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{project.period}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <motion.div
                        key={achievementIndex}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: achievementIndex * 0.1 }}
                        className="flex items-start text-gray-600 dark:text-gray-400"
                      >
                        <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/30"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/30"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
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

export default ProjectsSection;

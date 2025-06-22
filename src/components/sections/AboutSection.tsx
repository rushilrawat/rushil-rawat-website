
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Award, Rocket } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-black dark:text-white">About</span>{" "}
            <span className="text-green-600 dark:text-green-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-green-300 max-w-4xl mx-auto">
            Passionate about technology, innovation, and creating solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Profile Content */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-lg text-gray-700 dark:text-gray-300"
            >
              <p>
                Hello! I'm a sophomore at the{" "}
                <a 
                  href="https://www.umass.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-green-600 dark:text-green-400 underline hover:text-green-700 dark:hover:text-green-300"
                >
                  University of Massachusetts Amherst
                </a>, majoring in Computer Science and Mathematics. I graduated from{" "}
                <a 
                  href="https://dpsnoida.co.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-green-600 dark:text-green-400 underline hover:text-green-700 dark:hover:text-green-300"
                >
                  Delhi Public School Noida
                </a>{" "}
                in 2024, where I served as The Head Boy.
              </p>
              
              <p>
                I'm passionate about Data Science, Machine Learning, and 
                Full Stack Development, and I love turning ideas into impact-driven 
                projects. Whether I'm analyzing data to solve real-world 
                problems or building intuitive web interfaces, I'm always looking 
                for ways to learn and innovate.
              </p>
              
              <p>
                On campus, you'll find me engaged in student organizations - 
                collaborating with peers, sharing knowledge, and driving meaningful change. 
                I'm always excited to connect with fellow 
                technologists and explore new opportunities to make a positive 
                difference through technology.
              </p>

              <p>
                Feel free to explore my work and reach out if you'd like to collaborate!
              </p>
            </motion.div>
          </div>

          {/* Right Column - Cards in 2x2 Grid */}
          <div className="lg:col-span-1 flex">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex"
              >
                <Card className="border-green-200 dark:border-green-400/30 flex-1 flex flex-col hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-4">
                      <GraduationCap className="h-8 w-8 text-green-600 dark:text-green-400 mr-3 flex-shrink-0" />
                      <h4 className="text-xl font-semibold">
                        <span className="text-black dark:text-white">Education</span>
                      </h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 flex-1">
                      Sophomore at UMass Amherst, Class of 2028. Graduated from DPS Noida (Head Boy '24)
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex"
              >
                <Card className="border-green-200 dark:border-green-400/30 flex-1 flex flex-col hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-4">
                      <Code className="h-8 w-8 text-green-600 dark:text-green-400 mr-3 flex-shrink-0" />
                      <h4 className="text-xl font-semibold">
                        <span className="text-black dark:text-white">Technical</span>{" "}
                        <span className="text-green-600 dark:text-green-400">Passion</span>
                      </h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 flex-1">
                      Data Science, Machine Learning, and Full Stack Development enthusiast
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex"
              >
                <Card className="border-green-200 dark:border-green-400/30 flex-1 flex flex-col hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-4">
                      <Award className="h-8 w-8 text-green-600 dark:text-green-400 mr-3 flex-shrink-0" />
                      <h4 className="text-xl font-semibold">
                        <span className="text-black dark:text-white">Key</span>{" "}
                        <span className="text-green-600 dark:text-green-400">Achievements</span>
                      </h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 flex-1">
                      Winner of multiple hackathons & INSPIRE MANAK Award by Govt. of India
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex"
              >
                <Card className="border-green-200 dark:border-green-400/30 flex-1 flex flex-col hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-4">
                      <Rocket className="h-8 w-8 text-green-600 dark:text-green-400 mr-3 flex-shrink-0" />
                      <h4 className="text-xl font-semibold">
                        <span className="text-black dark:text-white">Campus</span>{" "}
                        <span className="text-green-600 dark:text-green-400">Involvements</span>
                      </h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 flex-1">
                      UMass IT Ambassador, BTT Fellow @ MIT
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
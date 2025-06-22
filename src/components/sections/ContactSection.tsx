
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Instagram, Download, Clock } from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Personal Email",
      value: "rawat.rushil.work@gmail.com",
      link: "mailto:rawat.rushil.work@gmail.com"
    },
    {
      icon: Mail,
      label: "University Email",
      value: "rushilrawat@umass.edu",
      link: "mailto:rushilrawat@umass.edu"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Amherst, MA",
      link: "https://en.wikipedia.org/wiki/Amherst,_Massachusetts"
    },
    {
      icon: Clock,
      label: "Timezone",
      value: "EST (UTC-5)",
      link: "https://en.wikipedia.org/wiki/Eastern_Time_Zone"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/rushilrawat",
      username: "@rushilrawat"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/rushilrawat",
      username: "/in/rushilrawat"
    },
    {
      icon: Instagram,
      label: "Instagram",
      link: "https://www.instagram.com/rushrushrushil/",
      username: "@rushrushrushil"
    },
    {
      icon: XIcon,
      label: "X (Twitter)",
      link: "https://x.com/rushilrawat",
      username: "@rushilrawat"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-black dark:text-white">Get In</span>{" "}
            <span className="text-green-600 dark:text-green-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Let's connect! Whether you're a recruiter, fellow student, or someone who shares my passion for technology and innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <Card className="border-green-200 dark:border-green-400/30 h-full">
              <CardHeader>
                <CardTitle className="text-green-600 dark:text-green-400">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{info.label}</p>
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
                
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white"
                    onClick={() => window.open('https://docs.google.com/document/d/1mNE8EFzjZU0Lh4txte7vUOpbmHX9LkZM0mJc29dhUTo/edit?usp=sharing', '_blank')}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="border-green-200 dark:border-green-400/30 h-full">
              <CardHeader>
                <CardTitle className="text-green-600 dark:text-green-400">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-150"
                    >
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                        <social.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{social.label}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{social.username}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">Looking for opportunities in:</h4>
                  <ul className="text-green-700 dark:text-green-400 space-y-1">
                    <li>• Software Engineering Internships</li>
                    <li>• Data Science & Machine Learning Projects</li>
                    <li>• Open Source Collaborations</li>
                    <li>• Research Opportunities</li>
                    <li>• Entrepreneurship & Innovation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

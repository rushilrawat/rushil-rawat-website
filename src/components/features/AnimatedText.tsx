import { useState, useEffect } from "react";

// move this outside the component so it's not re-created on each render
const words = [
  "Coder",
  "Painter",
  "Quizzer",
  "Researcher",
  "Student",
  "Developer",
];

const AnimatedText = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setCurrentText((t) => t.substring(0, t.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((i) => (i + 1) % words.length);
        }
      } else {
        setCurrentText((t) => word.substring(0, t.length + 1));

        if (currentText === word) {
          setIsPaused(true);
        }
      }
    }, isPaused ? 2000 : isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  // note: words is now stable, so it can be left out
  }, [currentText, isDeleting, isPaused, currentWordIndex]);

  return (
    <span className="text-green-600 dark:text-green-400 min-w-[200px] text-left inline-block">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default AnimatedText;
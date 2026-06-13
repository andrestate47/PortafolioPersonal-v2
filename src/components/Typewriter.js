"use client";

import { useState, useEffect } from "react";

export default function Typewriter({ phrases, speed = 100, pause = 2000 }) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      let typingSpeed = speed;

      if (isDeleting) {
        typingSpeed /= 2;
      }

      if (!isDeleting && text === fullText) {
        typingSpeed = pause;
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        typingSpeed = speed;
      }

      return typingSpeed;
    };

    const timer = setTimeout(() => {
      const nextSpeed = handleType();
      // Need a way to trigger next tick with new speed, 
      // but useEffect will just re-run on 'text' or 'isDeleting' changes anyway.
    }, isDeleting ? speed / 2 : speed);

    if (!isDeleting && text === phrases[loopNum % phrases.length]) {
       clearTimeout(timer);
       setTimeout(() => {
          setIsDeleting(true);
       }, pause);
    } else if (isDeleting && text === "") {
       clearTimeout(timer);
       setIsDeleting(false);
       setLoopNum(loopNum + 1);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, phrases, speed, pause]);

  return (
    <span className="typewriter">
      {text}
      <span className="cursor"></span>
    </span>
  );
}

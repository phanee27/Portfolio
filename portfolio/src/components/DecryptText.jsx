import React, { useEffect, useState } from "react";

const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/";

const DecryptText = ({ text, speed = 10, className = "", delay = 1 }) => {
  const [displayed, setDisplayed] = useState("");
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStart(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!start) return;

    let frame = 0;
    const totalFrames = text.length * 4;
    const interval = setInterval(() => {
      let output = "";
      for (let i = 0; i < text.length; i++) {
        if (i < frame / 4) {
          output += text[i];
        } else {
          output += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      setDisplayed(output);
      frame++;
      if (frame > totalFrames) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [start, text, speed]);

  return <p className={className}>{displayed}</p>;
};

export default DecryptText;

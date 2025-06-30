import React from "react";

export default function ShinyText({ children }) {
  return (
    <span className="shiny-text">
      {children}
      <style jsx>{`
        .shiny-text {
          color: #5cc8ff; /* Base blue text color */
          background: linear-gradient(
            120deg,
            rgb(41, 77, 144) 40%,
            rgb(104, 177, 255) 50%,
            rgb(81, 103, 228) 60%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          animation: shine 4s linear infinite;
        }

        @keyframes shine {
          0% {
            background-position: 100%;
          }
          100% {
            background-position: -100%;
          }
        }

        .shiny-text.disabled {
          animation: none;
        }
      `}</style>
    </span>
  );
}

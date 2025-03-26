import React, { useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const Test = () => {
  useEffect(() => {
    gsap.to("#movingCircle", {
      duration: 5, // 5 seconds for full circle
      repeat: -1, // Infinite loop
      ease: "linear",
      motionPath: {
        path: "#circlePath", // SVG path reference
        align: "#circlePath", // Aligns object to path
        autoRotate: true, // Rotates object along the path
        alignOrigin: [0.5, 0.5]
      }
    });
  }, []);

  return (
    <div>
      <svg viewBox="0 0 200 200" width="200" height="200">
        {/* Circular Path */}
        <path id="circlePath" d="M100,50 A50,50 0 1,1 99.99,50" fill="none" stroke="gray" />

        {/* The Circle that Moves */}
        <circle id="movingCircle" cx="100" cy="50" r="5" fill="red" />
      </svg>
    </div>
  );
};

export default Test;

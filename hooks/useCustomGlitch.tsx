import React from "react";
import { useGlitch } from "react-powerglitch";

function useCustomGlitch() {
  const glitch = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 3000,
    },
    glitchTimeSpan: {
      start: 0.4,
      end: 0.6,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.2,
      amplitudeY: 0.2,
    },
    slice: {
      count: 6,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.2,
      hueRotate: true,
    },
    pulse: false,
  });

  return glitch;
}

export default useCustomGlitch;

import React from "react";
import { useGlitch } from "react-powerglitch";
import { Typing } from "react-typing-effects";

export default function Home() {
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
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        width: "100vw",
        justifyContent: "center",
      }}
    >
      <div style={{ height: "max-content" }}>
        <h1
          ref={glitch.ref}
          style={{
            fontSize: "72px",
            fontFamily: "JetBrainsMono NF",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Zanshin
        </h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typing
            interval={150}
            existTime={2000}
            textStyle={{
              fontSize: "24px",
              textAlign: "center",
              fontStyle: "italic",
              minHeight: "32px",
            }}
          >
            The mind with no remainder.
          </Typing>
        </div>
      </div>
    </main>
  );
}

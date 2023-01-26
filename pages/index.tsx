import Background from "@/components/HomePage/Background";
import useCustomGlitch from "@/hooks/useCustomGlitch";
import React from "react";
import { Typing } from "react-typing-effects";

export default function Home() {
  const glitch = useCustomGlitch();
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
      <Background />

      <div style={{ height: "max-content" }}>
        <h1
          ref={glitch.ref}
          style={{
            fontSize: "72px",
            fontFamily: "JetBrainsMono NF",
            textAlign: "center",
            fontWeight: "bold",
            color: "#fff",
            textShadow: "5px 5px 2px #333333",
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
              color: "#fff",
              textShadow: "2px 2px 2px #333333",
            }}
          >
            The mind with no remainder.
          </Typing>
        </div>
      </div>
    </main>
  );
}

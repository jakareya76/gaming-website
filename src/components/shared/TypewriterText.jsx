import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  return (
    <div
      style={{
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#FFD700",
        fontFamily: "Audiowide",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
      }}
    >
      <Typewriter
        options={{
          strings: [
            "Custom Game Development",
            "Branded Game Development",
            "White Label Games",
            "Game Re-Skining",
            "Web Development",
            "Digital Marketing",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterText;

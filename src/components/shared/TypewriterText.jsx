import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  return (
    <div
      className="
        text-2xl    
        md:text-3xl 
        sm:text-xl  
        font-bold text-yellow-500 font-audiowide
        shadow-lg text-shadow-md
      "
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

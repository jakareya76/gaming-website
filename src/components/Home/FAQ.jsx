import { useState } from "react";
import { faqData } from "../../data";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-zinc-950 py-20 w-full rounded-xl">
      <div className="container mx-auto">
        <h2 className="text-xl text-center md:text-left font-bold font-Audiowide md:text-4xl lg:text-5xl text-white">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5 mt-10 px-1">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              index={index}
              item={item}
              openIndex={openIndex}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQItem Component
const FAQItem = ({ item, index, openIndex, toggleFAQ }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      {/* Question */}
      <motion.div
        onClick={() => toggleFAQ(index)}
        className="p-4 cursor-pointer flex justify-between items-center bg-zinc-900 transition-colors duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h3 className="font-medium md:text-xl text-white">{item.question}</h3>

        {openIndex === index ? (
          <IoIosArrowDown size={20} className="text-white" />
        ) : (
          <IoIosArrowForward size={20} className="text-white" />
        )}
      </motion.div>

      {/* Answer with animation */}
      <motion.div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          openIndex === index
            ? "max-h-screen opacity-100 p-4 bg-zinc-900 border-t border-zinc-800"
            : "max-h-0 opacity-0"
        }`}
        initial={{ height: 0, opacity: 0 }}
        animate={
          openIndex === index
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <p className="text-gray-100 md:text-xl">{item.answer}</p>
      </motion.div>
    </div>
  );
};

export default FAQ;

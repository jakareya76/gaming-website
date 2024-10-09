import { useState } from "react";
import { faqData } from "../../data";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

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
            <div key={index}>
              {/* Question */}
              <div
                onClick={() => toggleFAQ(index)}
                className="p-4 cursor-pointer flex justify-between items-center bg-zinc-900 transition-colors duration-300"
              >
                <h3 className="font-medium md:text-xl text-white">
                  {item.question}
                </h3>

                {openIndex === index ? (
                  <IoIosArrowDown size={20} className="text-white" />
                ) : (
                  <IoIosArrowForward size={20} className="text-white" />
                )}
              </div>

              {/* Answer with animation */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-screen opacity-100 p-4 bg-zinc-900 border-t border-zinc-800"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-100 md:text-xl">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

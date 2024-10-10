import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="container mx-auto py-20 px-5">
      <motion.h4
        ref={ref}
        className="md:text-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Have any inquiries about our games and services, or need some advice?
        <br />
        Feel free to reach out! You can contact us by emailing us at
        <a
          href="mailto:contact@naptechlabs.com"
          className="font-bold mx-2 text-green-600"
        >
          contact@naptechlabs.com
        </a>
      </motion.h4>

      <div className="my-16">
        <motion.form
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {["First Name", "Last Name", "Email", "Company Name"].map(
              (placeholder, index) => (
                <motion.input
                  key={index}
                  type="text"
                  placeholder={placeholder}
                  className="py-4 px-5 outline-none bg-zinc-950 border-zinc-700 border-b-2 placeholder:text-zinc-300 focus:outline-none col-span-2 md:col-span-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                />
              )
            )}
            <motion.textarea
              rows="4"
              cols="50"
              placeholder="Message"
              className="col-span-2 p-5 outline-none bg-zinc-950 border-zinc-700 border-b-2 placeholder:text-zinc-300 focus:outline-none"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            ></motion.textarea>
          </div>
          <motion.button
            className="bg-green-500 px-16 py-2 rounded-xl text-white text-xl font-medium mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

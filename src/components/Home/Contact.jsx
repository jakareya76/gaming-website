const Contact = () => {
  return (
    <section className="container mx-auto py-20 px-5">
      <h4 className="md:text-xl">
        Have any inquiries about our games and services, or need some advice?
        <br />
        Feel free to reach out! You can contact us by emailing us at
        <a
          href="mailto:contact@naptechlabs.com"
          className="font-bold mx-2 text-green-600"
        >
          contact@naptechlabs.com
        </a>
      </h4>

      <div className="my-16">
        <form>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <input
              type="text"
              placeholder="First Name"
              className="py-4 px-5 outline-none bg-zinc-950 border-zinc-700 border-b-2 placeholder:text-zinc-300 focus:outline-none col-span-2 md:col-span-1"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="py-4 px-5 outline-none bg-zinc-950 border-zinc-700 border-b-2 placeholder:text-zinc-300 focus:outline-none col-span-2 md:col-span-1"
            />
            <input
              type="text"
              placeholder="Email"
              className="py-4 px-5 outline-none bg-zinc-950 border-zinc-700 border-b-2 placeholder:text-zinc-300 focus:outline-none col-span-2 md:col-span-1"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="py-4 px-5 outline-none bg-zinc-950 border-zinc-700 border-b-2 placeholder:text-zinc-300 focus:outline-none col-span-2 md:col-span-1"
            />
            <textarea
              name=""
              id=""
              rows="4"
              cols="50"
              placeholder="Message"
              className="col-span-2 p-5 outline-none bg-zinc-950 border-zinc-700 border-b-2 placeholder:text-zinc-300 focus:outline-none"
            ></textarea>
          </div>
          <button className="bg-green-500 px-16 py-2 rounded-xl text-white text-xl font-medium mt-5">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

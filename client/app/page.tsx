const page = () => {
  const handleSubmit = () => {};
  return (
    <div className=" w-full h-screen flex items-center justify-center relative">
      <div className=" md:w-1/3 md:h-3/4 w-5/6 bg-neutral-900 rounded-2xl drop-shadow-2xl flex flex-col p-6">
        <div className="md:py-6 py-4 md:text-4xl text-xl text-center flex flex-col">
          Send me messages{" "}
          <div className=" md:text-6xl text-3xl text-purple-400 font-semibold">
            Anonymously
          </div>
        </div>
        <form className=" w-full h-full flex flex-col items-center justify-center">
          <label className=" flex flex-col w-full h-5/6 md:gap-6 gap-4">
            <div>
              <div className="md:text-3xl text-lg font-semibold">
                {" "}
                What do you want to tell me?
              </div>
              <div className=" text-neutral-600">
                (I would have no idea who is typing, so feel free to praise me,
                scold me or gimme some advise)
              </div>
            </div>
            <textarea
              className=" md:w-full md:h-full h-48 rounded-2xl bg-neutral-800 p-4 focus:outline-purple-400 outline-none "
              placeholder="Your message"
            />
          </label>
          <button className=" px-4 py-2 w-fit bg-purple-400 self-end my-4 rounded-xl">
            Send
          </button>
        </form>
      </div>
      <div className=" absolute md:bottom-0 bottom-4">
        Crafted with ❤️ by Ajay
      </div>
    </div>
  );
};

export default page;

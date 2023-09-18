import { redirect } from "next/navigation";

const page = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    if (!formData.get("message")) return;
    const data = { message: formData.get("message") };
    console.log(data);
    const res = await fetch(`${process.env.API_URL}/addmsg`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (json.status == "success") {
      console.log("success");
      redirect("/thankyou");
    } else {
      console.log("error");
    }
  };
  return (
    <div className=" w-full h-screen flex items-center justify-center relative">
      <div className=" md:w-1/3 md:h-3/4 w-5/6 bg-neutral-900 rounded-2xl drop-shadow-2xl flex flex-col p-6">
        <div className="md:py-6 py-4 xl:text-4xl md:text-2xl text-xl text-center flex flex-col">
          Send me messages{" "}
          <div className=" xl:text-6xl md:text-4xl text-4xl text-purple-400 font-semibold">
            Anonymously
          </div>
        </div>
        <form
          className=" w-full h-full flex flex-col items-center justify-center"
          action={handleSubmit}
        >
          <label className=" flex flex-col w-full h-5/6 md:gap-6 gap-4">
            <div className=" flex flex-col md:gap-2">
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
              name="message"
            />
          </label>
          <button
            className=" px-4 py-2 w-fit bg-purple-400 self-end my-4 rounded-xl"
            type="submit"
          >
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

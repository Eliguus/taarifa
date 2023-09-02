import History from "./History";
import Message from "./Message";
import Image from "@/node_modules/next/image";
export default function HomePage() {
  return (
    <div className="flex justify-center mt-5">
      <div className="w-5/12">
        <img
          src="/Fresh Folk Teaching.png"
          alt={""}
          className="m-5 w-[200rem]"
        />
        <History />
      </div>
      <div className="w-7/12">
        <div className="mb-24 my-16">
          <p className="text-center text-3xl m-4">
            customized learning path just for you
          </p>
          <button className="ml-80 m-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            Add a Course
          </button>
        </div>
        <Message />
      </div>
    </div>
  );
}

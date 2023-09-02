export default function Message() {
  return (
    <div className="max-w-lg mx-auto">
      {/* {{<!--}} Message container --> */}
      <div className="flex flex-col space-y-2">
        {/* {{<!--}} Messages --> */}
        <div className="flex flex-col space-y-2">
          {/* {{<!--}} Sender's message --> */}
          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex-shrink-0"></div>
            <div className="bg-blue-100 text-gray-800 p-3 rounded-lg ml-2">
              <p>Design a course for front end web development</p>
            </div>
          </div>

          {/* {{<!--}} Receiver's message --> */}
          <div className="flex items-start justify-end">
            <div className="bg-green-100 text-gray-800 p-3 rounded-lg">
              <p>Certainly! here is the detailed plan for you</p>
            </div>
            <div className="w-8 h-8 bg-green-500 rounded-full flex-shrink-0 ml-2"></div>
          </div>

          {/* {{<!--}} Add more messages here --> */}
        </div>

        {/* {{<!--}} Message input --> */}
        <div className="flex">
          <input
            type="text"
            className="flex-grow px-4 py-2 rounded-l-lg border-t border-b border-l border-gray-300 bg-white focus:outline-none focus:border-blue-500"
            placeholder="Type your message..."
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

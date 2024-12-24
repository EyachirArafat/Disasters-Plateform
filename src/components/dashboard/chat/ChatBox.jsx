import React, { useState } from "react";
import { ChatBubble } from "./ChatBubbles";
import { Camera,  Photos, Attach } from "../../Icons";


export const ChatBox = ({isVisible}) => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", isUser: false }
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { text: input, isUser: true },
        { text: "I am a bot. How can I assist you?", isUser: false }
      ]);
      setInput("");
    }
  };

  return (
    isVisible && (
      <div className="z fixed bottom-20 right-1 sm:right-5 lg:w-[331px] lg:h-[476px] md:w-[280px] md:h-[400px] h-[300px] sm:w-[240px] bg-color1 border border-gray-300 rounded-lg shadow-lg flex flex-col justify-between">
        <div className="bg-primary rounded-t-lg text-white font-bold w-full px-4 py-6">
          <p>Chat with Cypher</p>
        </div>

        {/* messages */}
        <div className="overflow-y-auto p-4 flex flex-col">
          <div className="overflow-y-auto">
            <div className=" mb-4">
              {messages.map((msg, index) => (
                <ChatBubble key={index} message={msg.text} isUser={msg.isUser} />
              ))}
            </div>
          </div>

            {/* Input and send button */}
          <div className="flex flex-col gap-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow p-2 border border-gray-300 rounded-lg"
              placeholder="Type your message..."
            />
            <div className="flex justify-between items-center ">
              <div className="flex cursor-pointer">
                {/* <input type="file" accept="image/*" capture="camera" />
                <input type="file" accept="image/*" />
                <input type="file" /> */}
                <Camera/>
                <Photos/>
                <Attach/>
              </div>
              <button
                onClick={handleSendMessage}
                className="bg-primary text-t12 text-white px-4 py-1 rounded-full"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

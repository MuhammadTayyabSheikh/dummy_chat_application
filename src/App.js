import { useState } from "react";
import ChatBox from "./components/ChatBox";

function App() {
  const [messages, setMessages] = useState([]);



  const sendMessage = (text, userName, time) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text, userName, time }
    ]);
  }

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
      <ChatBox
        userName="User 1"
        messages={messages}
        sendMessage={sendMessage} />
    </div>
  );
}

export default App; 

import { useState } from "react";
import MessageList from "./components/MessageList";
import NewMessageForm from "./components/NewMessageForm";

function App() {
  const [messages, setMessages] = useState([]);

  const handleSend = newMessage => {
    setMessages([...newMessage, ...messages]);
  };

  return (
    <>
      <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} />
    </>
  );
}

export default App;

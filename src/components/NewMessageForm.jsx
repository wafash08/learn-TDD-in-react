import { useState } from "react";

const NewMessageForm = ({ onSend }) => {
  const [inputText, setInputText] = useState("");

  const handleTextChange = event => {
    setInputText(event.target.value);
  };

  const handleSend = () => {
    onSend(inputText);
    setInputText("");
  };

  return (
    <>
      <input
        type='text'
        data-testid='messageText'
        value={inputText}
        onChange={handleTextChange}
      />
      <button data-testid='sendButton' onClick={handleSend}>
        Send
      </button>
    </>
  );
};

export default NewMessageForm;

const MessageList = props => {
  return (
    <ul>
      {props.data.map(message => (
        <li key={message}>{message}</li>
      ))}
    </ul>
  );
};

export default MessageList;

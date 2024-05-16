import React from 'react';
import './App.css';

function MessageInput(props) {
  return (
    <div className="chat-MessageInput">
      <form onSubmit={props.onSubmit}>
        <input type="text" 
          name="message-input" 
          id="message-input"
          placeholder='Type here:'
          onChange={props.onChange}
            value={props.messageInput} />
      </form>
    </div>
  );
}

export default MessageInput;


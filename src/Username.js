import React from 'react';
import './App.css';

function Username(props) {
  return (
    <div className="chat-username">
      <h4>Username: {props.username}</h4>
    </div>
  );
}

export default Username;


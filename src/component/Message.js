import React from 'react';
import './Message.css';
import { Avatar } from "@material-ui/core";

function Message({ timestamp, user, message }) {
  return (
    <div className="message">
      <Avatar src={user.photo} />
      <div className="message__info">
        <h4>
          <span className="message__userName">{user.displayName}</span>
          <span className="message__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>

        <p className="message__content">{message}</p>
      </div>
    </div>
  )
}
export default Message

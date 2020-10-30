import React from 'react';
import ChatHeader from './ChatHeader';
import './Chat.css';
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CatdGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

function Chat() {
  return (
    <div className='chat'>
      <ChatHeader />
      <div className="chat__messages">

      </div>
      <div className="chat__input">
        <form action="">
          <input placeholder={'Type Message'} />
          <button type="chat__inputButton" type="submit">
            Send Message
          </button>

          <div className="chat__inputIcons">
            <CatdGiftcardIcon fontSize="large" />
            <GifIcon fontSize="large" />
            <EmojiEmotionsIcon fontSize="large" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Chat

import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import './Chat.css';
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CatdGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from './Message';
import { selectUser } from '../features/userSlice';
import { selectChannelId, selectChannelName } from '../features/appSlice';
import { useSelector } from 'react-redux';
import db from '../firebase';
import { Button } from '@material-ui/core';

function Chat() { 
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection('channels')
        .doc(channelId)
        .collection("messages")
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, []);

  return (
    <div className='chat'>
      <ChatHeader channelName={channelName} />
      <div className="chat__messages">
        {messages.map((message) => (
          <Message />
        ))}        
      </div>
      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form action="">
          <input
            value={input}
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`}
          />
          <Button className="chat__inputButton" type="submit">
            Send Message
          </Button>
        </form>
        <div className="chat__inputIcons">
            <CatdGiftcardIcon fontSize="large" />
            <GifIcon fontSize="large" />
            <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  )
}

export default Chat

import React from 'react';
// import { Counter } from './features/Counter';
import './App.css';
import Chat from './component/Chat';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;

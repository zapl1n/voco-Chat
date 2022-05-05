import React, {useEffect, useState} from "react";
import './App.css';
import Chat from "./Components/chat/Chat";
import {connectToServer, socket} from "./socket-service";
import data from "./data.json";
import Input from "./Components/input/Input";


function App() {
    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState(data);

    useEffect(() => {
        connectToServer()
            .then((message)=> {
                console.log(message);
            });
    }, []);

    const handleSubmit = () => {
        const chat ={
            message,
            username: author,
        }
        socket.send(JSON.stringify(chat));

        socket.onmessage = (websocketData) => {
            const chatObject = JSON.parse(websocketData.data);
            console.log('chatObject', chatObject)
            setMessages([...messages,{
                message: chatObject.message,
                username: chatObject.username,
                date: chatObject.date,
            }]);
        }

        setMessage('');
    };

  return (
    <div className="app">
        <Chat messages={messages}/>

        <div className="btn-container">
            <Input placeholder="autor" onChange={setAuthor}
            value={author} />
            <Input placeholder="sõnum"onChange={setMessage}
            value={message} />
            <button className="buttonSend" onClick={handleSubmit}>Saada</button>
        </div>

    </div>
  );
}

export default App;

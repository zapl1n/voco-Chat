import React, {useEffect, useState} from 'react';
import Chatcard from "../chatcard/Chatcard";
import data from '../../data.json';

function Chat({messages}) {
     return (
        <div className="chat-box">
            {messages.map((item) => {
                return (<Chatcard
                        message={item.message}
                        author={item.username}
                        date={item.date}/>)
            } )}
        </div>
    );
}

export default Chat;
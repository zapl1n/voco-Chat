import React from 'react';


function Chatcard({message, author, date}) {
    return (
        <div className="chat-card">
            <p>
                {message}
            </p>
            <p>
                {author}
            </p>
            <p>
                {date}
            </p>
        </div>
    );
}

export default Chatcard;
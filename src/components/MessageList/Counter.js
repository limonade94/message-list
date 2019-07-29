import React from 'react';

const Counter = ({ count }) => {
    let nbOfMessage  = `${count} message`;

    if (count === 0 || count === 1) {
        nbOfMessage = `${nbOfMessage}.`
    }
    else {
        nbOfMessage = `${nbOfMessage}s.`; 
    }

    return (
        <p id='message-counter'>Total : {nbOfMessage}</p>
    );
};

export default Counter;
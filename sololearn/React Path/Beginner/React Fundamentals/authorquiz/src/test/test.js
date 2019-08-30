import React from 'react';
import { useState } from 'react';

function EvenCounter(props) {
    const [clicks, setClicks] = useState(0);

    const clickHandler = (event) => {
        const newClick = clicks + 1;
        setClicks(newClick);
        if (newClick % 2 === 0) {
            props.onEvenClick(newClick);
        }
    };

    return (
        <div onClick={clickHandler}>
            This div has been clicked {clicks} times.
      </div>
    );
}

export default EvenCounter;

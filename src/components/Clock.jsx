import { useState } from 'react';

function Clock() {
    const [date, setDate] = useState(new Date());
    const timerId = setInterval(refreshClock, 1000);

    function refreshClock() {
        setDate(newDate());
    }

    return (
        <h2>
            {date.toLocaleTimeString()}
        </h2>
    );
}

export default Clock; 
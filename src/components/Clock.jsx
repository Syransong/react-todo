import { useState, useEffect } from 'react';

function Clock() {
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 60000);
        return function cleanup() {
            clearInterval(timerId);
        }
    }, []);

    return (
        <h2>
            {date.toLocaleTimeString([], {timeStyle: 'short'})}
        </h2>
    );
}

export default Clock; 
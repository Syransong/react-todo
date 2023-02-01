import React, { useEffect, useState } from 'react';

export default function PomoTimer() {
    const [secondsLeft, setSecondsLeft] = useState(25 * 60);
    const [timer, setTimer] = useState();

    const start = () => {
        const timer = setInterval(() => {
            setSecondsLeft((secondsLeft) => secondsLeft -1);
            if (secondsLeft === 0) {
                clearInterval(timer)
            }
        }, 1000);
        setTimer(timer);

        useEffect(() => {
            if (secondsLeft === 0) {
                clearInterval(timer)
            }
        }, [secondsLeft, timer]);

        useEffect(() => {
            return () => clearInterval(timer);
        }, [timer])

    }

    return (
        <div>
            <p>{secondsLeft} seconds left</p>
            <button onClick={start}>
                Start 
            </button>
        </div>
    )
}
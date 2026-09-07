"use client";

import { useEffect, useState } from "react";

const getReturnValues = (countDown: number) => {
    const safeCountDown = Math.max(0, countDown);
    const days = Math.floor(safeCountDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (safeCountDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor(
        (safeCountDown % (1000 * 60 * 60)) / (1000 * 60),
    );
    const seconds = Math.floor((safeCountDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds] as const;
};

const useCountdown = (targetDate: number) => {
    const [countDown, setCountDown] = useState(0);

    useEffect(() => {
        const update = () => {
            setCountDown(Math.max(0, targetDate - Date.now()));
        };

        update();

        const interval = setInterval(update, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return getReturnValues(countDown);
};

export { useCountdown };
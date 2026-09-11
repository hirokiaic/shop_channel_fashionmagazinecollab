"use client";
import { createContext, useContext, useEffect, useState } from "react";

type ExpiredMap = Record<string, boolean>;
const ExpiredContext = createContext<{
    expiredMap: ExpiredMap;
}>({
    expiredMap: {},
});

export function ExpiredProvider({ children }: { children: React.ReactNode }) {

    const expirationDates: Record<string, number> = {
        //TeaserからMVに変更（公開する）
        phase1: new Date("2026-10-30T00:00:00+09:00").getTime(),
    };
    const [expiredMap, setExpiredMap] = useState<Record<string, boolean>>({});

    const MAX_TIMEOUT = 2147483647; // ~24.8 days

    function schedule(key: string, ms: number) {
        if (ms <= 0) {
            setExpiredMap(prev => ({ ...prev, [key]: true }));
            return;
        }

        const next = Math.min(ms, MAX_TIMEOUT);

        const id = setTimeout(() => {
            schedule(key, ms - next);
        }, next);

        return id;
    }

    useEffect(() => {
        const timers: ReturnType<typeof setTimeout>[] = [];

        Object.entries(expirationDates).forEach(([key, target]) => {
            const now = Date.now();
            const ms = target - now;

            if (ms <= 0) {
                // expired
                setExpiredMap((prev) => ({ ...prev, [key]: true }));
            } else {
                // not expired
                setExpiredMap((prev) => ({ ...prev, [key]: false }));

                const id = schedule(key, ms);
                if (id) timers.push(id);
            }
        });

        // cleanup
        return () => {
            timers.forEach((id) => clearTimeout(id));
        };


    }, []);

    return (
        <ExpiredContext.Provider value={{ expiredMap }}>
            {children}
        </ExpiredContext.Provider>
    );
}

export const useExpired = () => useContext(ExpiredContext);
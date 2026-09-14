"use client";

import { useSyncExternalStore } from "react";

function subscribe(onStoreChange: () => void) {
    window.addEventListener("popstate", onStoreChange);

    return () => window.removeEventListener("popstate", onStoreChange);
}

function getUrlParam(key: string) {
    return new URLSearchParams(window.location.search).get(key);
}

export function useUrlParam(key: string) {
    return useSyncExternalStore(
        subscribe,
        () => getUrlParam(key),
        () => null,
    );
}

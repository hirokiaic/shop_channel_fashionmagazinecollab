'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';

function subscribe() {
    return () => { };
}

function getSnapshot() {
    return window.location.hostname;
}

function getServerSnapshot() {
    return '';
}


export function useDomain() {
    const hostname = useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot
    );

    return {
        hostname,
        isTest: hostname === 'shop-channel.vercel.app',
        isProd: hostname === '30th.shopch.jp',
        isLocalhost: hostname === 'localhost',
    };
}
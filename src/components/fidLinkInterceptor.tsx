"use client";

import { useEffect } from "react";

export default function FidLinkInterceptor() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fid = params.get("fid");

    if (fid) {
      document.cookie = `fid=${encodeURIComponent(fid)}; Max-Age=86400; Path=/`;
    }

    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const link = target.closest("a[data-shopch-link]") as HTMLAnchorElement | null;
      if (!link) return;

      const match = document.cookie.match(/(?:^|; )fid=([^;]+)/);
      if (!match) return;

      const fid = decodeURIComponent(match[1]);

      const href = link.getAttribute("href");
      if (!href) return;

      const url = new URL(href, window.location.origin);

      if (!url.hostname.endsWith("shopch.jp")) return;
      
      url.searchParams.set("cid", fid);

    //   alert(url);

      e.preventDefault();
      e.stopPropagation();
      window.location.href = url.toString();
    }

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
} 
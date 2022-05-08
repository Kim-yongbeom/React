import React from "react";
import { SWRConfig, useSWRConfig } from "swr";
import { Avatar } from "./Profile";

function localStorageProvider() {
  const map = new Map(JSON.parse(localStorage.getItem("app-cache") || "[]"));
  window.addEventListener("beforeunload", () => {
    const appCache = JSON.stringify(Array.from(map.entries()));
    localStorage.setItem("app-cache", appCache);
  });
  return map;
}

export default function Cache() {
  return (
    <SWRConfig
      value={{ refreshInterval: 1000, provider: localStorageProvider }}
    >
      <Page />
    </SWRConfig>
  );
}

const Page = () => {
  const { mutate } = useSWRConfig();
  return (
    <div>
      <Avatar id={1212} />
      <button
        onClick={() => {
          mutate("api/user/1212");
        }}
      >
        check
      </button>
    </div>
  );
};

"use client";

import dynamic from "next/dynamic";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { track } from "@vercel/analytics";

// The panel and its streaming code only load the first time chat is opened.
const ChatPanel = dynamic(() => import("./chat-panel"), { ssr: false });

type ChatContextValue = {
  open: boolean;
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
};

const ChatContext = createContext<ChatContextValue | null>(null);

export function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used inside ChatProvider");
  return ctx;
}

export default function ChatProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const returnFocus = useRef<HTMLElement | null>(null);

  const openChat = useCallback(() => {
    returnFocus.current = document.activeElement as HTMLElement | null;
    setLoaded(true);
    setOpen(true);
    track("Chat Opened");
  }, []);

  const closeChat = useCallback(() => {
    setOpen(false);
    returnFocus.current?.focus();
  }, []);

  const toggleChat = useCallback(() => {
    if (open) closeChat();
    else openChat();
  }, [open, openChat, closeChat]);

  // Cmd/Ctrl + I opens and closes chat from anywhere.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "i") {
        e.preventDefault();
        toggleChat();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [toggleChat]);

  // On wide screens the page makes room for the panel instead of sitting under it.
  useEffect(() => {
    const root = document.documentElement;
    if (open) root.dataset.chatOpen = "";
    else delete root.dataset.chatOpen;
  }, [open]);

  return (
    <ChatContext.Provider value={{ open, openChat, closeChat, toggleChat }}>
      {children}
      {loaded ? <ChatPanel open={open} onClose={closeChat} /> : null}
    </ChatContext.Provider>
  );
}

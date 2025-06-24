"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ApiService } from "@/services/api";

type SessionContextType = {
  userId: string | null;
  sessionId: string | null;
};

const SessionContext = createContext<SessionContextType>({
  userId: null,
  sessionId: null,
});

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [userId, setUserId] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    async function init() {
      let storedUserId = localStorage.getItem("eduai_user_id");
      let storedSessionId = localStorage.getItem("eduai_session_id");

      if (!storedUserId) {
        storedUserId = crypto.randomUUID();
        localStorage.setItem("eduai_user_id", storedUserId);
      }

      let finalSessionId = storedSessionId;

      try {
        const response = await ApiService.checkForSession(
          storedUserId,
          storedSessionId || ""
        );
        if (!response) throw new Error("Session not found");
      } catch {
        const newSession = await ApiService.initializeSession(storedUserId);
        finalSessionId = newSession.sessionId;
        localStorage.setItem("eduai_session_id", finalSessionId);
      }

      setUserId(storedUserId);
      setSessionId(finalSessionId);
    }

    init();
  }, []);

  return (
    <SessionContext.Provider value={{ userId, sessionId }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  return useContext(SessionContext);
}

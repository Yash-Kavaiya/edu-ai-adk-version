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
      console.log("Initializing session...");
      let storedUserId = localStorage.getItem("eduai_user_id");
      let storedSessionId = localStorage.getItem("eduai_session_id");

      if (!storedUserId) {
        storedUserId = crypto.randomUUID();
        localStorage.setItem("eduai_user_id", storedUserId);
      }

      if (!storedSessionId) {
        const sessionData = await ApiService.initializeSession(storedUserId);
        storedSessionId = sessionData.sessionId;
        localStorage.setItem("eduai_session_id", storedSessionId);
      }

      console.log("Session ready:", {
        userId: storedUserId,
        sessionId: storedSessionId,
      });

      setUserId(storedUserId);
      setSessionId(storedSessionId);
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

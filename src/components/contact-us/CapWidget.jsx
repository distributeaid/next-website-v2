"use client";
import { useEffect, useRef } from "react";

export default function CapWidget({ onVerified }) {
  const widgetRef = useRef(null);

  useEffect(() => {
    const el = widgetRef.current;
    if (!el) return;

    const onSolve = async (e) => {
      const { token, solutions } = e.detail ?? {};
      if (!token || !solutions) return;

      try {
        const resp = await fetch("/api/cap/redeem", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token, solutions }),
        });
        const data = await resp.json();
        if (data?.success && data?.token) onVerified?.(data.token);
      } catch (err) {
        console.error("Cap redeem failed:", err);
      }
    };

    el.addEventListener("solve", onSolve);
    import("@cap.js/widget");

    return () => {
      el.removeEventListener("solve", onSolve);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <cap-widget ref={widgetRef} data-cap-api-endpoint="/api/cap/" />;
}

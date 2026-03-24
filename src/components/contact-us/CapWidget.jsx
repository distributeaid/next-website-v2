"use client";
import { useEffect, useRef } from "react";

export default function CapWidget({ onVerified }) {
  const widgetRef = useRef(null);

  useEffect(() => {
    const el = widgetRef.current;
    if (!el) return;

    // lazy-load the widget script
    import("@cap.js/widget").then(() => {
      const onSolve = (e) => {
        // event.detail commonly contains the token (names vary: token/redeem/etc.)
        const token =
          e?.detail?.token ||
          e?.detail?.redeem || // common names
          el.querySelector('input[name="cap-token"]')?.value; // fallback to hidden input

        if (token && typeof onVerified === "function") {
          onVerified(token);
        }
      };

      const onError = (e) => {
        // optional: handle errors
        console.error("cap-widget error", e);
      };

      el.addEventListener("solve", onSolve);
      el.addEventListener("error", onError);
    });

    // cleanup
    return () => {
      el.removeEventListener("solve", onSolve);
      el.removeEventListener("error", onError);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <cap-widget ref={widgetRef} data-cap-api-endpoint="/api/cap/" />;
}

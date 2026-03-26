"use client";
import { useEffect, useRef } from "react";

export default function CapWidget({ onVerified }) {
  const widgetRef = useRef(null);

  useEffect(() => {
    // Cancellation flag to guard against async work finishing
    // after the component has unmounted
    let cancelled = false;

    const el = widgetRef.current;
    if (!el) return;

    // Defined here so we can remove it later with the same reference
    const onSolve = (e) => {
      // event.detail commonly contains the token (names vary: token/redeem/etc.)
      const token =
        e?.detail?.token ||
        e?.detail?.redeem || //common names
        el.querySelector('input[name="cap-token"]')?.value; // fallback to hidden input

      // Only call the callback if we actually have a token
      if (token && typeof onVerified === "function") {
        onVerified(token);
      }
    };

    // Optional error handler
    const onError = (e) => {
      console.error("cap-widget error", e);
    };

    // Lazy-load the widget script (runs async)
    import("@cap.js/widget").then(() => {
      // If the component has unmounted while loading, do nothing (prevents attaching listeners too late)
      if (cancelled) return;

      // Attach event listeners once the widget is available
      el.addEventListener("solve", onSolve);
      el.addEventListener("error", onError);
    });

    // Cleanup runs when:
    // - component unmounts
    // - OR before the effect re-runs (if dependencies change)
    return () => {
      // Mark async work as cancelled so `.then()` won't attach listeners
      cancelled = true;

      // Always remove listeners
      el.removeEventListener("solve", onSolve);
      el.removeEventListener("error", onError);
    };
  }, [onVerified]); // Re-run if callback changes to avoid stale closure

  return <cap-widget ref={widgetRef} data-cap-api-endpoint="/api/cap/" />;
}

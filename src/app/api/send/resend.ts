import { Resend } from "resend";

declare global {
  var resend: Resend | undefined;
}

export default () => {
  if (!globalThis.resend) {
    globalThis.resend = new Resend(process.env.RESEND_API_KEY);
  }

  return globalThis.resend;
};

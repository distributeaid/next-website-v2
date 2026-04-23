import { EmailTemplate } from "../../../components/templates/EmailTemplate";
import * as z from "zod";
import getCap from "../cap/cap";
import getResend from "./resend";

const EmailMessage = z.object({
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  message: z.string(),
  capToken: z.string(),
});

export type EmailMessageProps = z.infer<typeof EmailMessage>;

export async function POST(request: Request) {
  const requestBody = (await request.json()) as EmailMessageProps;

  const body = EmailMessage.parse(requestBody);

  const cap = await getCap();
  const { success: capValid } = await cap.validateToken(body.capToken);
  if (!capValid) {
    return Response.json({ error: "Invalid CAPTCHA" }, { status: 403 });
  }

  const { CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;

  if (!CONTACT_TO_EMAIL) {
    throw Error("Missing environment variable: CONTACT_TO_EMAIL");
  }

  if (!CONTACT_FROM_EMAIL) {
    throw Error("Missing environment variable: CONTACT_FROM_EMAIL");
  }

  try {
    const fromName = `${body.firstName} ${body.lastName}`;

    const { data, error } = await getResend().emails.send({
      from: CONTACT_FROM_EMAIL,
      replyTo: `${fromName} <${body.email}>`,
      to: CONTACT_TO_EMAIL,
      subject: `You've received message from ${fromName}`,
      react: EmailTemplate({
        message: body.message,
        fromName,
        fromEmail: body.email,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

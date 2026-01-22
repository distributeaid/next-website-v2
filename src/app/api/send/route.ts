import { EmailTemplate } from "../../../components/templates/EmailTemplate";
import { Resend } from "resend";
import * as z from "zod";

const EmailMessage = z.object({
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  message: z.string(),
});

export type EmailMessageProps = z.infer<typeof EmailMessage>;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const requestBody = (await request.json()) as EmailMessageProps;

  const body = EmailMessage.parse(requestBody);

  const { CONTACT_TO_EMAIL } = process.env;

  if (!CONTACT_TO_EMAIL) {
    throw Error("Missing environment variable: CONTACT_TO_EMAIL");
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      replyTo: `${body.firstName} ${body.lastName} <${body.email}>`,
      to: [CONTACT_TO_EMAIL],
      subject: "Hello world",
      react: EmailTemplate({ message: body.message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

import { BeehiivClient } from "@beehiiv/sdk";
import * as z from "zod";

const NewsletterSignup = z.object({
  email: z.string(),
});

export type NewsletterSignupProps = z.infer<typeof NewsletterSignup>;

export async function POST(request: Request) {
  const { BEHIIV_TOKEN, BEHIIV_PUB_KEY } = process.env;

  if (!BEHIIV_TOKEN || !BEHIIV_PUB_KEY) {
    throw Error(
      "BEHIIV_TOKEN and/or BEHIIV_PUB_KEY missing from environment variables",
    );
  }

  const client = new BeehiivClient({ token: BEHIIV_TOKEN });
  const requestBody = (await request.json()) as NewsletterSignupProps;
  const email = NewsletterSignup.parse(requestBody).email;

  try {
    const result = await client.subscriptions.create(BEHIIV_PUB_KEY, {
      email,
      double_opt_override: "on",
      referring_site: "https://distributeaid.org/",
    });

    return Response.json(result.data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

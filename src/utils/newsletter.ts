"use server";
import { BeehiivClient } from "@beehiiv/sdk";

export const handleNewsletterSignup = async (email: string) => {
  const { BEHIIV_TOKEN, BEHIIV_PUB_KEY } = process.env;

  if (!BEHIIV_TOKEN || !BEHIIV_PUB_KEY) {
    throw Error(
      "BEHIIV_TOKEN and/or BEHIIV_PUB_KEY missing from environment variables",
    );
  }

  const client = new BeehiivClient({ token: BEHIIV_TOKEN });

  try {
    const result = await client.subscriptions.create(BEHIIV_PUB_KEY, {
      email,
      double_opt_override: "on",
      referring_site: "https://distributeaid.org/",
    });

    return result;
  } catch (error) {
    throw error;
  }
};

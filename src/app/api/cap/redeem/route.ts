import { NextResponse } from "next/server";
import getCap from "../cap";

export async function POST(request: Request) {
  try {
    const { token, solutions } = await request.json();

    if (!token || !solutions) {
      return NextResponse.json(
        { success: false, error: "Missing token or solutions" },
        { status: 400 },
      );
    }

    const cap = await getCap();

    if (!cap) {
      throw Error("Cap.js failed to initialize");
    }

    const result = await cap.redeemChallenge({ token, solutions });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to redeem challenge" },
      { status: 500 },
    );
  }
}

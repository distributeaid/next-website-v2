import { NextResponse } from "next/server";
import getCap from "../cap";

export async function POST() {
  try {
    let cap = await getCap();

    if (!cap) {
      throw Error("Cap.js failed to initialize");
    }

    const challenge = await cap.createChallenge();
    return NextResponse.json(challenge);
  } catch (error) {
    console.error(`ERROR: ${error}`);
    return NextResponse.json(
      { success: false, error: "Failed to create challenge" },
      { status: 500 },
    );
  }
}

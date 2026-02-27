import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { type, payload } = body || {};

    if (!type) {
      return NextResponse.json(
        { error: "Missing 'type' field" },
        { status: 400 },
      );
    }

    const result = {
      type,
      payload: payload ?? null,
      generatedAt: new Date().toISOString(),
    };

    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid JSON payload" },
      { status: 400 },
    );
  }
}


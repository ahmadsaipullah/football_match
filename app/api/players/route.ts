import { NextRequest, NextResponse } from "next/server";
import { getTopScorers } from "@/app/lib/api";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const league = searchParams.get("league");
    const season = searchParams.get("season") || "2024";
    if (!league) {
      return NextResponse.json(
        { error: "league parameter is required" },
        { status: 400 }
      );
    }
    const players = await getTopScorers(league, season);
    return NextResponse.json({ response: players });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch players" },
      { status: 500 }
    );
  }
}

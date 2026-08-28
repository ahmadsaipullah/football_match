import { NextRequest, NextResponse } from "next/server";
import { getStandings } from "@/app/lib/api";

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
    const standings = await getStandings(league, season);
    return NextResponse.json({ response: standings });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch standings" },
      { status: 500 }
    );
  }
}

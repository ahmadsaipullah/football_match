import { NextRequest, NextResponse } from "next/server";
import { getLeagues } from "@/app/lib/api";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const country = searchParams.get("country") || undefined;
    const id = searchParams.get("id") || undefined;
    const season = searchParams.get("season") || undefined;
    const leagues = await getLeagues({ country, id, season });
    return NextResponse.json({ response: leagues });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch leagues" },
      { status: 500 }
    );
  }
}

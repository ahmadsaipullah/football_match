import { NextRequest, NextResponse } from "next/server";
import { getFixtures } from "@/app/lib/api";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const date = searchParams.get("date") || undefined;
    const league = searchParams.get("league") || undefined;
    const season = searchParams.get("season") || undefined;
    const live = searchParams.get("live") || undefined;
    const id = searchParams.get("id") || undefined;
    const fixtures = await getFixtures({ date, league, season, live, id });
    return NextResponse.json({ response: fixtures });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch fixtures" },
      { status: 500 }
    );
  }
}

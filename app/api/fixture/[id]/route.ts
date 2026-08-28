import { NextResponse } from "next/server";
import {
  getFixtures,
  getFixtureEvents,
  getFixtureStatistics,
  getFixtureLineups,
  getStreams,
} from "@/app/lib/api";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const [fixtures, events, statistics, lineups, streams] = await Promise.all([
      getFixtures({ id }),
      getFixtureEvents(id),
      getFixtureStatistics(id),
      getFixtureLineups(id),
      getStreams(Number(id)),
    ]);

    const fixture = fixtures[0];
    if (!fixture) {
      return NextResponse.json(
        { error: "Fixture not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      response: {
        ...fixture,
        events,
        statistics,
        lineups,
        streams,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch fixture details" },
      { status: 500 }
    );
  }
}

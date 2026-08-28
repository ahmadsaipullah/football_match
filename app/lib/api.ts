// ============================================================
// GoalScope — API Layer
// ============================================================
import type {
  Country,
  League,
  Fixture,
  Standing,
  PlayerStatistics,
  FixtureEvent,
  FixtureTeamStatistic,
  MatchLineup,
  LiveStream,
} from "./types";
import {
  mockCountries,
  mockLeagues,
  mockFixtures,
  mockStandings39,
  mockTopScorers39,
  mockEvents1001,
  mockStatistics1001,
  mockLineups1001,
  mockStreams,
  getMockFixturesByFilter,
  getMockFixtureById,
  getMockLeaguesByCountry,
  getMockStreamsByMatchId,
} from "./mock-data";

const API_KEY = process.env.API_FOOTBALL_KEY;
const BASE_URL = "https://v3.football.api-sports.io";
const USE_MOCK = !API_KEY || API_KEY === "your_api_key_here";

// ── Core fetch helper ────────────────────────────────────────
async function fetchFootball<T>(
  endpoint: string,
  params: Record<string, string> = {}
): Promise<T> {
  const url = new URL(`${BASE_URL}/${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const res = await fetch(url.toString(), {
    headers: {
      "x-apisports-key": API_KEY || "",
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data.response as T;
}

// ── Public API functions ─────────────────────────────────────

export async function getCountries(): Promise<Country[]> {
  if (USE_MOCK) return mockCountries;
  return fetchFootball<Country[]>("countries");
}

export async function getLeagues(params?: {
  country?: string;
  id?: string;
  season?: string;
}): Promise<League[]> {
  if (USE_MOCK) {
    if (params?.country) return getMockLeaguesByCountry(params.country);
    if (params?.id) {
      const league = mockLeagues.find((l) => l.id === Number(params.id));
      return league ? [league] : [];
    }
    return mockLeagues;
  }
  const apiParams: Record<string, string> = {};
  if (params?.country) apiParams.country = params.country;
  if (params?.id) apiParams.id = params.id;
  if (params?.season) apiParams.season = params.season;
  return fetchFootball<League[]>("leagues", apiParams);
}

export async function getFixtures(params?: {
  date?: string;
  league?: string;
  season?: string;
  live?: string;
  id?: string;
}): Promise<Fixture[]> {
  if (USE_MOCK) {
    if (params?.id) {
      const fixture = getMockFixtureById(Number(params.id));
      return fixture ? [fixture] : [];
    }
    if (params?.live === "all") return getMockFixturesByFilter("live");
    if (params?.league) {
      return mockFixtures.filter(
        (f) => f.league.id === Number(params.league)
      );
    }
    return mockFixtures;
  }
  const apiParams: Record<string, string> = {};
  if (params?.date) apiParams.date = params.date;
  if (params?.league) apiParams.league = params.league;
  if (params?.season) apiParams.season = params.season;
  if (params?.live) apiParams.live = params.live;
  if (params?.id) apiParams.id = params.id;
  return fetchFootball<Fixture[]>("fixtures", apiParams);
}

export async function getStandings(
  league: string,
  season: string
): Promise<Standing[]> {
  if (USE_MOCK) {
    if (league === "39") return mockStandings39;
    // Return generic standings for other leagues
    return mockStandings39;
  }
  const data = await fetchFootball<
    Array<{ league: { standings: Standing[][] } }>
  >("standings", { league, season });
  return data?.[0]?.league?.standings?.[0] || [];
}

export async function getTopScorers(
  league: string,
  season: string
): Promise<PlayerStatistics[]> {
  if (USE_MOCK) return mockTopScorers39;
  return fetchFootball<PlayerStatistics[]>("players/topscorers", {
    league,
    season,
  });
}

export async function getFixtureEvents(
  fixtureId: string
): Promise<FixtureEvent[]> {
  if (USE_MOCK) {
    if (fixtureId === "1001") return mockEvents1001;
    return [];
  }
  return fetchFootball<FixtureEvent[]>("fixtures/events", {
    fixture: fixtureId,
  });
}

export async function getFixtureStatistics(
  fixtureId: string
): Promise<FixtureTeamStatistic[]> {
  if (USE_MOCK) {
    if (fixtureId === "1001") return mockStatistics1001;
    return [];
  }
  return fetchFootball<FixtureTeamStatistic[]>("fixtures/statistics", {
    fixture: fixtureId,
  });
}

export async function getFixtureLineups(
  fixtureId: string
): Promise<MatchLineup[]> {
  if (USE_MOCK) {
    if (fixtureId === "1001") return mockLineups1001;
    return [];
  }
  return fetchFootball<MatchLineup[]>("fixtures/lineups", {
    fixture: fixtureId,
  });
}

export async function getStreams(matchId?: number): Promise<LiveStream[]> {
  // Streams always come from our mock/internal data
  if (matchId) return getMockStreamsByMatchId(matchId);
  return mockStreams;
}

export { USE_MOCK };

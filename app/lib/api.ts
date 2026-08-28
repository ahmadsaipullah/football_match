// ============================================================
// Jakampus Soccer — API Layer
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
  
  // API-Football returns 200 OK even when there are API errors (like rate limits)
  if (data.errors && Object.keys(data.errors).length > 0) {
    console.error("API-Football Error:", data.errors);
    throw new Error(`API-Football Error: ${JSON.stringify(data.errors)}`);
  }

  return (data.response || []) as T;
}

// ── Public API functions ─────────────────────────────────────

export async function getCountries(): Promise<Country[]> {
  const getMock = () => mockCountries;
  if (USE_MOCK) return getMock();
  try {
    return await fetchFootball<Country[]>("countries");
  } catch (error) {
    console.warn("API Error, falling back to mock countries");
    return getMock();
  }
}

export async function getLeagues(params?: {
  country?: string;
  id?: string;
  season?: string;
}): Promise<League[]> {
  const getMock = () => {
    if (params?.country) return getMockLeaguesByCountry(params.country);
    if (params?.id) {
      const league = mockLeagues.find((l) => l.id === Number(params.id));
      return league ? [league] : [];
    }
    return mockLeagues;
  };
  
  if (USE_MOCK) return getMock();

  const apiParams: Record<string, string> = {};
  if (params?.country) apiParams.country = params.country;
  if (params?.id) apiParams.id = params.id;
  if (params?.season) apiParams.season = params.season;
  
  try {
    return await fetchFootball<League[]>("leagues", apiParams);
  } catch (error) {
    console.warn("API Error, falling back to mock leagues");
    return getMock();
  }
}

export async function getFixtures(params?: {
  date?: string;
  league?: string;
  season?: string;
  live?: string;
  id?: string;
}): Promise<Fixture[]> {
  const getMock = () => {
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
  };

  if (USE_MOCK) return getMock();

  const apiParams: Record<string, string> = {};
  if (params?.date) apiParams.date = params.date;
  if (params?.league) apiParams.league = params.league;
  if (params?.season) apiParams.season = params.season;
  if (params?.live) apiParams.live = params.live;
  if (params?.id) apiParams.id = params.id;
  
  try {
    return await fetchFootball<Fixture[]>("fixtures", apiParams);
  } catch (error) {
    console.warn("API Error, falling back to mock fixtures");
    return getMock();
  }
}

export async function getStandings(
  league: string,
  season: string
): Promise<Standing[]> {
  const getMock = () => mockStandings39;

  if (USE_MOCK) return getMock();

  try {
    const data = await fetchFootball<
      Array<{ league: { standings: Standing[][] } }>
    >("standings", { league, season });
    return data?.[0]?.league?.standings?.[0] || [];
  } catch (error) {
    console.warn("API Error, falling back to mock standings");
    return getMock();
  }
}

export async function getTopScorers(
  league: string,
  season: string
): Promise<PlayerStatistics[]> {
  const getMock = () => mockTopScorers39;

  if (USE_MOCK) return getMock();

  try {
    return await fetchFootball<PlayerStatistics[]>("players/topscorers", {
      league,
      season,
    });
  } catch (error) {
    console.warn("API Error, falling back to mock top scorers");
    return getMock();
  }
}

export async function getFixtureEvents(
  fixtureId: string
): Promise<FixtureEvent[]> {
  const getMock = () => (fixtureId === "1001" ? mockEvents1001 : []);

  if (USE_MOCK) return getMock();

  try {
    return await fetchFootball<FixtureEvent[]>("fixtures/events", {
      fixture: fixtureId,
    });
  } catch (error) {
    console.warn("API Error, falling back to mock events");
    return getMock();
  }
}

export async function getFixtureStatistics(
  fixtureId: string
): Promise<FixtureTeamStatistic[]> {
  const getMock = () => (fixtureId === "1001" ? mockStatistics1001 : []);

  if (USE_MOCK) return getMock();

  try {
    return await fetchFootball<FixtureTeamStatistic[]>("fixtures/statistics", {
      fixture: fixtureId,
    });
  } catch (error) {
    console.warn("API Error, falling back to mock statistics");
    return getMock();
  }
}

export async function getFixtureLineups(
  fixtureId: string
): Promise<MatchLineup[]> {
  const getMock = () => (fixtureId === "1001" ? mockLineups1001 : []);

  if (USE_MOCK) return getMock();

  try {
    return await fetchFootball<MatchLineup[]>("fixtures/lineups", {
      fixture: fixtureId,
    });
  } catch (error) {
    console.warn("API Error, falling back to mock lineups");
    return getMock();
  }
}

export async function getStreams(matchId?: number): Promise<LiveStream[]> {
  // Streams always come from our mock/internal data
  if (matchId) return getMockStreamsByMatchId(matchId);
  return mockStreams;
}

export { USE_MOCK };

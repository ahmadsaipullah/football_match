// ============================================================
// Jakampus Soccer — TypeScript Type Definitions
// ============================================================

export interface Country {
  name: string;
  code: string | null;
  flag: string | null;
}

export interface League {
  id: number;
  name: string;
  type: "League" | "Cup";
  logo: string;
  country: {
    name: string;
    code: string | null;
    flag: string | null;
  };
  season: number;
  round?: string;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface FixtureScore {
  home: number | null;
  away: number | null;
}

export interface FixtureStatus {
  long: string;
  short: string;
  elapsed: number | null;
}

export interface Fixture {
  id: number;
  referee: string | null;
  timezone: string;
  date: string;
  timestamp: number;
  venue: {
    name: string | null;
    city: string | null;
  };
  status: FixtureStatus;
  league: League;
  teams: {
    home: Team & { winner: boolean | null };
    away: Team & { winner: boolean | null };
  };
  goals: FixtureScore;
  score: {
    halftime: FixtureScore;
    fulltime: FixtureScore;
    extratime: FixtureScore;
    penalty: FixtureScore;
  };
  events?: FixtureEvent[];
  statistics?: FixtureTeamStatistic[];
  lineups?: MatchLineup[];
  hasStream?: boolean;
}

export interface FixtureEvent {
  time: {
    elapsed: number;
    extra: number | null;
  };
  team: Team;
  player: {
    id: number;
    name: string;
  };
  assist: {
    id: number | null;
    name: string | null;
  };
  type: "Goal" | "Card" | "subst" | "Var";
  detail: string;
  comments: string | null;
}

export interface FixtureStatisticItem {
  type: string;
  value: number | string | null;
}

export interface FixtureTeamStatistic {
  team: Team;
  statistics: FixtureStatisticItem[];
}

export interface Standing {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string | null;
  status: string;
  description: string | null;
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    };
  };
}

export interface PlayerStatistics {
  player: {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    age: number;
    nationality: string;
    photo: string;
  };
  statistics: Array<{
    team: Team;
    league: League;
    games: {
      appearences: number;
      minutes: number;
      rating: string | null;
    };
    goals: {
      total: number | null;
      assists: number | null;
    };
    cards: {
      yellow: number;
      red: number;
    };
  }>;
}

export interface LineupPlayer {
  id: number;
  name: string;
  number: number;
  pos: string;
  grid: string | null;
}

export interface MatchLineup {
  team: Team;
  formation: string;
  startXI: Array<{ player: LineupPlayer }>;
  substitutes: Array<{ player: LineupPlayer }>;
  coach: {
    id: number;
    name: string;
    photo: string;
  };
}

export interface LiveStream {
  id: string;
  matchId: number;
  title: string;
  broadcaster: string;
  url: string;
  quality: "HD" | "SD" | "4K";
  language: string;
  isFree: boolean;
}

// API response wrapper
export interface ApiResponse<T> {
  get: string;
  parameters: Record<string, string>;
  errors: string[];
  results: number;
  response: T;
}

// Filter types
export type MatchFilter = "all" | "live" | "finished" | "scheduled";

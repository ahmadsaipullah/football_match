// ============================================================
// Jakampus Soccer — Mock Data for Development
// ============================================================
import type {
  Country,
  Fixture,
  FixtureEvent,
  FixtureTeamStatistic,
  MatchLineup,
  Standing,
  PlayerStatistics,
  LiveStream,
  League,
} from "./types";

// ── Helpers ──────────────────────────────────────────────────
const today = new Date();
const todayStr = today.toISOString().split("T")[0];

function makeDate(hours: number, minutes: number): string {
  const d = new Date(today);
  d.setHours(hours, minutes, 0, 0);
  return d.toISOString();
}

// ── Countries ────────────────────────────────────────────────
export const mockCountries: Country[] = [
  { name: "England", code: "GB", flag: "https://media.api-sports.io/flags/gb.svg" },
  { name: "Spain", code: "ES", flag: "https://media.api-sports.io/flags/es.svg" },
  { name: "Germany", code: "DE", flag: "https://media.api-sports.io/flags/de.svg" },
  { name: "Italy", code: "IT", flag: "https://media.api-sports.io/flags/it.svg" },
  { name: "France", code: "FR", flag: "https://media.api-sports.io/flags/fr.svg" },
  { name: "Netherlands", code: "NL", flag: "https://media.api-sports.io/flags/nl.svg" },
  { name: "Portugal", code: "PT", flag: "https://media.api-sports.io/flags/pt.svg" },
  { name: "Brazil", code: "BR", flag: "https://media.api-sports.io/flags/br.svg" },
  { name: "Argentina", code: "AR", flag: "https://media.api-sports.io/flags/ar.svg" },
  { name: "Indonesia", code: "ID", flag: "https://media.api-sports.io/flags/id.svg" },
  { name: "Japan", code: "JP", flag: "https://media.api-sports.io/flags/jp.svg" },
  { name: "South Korea", code: "KR", flag: "https://media.api-sports.io/flags/kr.svg" },
  { name: "Saudi Arabia", code: "SA", flag: "https://media.api-sports.io/flags/sa.svg" },
  { name: "Turkey", code: "TR", flag: "https://media.api-sports.io/flags/tr.svg" },
  { name: "Belgium", code: "BE", flag: "https://media.api-sports.io/flags/be.svg" },
  { name: "Scotland", code: "GB", flag: "https://media.api-sports.io/flags/gb.svg" },
  { name: "USA", code: "US", flag: "https://media.api-sports.io/flags/us.svg" },
  { name: "Mexico", code: "MX", flag: "https://media.api-sports.io/flags/mx.svg" },
  { name: "Australia", code: "AU", flag: "https://media.api-sports.io/flags/au.svg" },
  { name: "China", code: "CN", flag: "https://media.api-sports.io/flags/cn.svg" },
  { name: "Thailand", code: "TH", flag: "https://media.api-sports.io/flags/th.svg" },
  { name: "Malaysia", code: "MY", flag: "https://media.api-sports.io/flags/my.svg" },
  { name: "Greece", code: "GR", flag: "https://media.api-sports.io/flags/gr.svg" },
  { name: "Sweden", code: "SE", flag: "https://media.api-sports.io/flags/se.svg" },
  { name: "Norway", code: "NO", flag: "https://media.api-sports.io/flags/no.svg" },
  { name: "Denmark", code: "DK", flag: "https://media.api-sports.io/flags/dk.svg" },
  { name: "Austria", code: "AT", flag: "https://media.api-sports.io/flags/at.svg" },
  { name: "Switzerland", code: "CH", flag: "https://media.api-sports.io/flags/ch.svg" },
  { name: "Colombia", code: "CO", flag: "https://media.api-sports.io/flags/co.svg" },
  { name: "Uruguay", code: "UY", flag: "https://media.api-sports.io/flags/uy.svg" },
];

// ── Leagues ──────────────────────────────────────────────────
export const mockLeagues: League[] = [
  { id: 39, name: "Premier League", type: "League", logo: "https://media.api-sports.io/football/leagues/39.png", country: { name: "England", code: "GB", flag: "https://media.api-sports.io/flags/gb.svg" }, season: 2024, round: "Regular Season - 5" },
  { id: 140, name: "La Liga", type: "League", logo: "https://media.api-sports.io/football/leagues/140.png", country: { name: "Spain", code: "ES", flag: "https://media.api-sports.io/flags/es.svg" }, season: 2024, round: "Regular Season - 5" },
  { id: 78, name: "Bundesliga", type: "League", logo: "https://media.api-sports.io/football/leagues/78.png", country: { name: "Germany", code: "DE", flag: "https://media.api-sports.io/flags/de.svg" }, season: 2024, round: "Regular Season - 4" },
  { id: 135, name: "Serie A", type: "League", logo: "https://media.api-sports.io/football/leagues/135.png", country: { name: "Italy", code: "IT", flag: "https://media.api-sports.io/flags/it.svg" }, season: 2024, round: "Regular Season - 4" },
  { id: 61, name: "Ligue 1", type: "League", logo: "https://media.api-sports.io/football/leagues/61.png", country: { name: "France", code: "FR", flag: "https://media.api-sports.io/flags/fr.svg" }, season: 2024, round: "Regular Season - 4" },
  { id: 2, name: "UEFA Champions League", type: "Cup", logo: "https://media.api-sports.io/football/leagues/2.png", country: { name: "World", code: null, flag: null }, season: 2024, round: "Group Stage - 1" },
  { id: 3, name: "UEFA Europa League", type: "Cup", logo: "https://media.api-sports.io/football/leagues/3.png", country: { name: "World", code: null, flag: null }, season: 2024, round: "Group Stage - 1" },
  { id: 88, name: "Eredivisie", type: "League", logo: "https://media.api-sports.io/football/leagues/88.png", country: { name: "Netherlands", code: "NL", flag: "https://media.api-sports.io/flags/nl.svg" }, season: 2024, round: "Regular Season - 5" },
  { id: 94, name: "Primeira Liga", type: "League", logo: "https://media.api-sports.io/football/leagues/94.png", country: { name: "Portugal", code: "PT", flag: "https://media.api-sports.io/flags/pt.svg" }, season: 2024, round: "Regular Season - 5" },
  { id: 71, name: "Serie A", type: "League", logo: "https://media.api-sports.io/football/leagues/71.png", country: { name: "Brazil", code: "BR", flag: "https://media.api-sports.io/flags/br.svg" }, season: 2024, round: "Regular Season - 24" },
  { id: 128, name: "Liga 1", type: "League", logo: "https://media.api-sports.io/football/leagues/128.png", country: { name: "Indonesia", code: "ID", flag: "https://media.api-sports.io/flags/id.svg" }, season: 2024, round: "Regular Season - 15" },
  { id: 307, name: "Saudi Pro League", type: "League", logo: "https://media.api-sports.io/football/leagues/307.png", country: { name: "Saudi Arabia", code: "SA", flag: "https://media.api-sports.io/flags/sa.svg" }, season: 2024, round: "Regular Season - 5" },
  { id: 253, name: "Major League Soccer", type: "League", logo: "https://media.api-sports.io/football/leagues/253.png", country: { name: "USA", code: "US", flag: "https://media.api-sports.io/flags/us.svg" }, season: 2024, round: "Regular Season - 30" },
  { id: 98, name: "J1 League", type: "League", logo: "https://media.api-sports.io/football/leagues/98.png", country: { name: "Japan", code: "JP", flag: "https://media.api-sports.io/flags/jp.svg" }, season: 2024, round: "Regular Season - 28" },
  { id: 292, name: "K League 1", type: "League", logo: "https://media.api-sports.io/football/leagues/292.png", country: { name: "South Korea", code: "KR", flag: "https://media.api-sports.io/flags/kr.svg" }, season: 2024, round: "Regular Season - 28" },
];

// ── Teams ────────────────────────────────────────────────────
const teams = {
  arsenal: { id: 42, name: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png" },
  chelsea: { id: 49, name: "Chelsea", logo: "https://media.api-sports.io/football/teams/49.png" },
  liverpool: { id: 40, name: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png" },
  manUtd: { id: 33, name: "Manchester Utd", logo: "https://media.api-sports.io/football/teams/33.png" },
  manCity: { id: 50, name: "Manchester City", logo: "https://media.api-sports.io/football/teams/50.png" },
  tottenham: { id: 47, name: "Tottenham", logo: "https://media.api-sports.io/football/teams/47.png" },
  newcastle: { id: 34, name: "Newcastle", logo: "https://media.api-sports.io/football/teams/34.png" },
  astonVilla: { id: 66, name: "Aston Villa", logo: "https://media.api-sports.io/football/teams/66.png" },
  brighton: { id: 51, name: "Brighton", logo: "https://media.api-sports.io/football/teams/51.png" },
  westHam: { id: 48, name: "West Ham", logo: "https://media.api-sports.io/football/teams/48.png" },
  realMadrid: { id: 541, name: "Real Madrid", logo: "https://media.api-sports.io/football/teams/541.png" },
  barcelona: { id: 529, name: "Barcelona", logo: "https://media.api-sports.io/football/teams/529.png" },
  atletico: { id: 530, name: "Atletico Madrid", logo: "https://media.api-sports.io/football/teams/530.png" },
  sevilla: { id: 536, name: "Sevilla", logo: "https://media.api-sports.io/football/teams/536.png" },
  bayern: { id: 157, name: "Bayern Munich", logo: "https://media.api-sports.io/football/teams/157.png" },
  dortmund: { id: 165, name: "Borussia Dortmund", logo: "https://media.api-sports.io/football/teams/165.png" },
  leverkusen: { id: 168, name: "Bayer Leverkusen", logo: "https://media.api-sports.io/football/teams/168.png" },
  leipzig: { id: 173, name: "RB Leipzig", logo: "https://media.api-sports.io/football/teams/173.png" },
  juventus: { id: 496, name: "Juventus", logo: "https://media.api-sports.io/football/teams/496.png" },
  inter: { id: 505, name: "Inter Milan", logo: "https://media.api-sports.io/football/teams/505.png" },
  acMilan: { id: 489, name: "AC Milan", logo: "https://media.api-sports.io/football/teams/489.png" },
  napoli: { id: 492, name: "Napoli", logo: "https://media.api-sports.io/football/teams/492.png" },
  psg: { id: 85, name: "Paris Saint-Germain", logo: "https://media.api-sports.io/football/teams/85.png" },
  marseille: { id: 81, name: "Marseille", logo: "https://media.api-sports.io/football/teams/81.png" },
  persib: { id: 2740, name: "Persib Bandung", logo: "https://media.api-sports.io/football/teams/2740.png" },
  persija: { id: 2741, name: "Persija Jakarta", logo: "https://media.api-sports.io/football/teams/2741.png" },
  alHilal: { id: 2932, name: "Al Hilal", logo: "https://media.api-sports.io/football/teams/2932.png" },
  alNassr: { id: 2939, name: "Al Nassr", logo: "https://media.api-sports.io/football/teams/2939.png" },
};

// ── Fixtures ─────────────────────────────────────────────────
export const mockFixtures: Fixture[] = [
  // ── LIVE MATCHES ──
  {
    id: 1001,
    referee: "Michael Oliver",
    timezone: "UTC",
    date: makeDate(15, 0),
    timestamp: Math.floor(new Date(makeDate(15, 0)).getTime() / 1000),
    venue: { name: "Emirates Stadium", city: "London" },
    status: { long: "Second Half", short: "2H", elapsed: 72 },
    league: mockLeagues[0], // Premier League
    teams: {
      home: { ...teams.arsenal, winner: true },
      away: { ...teams.chelsea, winner: false },
    },
    goals: { home: 2, away: 1 },
    score: {
      halftime: { home: 1, away: 0 },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
    hasStream: true,
  },
  {
    id: 1002,
    referee: "Anthony Taylor",
    timezone: "UTC",
    date: makeDate(15, 0),
    timestamp: Math.floor(new Date(makeDate(15, 0)).getTime() / 1000),
    venue: { name: "Anfield", city: "Liverpool" },
    status: { long: "First Half", short: "1H", elapsed: 35 },
    league: mockLeagues[0],
    teams: {
      home: { ...teams.liverpool, winner: true },
      away: { ...teams.tottenham, winner: false },
    },
    goals: { home: 1, away: 0 },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
    hasStream: true,
  },
  {
    id: 1003,
    referee: "Carlos del Cerro",
    timezone: "UTC",
    date: makeDate(16, 0),
    timestamp: Math.floor(new Date(makeDate(16, 0)).getTime() / 1000),
    venue: { name: "Santiago Bernabeu", city: "Madrid" },
    status: { long: "First Half", short: "1H", elapsed: 22 },
    league: mockLeagues[1], // La Liga
    teams: {
      home: { ...teams.realMadrid, winner: null },
      away: { ...teams.atletico, winner: null },
    },
    goals: { home: 0, away: 0 },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
    hasStream: true,
  },
  {
    id: 1015,
    referee: "Asep Yandis",
    timezone: "UTC",
    date: makeDate(15, 30),
    timestamp: Math.floor(new Date(makeDate(15, 30)).getTime() / 1000),
    venue: { name: "Gelora Bandung Lautan Api", city: "Bandung" },
    status: { long: "Second Half", short: "2H", elapsed: 65 },
    league: mockLeagues[10], // Liga 1 Indonesia
    teams: {
      home: { ...teams.persib, winner: true },
      away: { ...teams.persija, winner: false },
    },
    goals: { home: 3, away: 1 },
    score: {
      halftime: { home: 1, away: 1 },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
    hasStream: true,
  },

  // ── FINISHED MATCHES ──
  {
    id: 1004,
    referee: "Stuart Attwell",
    timezone: "UTC",
    date: makeDate(12, 30),
    timestamp: Math.floor(new Date(makeDate(12, 30)).getTime() / 1000),
    venue: { name: "Old Trafford", city: "Manchester" },
    status: { long: "Match Finished", short: "FT", elapsed: 90 },
    league: mockLeagues[0],
    teams: {
      home: { ...teams.manUtd, winner: false },
      away: { ...teams.manCity, winner: true },
    },
    goals: { home: 0, away: 3 },
    score: {
      halftime: { home: 0, away: 1 },
      fulltime: { home: 0, away: 3 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
    hasStream: false,
  },
  {
    id: 1005,
    referee: "Felix Zwayer",
    timezone: "UTC",
    date: makeDate(14, 30),
    timestamp: Math.floor(new Date(makeDate(14, 30)).getTime() / 1000),
    venue: { name: "Allianz Arena", city: "Munich" },
    status: { long: "Match Finished", short: "FT", elapsed: 90 },
    league: mockLeagues[2], // Bundesliga
    teams: {
      home: { ...teams.bayern, winner: true },
      away: { ...teams.dortmund, winner: false },
    },
    goals: { home: 4, away: 2 },
    score: {
      halftime: { home: 2, away: 1 },
      fulltime: { home: 4, away: 2 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
    hasStream: false,
  },
  {
    id: 1006,
    referee: "Daniele Orsato",
    timezone: "UTC",
    date: makeDate(11, 30),
    timestamp: Math.floor(new Date(makeDate(11, 30)).getTime() / 1000),
    venue: { name: "San Siro", city: "Milan" },
    status: { long: "Match Finished", short: "FT", elapsed: 90 },
    league: mockLeagues[3], // Serie A
    teams: {
      home: { ...teams.inter, winner: true },
      away: { ...teams.acMilan, winner: false },
    },
    goals: { home: 2, away: 1 },
    score: {
      halftime: { home: 1, away: 1 },
      fulltime: { home: 2, away: 1 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
    hasStream: false,
  },
  {
    id: 1007,
    referee: "Clement Turpin",
    timezone: "UTC",
    date: makeDate(13, 0),
    timestamp: Math.floor(new Date(makeDate(13, 0)).getTime() / 1000),
    venue: { name: "Parc des Princes", city: "Paris" },
    status: { long: "Match Finished", short: "FT", elapsed: 90 },
    league: mockLeagues[4], // Ligue 1
    teams: {
      home: { ...teams.psg, winner: true },
      away: { ...teams.marseille, winner: false },
    },
    goals: { home: 3, away: 0 },
    score: {
      halftime: { home: 2, away: 0 },
      fulltime: { home: 3, away: 0 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
    hasStream: false,
  },
  {
    id: 1013,
    referee: "Sassi Lahoz",
    timezone: "UTC",
    date: makeDate(14, 0),
    timestamp: Math.floor(new Date(makeDate(14, 0)).getTime() / 1000),
    venue: { name: "Camp Nou", city: "Barcelona" },
    status: { long: "Match Finished", short: "FT", elapsed: 90 },
    league: mockLeagues[1], // La Liga
    teams: {
      home: { ...teams.barcelona, winner: true },
      away: { ...teams.sevilla, winner: false },
    },
    goals: { home: 2, away: 0 },
    score: {
      halftime: { home: 1, away: 0 },
      fulltime: { home: 2, away: 0 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
    hasStream: false,
  },
  {
    id: 1014,
    referee: "Marco Guida",
    timezone: "UTC",
    date: makeDate(11, 0),
    timestamp: Math.floor(new Date(makeDate(11, 0)).getTime() / 1000),
    venue: { name: "Allianz Stadium", city: "Turin" },
    status: { long: "Match Finished", short: "FT", elapsed: 90 },
    league: mockLeagues[3], // Serie A
    teams: {
      home: { ...teams.juventus, winner: null },
      away: { ...teams.napoli, winner: null },
    },
    goals: { home: 1, away: 1 },
    score: {
      halftime: { home: 0, away: 1 },
      fulltime: { home: 1, away: 1 },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
    hasStream: false,
  },

  // ── SCHEDULED MATCHES ──
  {
    id: 1008,
    referee: null,
    timezone: "UTC",
    date: makeDate(19, 45),
    timestamp: Math.floor(new Date(makeDate(19, 45)).getTime() / 1000),
    venue: { name: "Etihad Stadium", city: "Manchester" },
    status: { long: "Not Started", short: "NS", elapsed: null },
    league: mockLeagues[5], // Champions League
    teams: {
      home: { ...teams.manCity, winner: null },
      away: { ...teams.inter, winner: null },
    },
    goals: { home: null, away: null },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
    hasStream: true,
  },
  {
    id: 1009,
    referee: null,
    timezone: "UTC",
    date: makeDate(19, 45),
    timestamp: Math.floor(new Date(makeDate(19, 45)).getTime() / 1000),
    venue: { name: "Santiago Bernabeu", city: "Madrid" },
    status: { long: "Not Started", short: "NS", elapsed: null },
    league: mockLeagues[5],
    teams: {
      home: { ...teams.realMadrid, winner: null },
      away: { ...teams.bayern, winner: null },
    },
    goals: { home: null, away: null },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
    hasStream: true,
  },
  {
    id: 1010,
    referee: null,
    timezone: "UTC",
    date: makeDate(17, 30),
    timestamp: Math.floor(new Date(makeDate(17, 30)).getTime() / 1000),
    venue: { name: "Emirates Stadium", city: "London" },
    status: { long: "Not Started", short: "NS", elapsed: null },
    league: mockLeagues[5],
    teams: {
      home: { ...teams.arsenal, winner: null },
      away: { ...teams.psg, winner: null },
    },
    goals: { home: null, away: null },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
    hasStream: true,
  },
  {
    id: 1011,
    referee: null,
    timezone: "UTC",
    date: makeDate(20, 0),
    timestamp: Math.floor(new Date(makeDate(20, 0)).getTime() / 1000),
    venue: { name: "BayArena", city: "Leverkusen" },
    status: { long: "Not Started", short: "NS", elapsed: null },
    league: mockLeagues[2],
    teams: {
      home: { ...teams.leverkusen, winner: null },
      away: { ...teams.leipzig, winner: null },
    },
    goals: { home: null, away: null },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
    hasStream: false,
  },
  {
    id: 1012,
    referee: null,
    timezone: "UTC",
    date: makeDate(18, 0),
    timestamp: Math.floor(new Date(makeDate(18, 0)).getTime() / 1000),
    venue: { name: "St James' Park", city: "Newcastle" },
    status: { long: "Not Started", short: "NS", elapsed: null },
    league: mockLeagues[0],
    teams: {
      home: { ...teams.newcastle, winner: null },
      away: { ...teams.brighton, winner: null },
    },
    goals: { home: null, away: null },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
    hasStream: false,
  },
  {
    id: 1016,
    referee: null,
    timezone: "UTC",
    date: makeDate(19, 0),
    timestamp: Math.floor(new Date(makeDate(19, 0)).getTime() / 1000),
    venue: { name: "King Fahd Stadium", city: "Riyadh" },
    status: { long: "Not Started", short: "NS", elapsed: null },
    league: mockLeagues[11], // Saudi Pro League
    teams: {
      home: { ...teams.alHilal, winner: null },
      away: { ...teams.alNassr, winner: null },
    },
    goals: { home: null, away: null },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null },
    },
    hasStream: true,
  },
];

// ── Events for fixture 1001 (Arsenal 2-1 Chelsea) ──────────
export const mockEvents1001: FixtureEvent[] = [
  {
    time: { elapsed: 23, extra: null },
    team: teams.arsenal,
    player: { id: 1, name: "B. Saka" },
    assist: { id: 2, name: "M. Odegaard" },
    type: "Goal",
    detail: "Normal Goal",
    comments: null,
  },
  {
    time: { elapsed: 38, extra: null },
    team: teams.chelsea,
    player: { id: 3, name: "C. Palmer" },
    assist: { id: null, name: null },
    type: "Card",
    detail: "Yellow Card",
    comments: null,
  },
  {
    time: { elapsed: 55, extra: null },
    team: teams.chelsea,
    player: { id: 4, name: "N. Jackson" },
    assist: { id: 5, name: "C. Palmer" },
    type: "Goal",
    detail: "Normal Goal",
    comments: null,
  },
  {
    time: { elapsed: 67, extra: null },
    team: teams.arsenal,
    player: { id: 6, name: "K. Havertz" },
    assist: { id: 1, name: "B. Saka" },
    type: "Goal",
    detail: "Normal Goal",
    comments: null,
  },
  {
    time: { elapsed: 60, extra: null },
    team: teams.chelsea,
    player: { id: 7, name: "M. Mudryk" },
    assist: { id: null, name: null },
    type: "subst",
    detail: "Substitution 1",
    comments: null,
  },
  {
    time: { elapsed: 70, extra: null },
    team: teams.arsenal,
    player: { id: 8, name: "L. Trossard" },
    assist: { id: null, name: null },
    type: "Card",
    detail: "Yellow Card",
    comments: null,
  },
];

// ── Statistics for fixture 1001 ─────────────────────────────
export const mockStatistics1001: FixtureTeamStatistic[] = [
  {
    team: teams.arsenal,
    statistics: [
      { type: "Ball Possession", value: "58%" },
      { type: "Total Shots", value: 14 },
      { type: "Shots on Goal", value: 6 },
      { type: "Shots off Goal", value: 5 },
      { type: "Blocked Shots", value: 3 },
      { type: "Corner Kicks", value: 7 },
      { type: "Offsides", value: 2 },
      { type: "Fouls", value: 11 },
      { type: "Yellow Cards", value: 1 },
      { type: "Red Cards", value: 0 },
      { type: "Total passes", value: 487 },
      { type: "Passes accurate", value: 412 },
      { type: "Passes %", value: "85%" },
    ],
  },
  {
    team: teams.chelsea,
    statistics: [
      { type: "Ball Possession", value: "42%" },
      { type: "Total Shots", value: 9 },
      { type: "Shots on Goal", value: 4 },
      { type: "Shots off Goal", value: 3 },
      { type: "Blocked Shots", value: 2 },
      { type: "Corner Kicks", value: 4 },
      { type: "Offsides", value: 1 },
      { type: "Fouls", value: 14 },
      { type: "Yellow Cards", value: 2 },
      { type: "Red Cards", value: 0 },
      { type: "Total passes", value: 352 },
      { type: "Passes accurate", value: 281 },
      { type: "Passes %", value: "80%" },
    ],
  },
];

// ── Lineups for fixture 1001 ────────────────────────────────
export const mockLineups1001: MatchLineup[] = [
  {
    team: teams.arsenal,
    formation: "4-3-3",
    startXI: [
      { player: { id: 10, name: "D. Raya", number: 22, pos: "G", grid: "1:1" } },
      { player: { id: 11, name: "B. White", number: 4, pos: "D", grid: "2:4" } },
      { player: { id: 12, name: "W. Saliba", number: 2, pos: "D", grid: "2:3" } },
      { player: { id: 13, name: "G. Magalhães", number: 6, pos: "D", grid: "2:2" } },
      { player: { id: 14, name: "O. Zinchenko", number: 35, pos: "D", grid: "2:1" } },
      { player: { id: 15, name: "D. Rice", number: 41, pos: "M", grid: "3:3" } },
      { player: { id: 16, name: "M. Odegaard", number: 8, pos: "M", grid: "3:2" } },
      { player: { id: 17, name: "T. Partey", number: 5, pos: "M", grid: "3:1" } },
      { player: { id: 1, name: "B. Saka", number: 7, pos: "F", grid: "4:3" } },
      { player: { id: 6, name: "K. Havertz", number: 29, pos: "F", grid: "4:2" } },
      { player: { id: 18, name: "G. Martinelli", number: 11, pos: "F", grid: "4:1" } },
    ],
    substitutes: [
      { player: { id: 19, name: "A. Ramsdale", number: 1, pos: "G", grid: null } },
      { player: { id: 8, name: "L. Trossard", number: 19, pos: "F", grid: null } },
      { player: { id: 20, name: "J. Timber", number: 12, pos: "D", grid: null } },
      { player: { id: 21, name: "E. Nketiah", number: 14, pos: "F", grid: null } },
      { player: { id: 22, name: "F. Vieira", number: 23, pos: "M", grid: null } },
    ],
    coach: { id: 1, name: "Mikel Arteta", photo: "https://media.api-sports.io/football/coachs/1.png" },
  },
  {
    team: teams.chelsea,
    formation: "4-2-3-1",
    startXI: [
      { player: { id: 30, name: "R. Sanchez", number: 18, pos: "G", grid: "1:1" } },
      { player: { id: 31, name: "R. James", number: 24, pos: "D", grid: "2:4" } },
      { player: { id: 32, name: "T. Silva", number: 6, pos: "D", grid: "2:3" } },
      { player: { id: 33, name: "L. Colwill", number: 26, pos: "D", grid: "2:2" } },
      { player: { id: 34, name: "M. Cucurella", number: 3, pos: "D", grid: "2:1" } },
      { player: { id: 35, name: "M. Caicedo", number: 25, pos: "M", grid: "3:2" } },
      { player: { id: 36, name: "E. Fernandez", number: 8, pos: "M", grid: "3:1" } },
      { player: { id: 37, name: "R. Sterling", number: 17, pos: "F", grid: "4:3" } },
      { player: { id: 3, name: "C. Palmer", number: 20, pos: "M", grid: "4:2" } },
      { player: { id: 38, name: "N. Madueke", number: 11, pos: "F", grid: "4:1" } },
      { player: { id: 4, name: "N. Jackson", number: 15, pos: "F", grid: "5:1" } },
    ],
    substitutes: [
      { player: { id: 39, name: "D. Petrovic", number: 28, pos: "G", grid: null } },
      { player: { id: 7, name: "M. Mudryk", number: 10, pos: "F", grid: null } },
      { player: { id: 40, name: "A. Disasi", number: 2, pos: "D", grid: null } },
      { player: { id: 41, name: "C. Gallagher", number: 23, pos: "M", grid: null } },
      { player: { id: 42, name: "B. Badiashile", number: 5, pos: "D", grid: null } },
    ],
    coach: { id: 2, name: "Mauricio Pochettino", photo: "https://media.api-sports.io/football/coachs/2.png" },
  },
];

// ── Standings (Premier League) ──────────────────────────────
export const mockStandings39: Standing[] = [
  {
    rank: 1, team: teams.manCity, points: 12, goalsDiff: 10, group: "Premier League", form: "WWWW", status: "same",
    description: "Champions League", all: { played: 4, win: 4, draw: 0, lose: 0, goals: { for: 12, against: 2 } },
  },
  {
    rank: 2, team: teams.arsenal, points: 10, goalsDiff: 7, group: "Premier League", form: "WWDW", status: "same",
    description: "Champions League", all: { played: 4, win: 3, draw: 1, lose: 0, goals: { for: 9, against: 2 } },
  },
  {
    rank: 3, team: teams.liverpool, points: 10, goalsDiff: 6, group: "Premier League", form: "WDWW", status: "same",
    description: "Champions League", all: { played: 4, win: 3, draw: 1, lose: 0, goals: { for: 8, against: 2 } },
  },
  {
    rank: 4, team: teams.tottenham, points: 9, goalsDiff: 5, group: "Premier League", form: "WWWL", status: "same",
    description: "Champions League", all: { played: 4, win: 3, draw: 0, lose: 1, goals: { for: 9, against: 4 } },
  },
  {
    rank: 5, team: teams.astonVilla, points: 9, goalsDiff: 4, group: "Premier League", form: "WLWW", status: "same",
    description: "Europa League", all: { played: 4, win: 3, draw: 0, lose: 1, goals: { for: 7, against: 3 } },
  },
  {
    rank: 6, team: teams.newcastle, points: 7, goalsDiff: 3, group: "Premier League", form: "WDWD", status: "same",
    description: "Europa League", all: { played: 4, win: 2, draw: 1, lose: 1, goals: { for: 6, against: 3 } },
  },
  {
    rank: 7, team: teams.brighton, points: 7, goalsDiff: 2, group: "Premier League", form: "DWWL", status: "same",
    description: "Conference League", all: { played: 4, win: 2, draw: 1, lose: 1, goals: { for: 7, against: 5 } },
  },
  {
    rank: 8, team: teams.chelsea, points: 4, goalsDiff: -1, group: "Premier League", form: "WLLD", status: "same",
    description: null, all: { played: 4, win: 1, draw: 1, lose: 2, goals: { for: 5, against: 6 } },
  },
  {
    rank: 9, team: teams.westHam, points: 4, goalsDiff: -2, group: "Premier League", form: "LDWL", status: "same",
    description: null, all: { played: 4, win: 1, draw: 1, lose: 2, goals: { for: 4, against: 6 } },
  },
  {
    rank: 10, team: teams.manUtd, points: 3, goalsDiff: -5, group: "Premier League", form: "WLLL", status: "same",
    description: null, all: { played: 4, win: 1, draw: 0, lose: 3, goals: { for: 3, against: 8 } },
  },
];

// ── Top Scorers ─────────────────────────────────────────────
export const mockTopScorers39: PlayerStatistics[] = [
  {
    player: { id: 101, name: "Erling Haaland", firstname: "Erling", lastname: "Haaland", age: 24, nationality: "Norway", photo: "https://media.api-sports.io/football/players/1100.png" },
    statistics: [{ team: teams.manCity, league: mockLeagues[0], games: { appearences: 4, minutes: 360, rating: "8.2" }, goals: { total: 7, assists: 1 }, cards: { yellow: 0, red: 0 } }],
  },
  {
    player: { id: 102, name: "Bukayo Saka", firstname: "Bukayo", lastname: "Saka", age: 23, nationality: "England", photo: "https://media.api-sports.io/football/players/1460.png" },
    statistics: [{ team: teams.arsenal, league: mockLeagues[0], games: { appearences: 4, minutes: 340, rating: "7.8" }, goals: { total: 4, assists: 3 }, cards: { yellow: 1, red: 0 } }],
  },
  {
    player: { id: 103, name: "Mohamed Salah", firstname: "Mohamed", lastname: "Salah", age: 32, nationality: "Egypt", photo: "https://media.api-sports.io/football/players/306.png" },
    statistics: [{ team: teams.liverpool, league: mockLeagues[0], games: { appearences: 4, minutes: 350, rating: "7.6" }, goals: { total: 4, assists: 2 }, cards: { yellow: 0, red: 0 } }],
  },
  {
    player: { id: 104, name: "Son Heung-min", firstname: "Heung-min", lastname: "Son", age: 32, nationality: "South Korea", photo: "https://media.api-sports.io/football/players/186.png" },
    statistics: [{ team: teams.tottenham, league: mockLeagues[0], games: { appearences: 4, minutes: 320, rating: "7.4" }, goals: { total: 3, assists: 2 }, cards: { yellow: 0, red: 0 } }],
  },
  {
    player: { id: 105, name: "Cole Palmer", firstname: "Cole", lastname: "Palmer", age: 22, nationality: "England", photo: "https://media.api-sports.io/football/players/116800.png" },
    statistics: [{ team: teams.chelsea, league: mockLeagues[0], games: { appearences: 4, minutes: 360, rating: "7.5" }, goals: { total: 3, assists: 3 }, cards: { yellow: 1, red: 0 } }],
  },
  {
    player: { id: 106, name: "Ollie Watkins", firstname: "Ollie", lastname: "Watkins", age: 28, nationality: "England", photo: "https://media.api-sports.io/football/players/19220.png" },
    statistics: [{ team: teams.astonVilla, league: mockLeagues[0], games: { appearences: 4, minutes: 350, rating: "7.3" }, goals: { total: 3, assists: 1 }, cards: { yellow: 0, red: 0 } }],
  },
  {
    player: { id: 107, name: "Alexander Isak", firstname: "Alexander", lastname: "Isak", age: 25, nationality: "Sweden", photo: "https://media.api-sports.io/football/players/2295.png" },
    statistics: [{ team: teams.newcastle, league: mockLeagues[0], games: { appearences: 4, minutes: 340, rating: "7.2" }, goals: { total: 3, assists: 0 }, cards: { yellow: 0, red: 0 } }],
  },
  {
    player: { id: 108, name: "Kai Havertz", firstname: "Kai", lastname: "Havertz", age: 25, nationality: "Germany", photo: "https://media.api-sports.io/football/players/1465.png" },
    statistics: [{ team: teams.arsenal, league: mockLeagues[0], games: { appearences: 4, minutes: 300, rating: "7.1" }, goals: { total: 2, assists: 2 }, cards: { yellow: 1, red: 0 } }],
  },
];

// ── Live Streams ────────────────────────────────────────────
export const mockStreams: LiveStream[] = [
  { id: "s1", matchId: 1001, title: "Arsenal vs Chelsea - Premier League", broadcaster: "Vidio", url: "https://www.vidio.com", quality: "HD", language: "Indonesian", isFree: false },
  { id: "s2", matchId: 1001, title: "Arsenal vs Chelsea - Premier League", broadcaster: "beIN Sports", url: "https://www.beinsports.com", quality: "HD", language: "English", isFree: false },
  { id: "s3", matchId: 1002, title: "Liverpool vs Tottenham - Premier League", broadcaster: "RCTI+", url: "https://www.rctiplus.com", quality: "HD", language: "Indonesian", isFree: true },
  { id: "s4", matchId: 1003, title: "Real Madrid vs Atletico - La Liga", broadcaster: "beIN Sports", url: "https://www.beinsports.com", quality: "HD", language: "English", isFree: false },
  { id: "s5", matchId: 1008, title: "Man City vs Inter - Champions League", broadcaster: "SCTV", url: "https://www.vidio.com", quality: "HD", language: "Indonesian", isFree: true },
  { id: "s6", matchId: 1009, title: "Real Madrid vs Bayern - Champions League", broadcaster: "Vidio", url: "https://www.vidio.com", quality: "4K", language: "Indonesian", isFree: false },
  { id: "s7", matchId: 1010, title: "Arsenal vs PSG - Champions League", broadcaster: "SCTV", url: "https://www.vidio.com", quality: "HD", language: "Indonesian", isFree: true },
  { id: "s8", matchId: 1015, title: "Persib vs Persija - Liga 1", broadcaster: "Indosiar", url: "https://www.vidio.com", quality: "HD", language: "Indonesian", isFree: true },
  { id: "s9", matchId: 1016, title: "Al Hilal vs Al Nassr - Saudi Pro League", broadcaster: "SSC Sports", url: "https://www.ssc.sa", quality: "4K", language: "Arabic", isFree: false },
];

// ── Helper to get fixtures by various filters ───────────────
export function getMockFixturesByFilter(filter: string, date?: string): Fixture[] {
  let fixtures = [...mockFixtures];

  if (filter === "live") {
    fixtures = fixtures.filter((f) =>
      ["1H", "2H", "HT", "ET", "P", "BT"].includes(f.status.short)
    );
  } else if (filter === "finished") {
    fixtures = fixtures.filter((f) =>
      ["FT", "AET", "PEN"].includes(f.status.short)
    );
  } else if (filter === "scheduled") {
    fixtures = fixtures.filter((f) =>
      ["NS", "TBD"].includes(f.status.short)
    );
  }

  return fixtures.sort((a, b) => a.timestamp - b.timestamp);
}

export function getMockFixtureById(id: number): Fixture | undefined {
  return mockFixtures.find((f) => f.id === id);
}

export function getMockLeaguesByCountry(country: string): League[] {
  return mockLeagues.filter(
    (l) => l.country.name.toLowerCase() === country.toLowerCase()
  );
}

export function getMockStreamsByMatchId(matchId: number): LiveStream[] {
  return mockStreams.filter((s) => s.matchId === matchId);
}

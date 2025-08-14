import config from '../config.json' assert { type: 'json' };

let ownedGamesCache = null;
let lastFetchTime = 0;
const FETCH_FREQUENCY = 5 * 60 * 1000;

async function fetchOwnedGamesFromAPI() {
    const url = `${config.base_url}/IPlayerService/GetOwnedGames/v1/?key=${config.steam_api_key}&steamid=${config.player_id}&include_appinfo=true`;
    const res = await fetch(url);
    const data = await res.json();
    return data.response.games || [];
}

async function getOwnedGames() {
    const now = Date.now();
    if (!ownedGamesCache || now - lastFetchTime > FETCH_FREQUENCY) {
        ownedGamesCache = await fetchOwnedGamesFromAPI();
        lastFetchTime = now;
    }
    return ownedGamesCache;
}

export async function getTop5MostPlayed() {
    const games = await getOwnedGames();
    return games.sort((a, b) => b.playtime_forever - a.playtime_forever).slice(0, 5);
}

export async function getTop5RecentlyPlayed() {
    const games = await getOwnedGames();
    return games
        .filter(game => game.rtime_last_played) 
        .sort((a, b) => b.rtime_last_played - a.rtime_last_played)
        .slice(0, 5);
}

export async function getTop5LeastRecentlyPlayed() {
    const games = await getOwnedGames();
    return games
        .filter(game => game.rtime_last_played) 
        .sort((a, b) => a.rtime_last_played - b.rtime_last_played)
        .slice(0, 5);
}

export async function get5RandomUnplayed() {
    const games = await getOwnedGames();
    const unplayed = games.filter(game => game.playtime_forever === 0);
    return unplayed.sort(() => Math.random() - 0.5).slice(0, 5);
}

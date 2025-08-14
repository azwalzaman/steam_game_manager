import readline from 'node:readline/promises';
import {
    get5RandomUnplayed,
    getTop5MostPlayed,
    getTop5LeastRecentlyPlayed,
    getTop5RecentlyPlayed
} from './src/my_library.js';

let choice = 0;
const message = `
Welcome! What can I do for you?
1. Top 5 Most Played Games
2. Top 5 Oldest Unplayed Games
3. Top 5 Newest Unplayed Games
4. Pick 5 Random Unplayed Games
5. Quit

`;

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


do {
    try {
        choice = parseInt(await reader.question(message));
        
    } catch (error) {
        choice = 0;
    }

    switch (choice) {
        case 1: {
            const mostPlayedGames = await getTop5MostPlayed();
            for (let i = 0; i < mostPlayedGames.length; i++) {
                const game = mostPlayedGames[i].name;
                const hours = (mostPlayedGames[i].playtime_forever / 60).toFixed(2);
                console.log(`${i + 1}. ${game} (${hours} hrs)`);
            }
            console.log("Woah! Woah! Woah!\n");
            break;
        }
        case 2: {
            const recentlyPlayedGames = await getTop5RecentlyPlayed();
            for (let i = 0; i < recentlyPlayedGames.length; i++) {
                console.log(`${i + 1}. ${recentlyPlayedGames[i].name}`);
            }
            console.log("Are you having fun with these? :D \n");
            break;
        }
        case 3: {
            const leastRecentlyPlayedGames = await getTop5LeastRecentlyPlayed();
            for (let i = 0; i < leastRecentlyPlayedGames.length; i++) {
                console.log(`${i + 1}. ${leastRecentlyPlayedGames[i].name}`);
            }
            console.log("Collecting dust :(((((\n");
            break;
        }
        case 4: {
            const randomUnplayedGames = await get5RandomUnplayed();
            for (let i = 0; i < randomUnplayedGames.length; i++) {
                console.log(`${i + 1}. ${randomUnplayedGames[i].name}`);
            }
            console.log("Give these a shot, kid :3\n");
            break;
        }
        case 5:
            console.log("Goodbye!\n");
            break;
        default:
            console.log("That's not an option, buddy\n");
    }
} while (choice !== 5);

reader.close();

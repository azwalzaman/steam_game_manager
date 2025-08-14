import readline from 'node:readline/promises';

let choice = 0;
let message = "Welcome! What can I do for you? \n1. Top 5 Most Played Games \n2. Top 5 Oldest Unplayed Games \n3. Top 5 Newest Unplayed Games \n4. Pick 5 Random Unplayed Games \n5. \n\n";

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

do {
    choice = parseInt(await reader.question(message));

    switch(choice) {
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            console.log("Goodbye!\n");
            break;
        default:
            console.log("That's not an option, buddy\n");
    }

} while (choice != 5);

reader.close();

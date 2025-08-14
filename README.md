# Steam Game Manager

## Prereqs
No external dependencies are used. You just need Node.js (I used v18)

## Instructions
There is a file called `config.example.json`. Copy it and rename the copy `config.json`. Once done fill in the following values:
- steam_api_key : Can be acquired [here](https://steamcommunity.com/dev).
- player_id : Can be gotten from your Steam profile on the web app unless it's custom in which case you might need to do a little digging with inspect element.
- base_url: It's currently https://api.steampowered.com . It's in the config just in case it changes.
- store_base_url: It's currently https://store.steampowered.com . Also there just in case.

To run it simply run `npm run start` on a terminal
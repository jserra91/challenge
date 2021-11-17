import Upcoming from './Upcoming.vue';

const DATA = {
    "away_image_url": "https://img.abiosgaming.com/competitors/Team-oNe-eSports-Logo.png",
    "away_team": "TeamOne",
    "away_team_id": 380,
    "best_of": 3,
    "competition_id": 2474,
    "competition_name": "ESEA Premier Division North America",
    "displayed_format": "BO3",
    "game_id": 2,
    "game_name": "Counter-Strike",
    "home_image_url": "https://d1dewv214im63w.cloudfront.net/teams/strife-logo.png",
    "home_team": "Strife",
    "home_team_id": 14207,
    "id": 344210,
    "live_enabled": false,
    "main_market_id": 11705151,
    "market": {
        "contracts": [
            {
                "display_order": 0,
                "id": 25159626,
                "market_id": 11705151,
                "max_bet": "29.00",
                "name": "Strife",
                "price": "6.40",
                "raw_status": "open",
                "status": "open"
            },
            {
                "display_order": 10,
                "id": 25159627,
                "market_id": 11705151,
                "max_bet": "319.00",
                "name": "Team One",
                "price": "1.07",
                "raw_status": "open",
                "short_name": "TeamOne",
                "status": "open"
            }
        ],
        "display_order": 0,
        "id": 11705151,
        "match_id": 344210,
        "name": "Ganador del encuentro",
        "popular": true,
        "status": "open"
    },
    "name": "Strife v TeamOne",
    "num_bets_placed": 90,
    "num_markets": 8,
    "start_time": "2021-11-17T01:00:00.000000Z",
    "status": "upcoming",
    "type": "match"
};

export default {
    component: Upcoming,
    title: 'Molecules/Upcoming'
};

const Template = (args, { argTypes }) => ({
    components: { Upcoming },
    props: Object.keys(argTypes),
    template: '<Upcoming v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in task.stories.js.
    match: { ...DATA },
    ejemplo: "Hola"
};
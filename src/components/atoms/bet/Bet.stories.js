import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import Bet from "./Bet.vue";

export default {
    title: "atom/Bet",
};

export const Button = () => ({
    props: {
        team: {
            type: String,
            default: text("team", "Virtus.pro"),
        },
        price: {
            type: Number,
            default: number("price", 1.32),
        },
    },
    components: { Bet },
    //template: `<MyButton :name="name" :isLoading="isLoading" @buttonClicked="action">Click Me!</MyButton>`,
    /*methods: {
        action: action("button-clicked"),
    },*/
    template: `<Bet :price="1.32" :team="'Virtus.pro'"></Bet>`
});

Button.story = {
    name: "Bet",
};
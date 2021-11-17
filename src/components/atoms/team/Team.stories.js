import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import Team from "./Team.vue";

export default {
    title: "atom/Team",
};

export const TeamComponent = () => ({
    props: {
        icon: {
            type: String,
            default: text("icon", "https://img.abiosgaming.com/competitors/Keyd-Stars-new.png"),
        }
    },
    components: { Team },
    //template: `<MyButton :name="name" :isLoading="isLoading" @buttonClicked="action">Click Me!</MyButton>`,
    /*methods: {
        action: action("button-clicked"),
    },*/
    template: `<Team icon="https://img.abiosgaming.com/competitors/Keyd-Stars-new.png">Keyd Stars</Team>`
});

TeamComponent.story = {
    name: "Team",
};
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import pagetitle from "./Pagetitle.vue";

export default {
    title: "atom/Pagetitle",
};

export const PagetitleComponent = () => ({
    props: {
        icon: {
            type: String,
            default: text("icon", "'./assets/calendar.png'"),
        }
    },
    components: { pagetitle },
    template: `<pagetitle icon="./assets/calendar.png">Upcoming</pagetitle>`
});

PagetitleComponent.story = {
    name: "Pagetitle",
};
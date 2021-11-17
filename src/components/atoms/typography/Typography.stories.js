import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import Typography from "./Typography.vue";

export default {
    title: "atom/Typography",
};

export const TypographyComponent = () => ({
    props: {
        type: {
            type: String,
            default: text("type", "title-medium"),
        }
    },
    components: { Typography },
    //template: `<MyButton :name="name" :isLoading="isLoading" @buttonClicked="action">Click Me!</MyButton>`,
    /*methods: {
        action: action("button-clicked"),
    },*/
    template: `<Typography type="title-medium">DreamHack Open Europe</Typography>`
});

TypographyComponent.story = {
    name: "Title",
};
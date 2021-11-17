import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import Title from "./Title.vue";

export default {
    title: "atom/Title",
};

export const TitleComponent = () => ({
    props: {},
    components: { Title },
    //template: `<MyButton :name="name" :isLoading="isLoading" @buttonClicked="action">Click Me!</MyButton>`,
    /*methods: {
        action: action("button-clicked"),
    },*/
    template: `<Title>DreamHack Open Europe</Title>`
});

TitleComponent.story = {
    name: "Title",
};
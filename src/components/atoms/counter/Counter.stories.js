import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import Counter from "./Counter.vue";

export default {
    title: "atom/Counter",
};

export const CounterComponent = () => ({
    props: {
        counter: {
            type: String,
            default: text("counter", "Virtus.pro"),
        }
    },
    components: { Counter },
    //template: `<MyButton :name="name" :isLoading="isLoading" @buttonClicked="action">Click Me!</MyButton>`,
    /*methods: {
        action: action("button-clicked"),
    },*/
    template: `<Counter :counter="'+3'"></Counter>`
});

CounterComponent.story = {
    name: "Counter",
};
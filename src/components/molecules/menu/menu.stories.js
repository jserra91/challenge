import Menu from './menu.vue';
import { DATA } from './menuMock';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    component: Menu,
    title: 'Molecules/Menu'
};

const Template = (args, { argTypes }) => ({
    components: { Menu },
    props: Object.keys(argTypes),
    template: '<Menu v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in task.stories.js.
    menus: { ...DATA }
};
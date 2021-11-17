import upcoming from './upcoming.vue';
import { DATA } from './upcomingMock';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    component: upcoming,
    title: 'Containers/Upcoming'
};

const Template = (args, { argTypes }) => ({
    components: { upcoming },
    props: Object.keys(argTypes),
    template: '<upcoming v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in task.stories.js.
    matches: { ...DATA.data }
};
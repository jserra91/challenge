import betslip from './betslip.vue';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
    component: betslip,
    title: 'Containers/BetSlip'
};

const Template = (args, { argTypes }) => ({
    props: {},
    components: { betslip },
    template: `<betslip></betslip>`
});

export const Default = Template.bind({});
Default.args = {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in task.stories.js.

};
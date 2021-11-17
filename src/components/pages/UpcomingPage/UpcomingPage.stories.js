import UpcomingPage from './UpcomingPage.vue';

export default {
    component: UpcomingPage,
    title: 'Pages/UpcomingPage'
};

const Template = (args, { argTypes }) => ({
    components: { UpcomingPage },
    props: Object.keys(argTypes),
    template: '<UpcomingPage v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in task.stories.js.
};
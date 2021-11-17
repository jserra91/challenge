import topbar from './topbar.vue';

export default {
    component: topbar,
    title: 'Molecules/topbar'
};

const Template = (args, { argTypes }) => ({
    components: { topbar },
    props: Object.keys(argTypes),
    template: '<topbar />',
});

export const Default = Template.bind({});
Default.args = {
};
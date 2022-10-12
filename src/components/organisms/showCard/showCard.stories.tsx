// @packages
import { Meta, Story } from "@storybook/react";

// @scripts
import ShowCard from ".";

const meta: Meta = {
  title: "ShowCard",
  component: ShowCard,
};

export default meta;

const Template: Story = (args) => <ShowCard {...args} />;

export const Default = Template.bind({});

Default.args = { isOpen: true };
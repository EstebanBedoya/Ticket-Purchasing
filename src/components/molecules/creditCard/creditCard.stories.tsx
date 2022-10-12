// @packages
import { Meta, Story } from "@storybook/react";

// @scripts
import CreditCard from ".";

const meta: Meta = {
  title: "CreditCard",
  component: CreditCard,
};

export default meta;

const Template: Story = (args) => <CreditCard {...args} />;

export const Default = Template.bind({});
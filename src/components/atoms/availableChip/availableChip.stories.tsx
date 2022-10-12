// @packages
import { Meta, Story } from "@storybook/react";

// @scripts
import AvailableChip, { Props } from ".";

const meta: Meta = {
  title: "AvailableChip",
  component: AvailableChip,
};

export default meta;

const Template: Story<Props> = (args) => <AvailableChip {...args} />;

export const Default = Template.bind({});

export const Secondary = Template.bind({});

Default.args = { isAvailable: true };
Secondary.args = { isAvailable: false };

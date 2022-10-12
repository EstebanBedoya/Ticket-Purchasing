// @packages
import { Meta, Story } from "@storybook/react";

// @scripts
import CustomSelect, { Props } from ".";

const meta: Meta = {
  title: "CustomSelect",
  component: CustomSelect,
};

export default meta;

const Template: Story<Props> = (args) => <CustomSelect {...args} />;

export const Default = Template.bind({});

Default.args = {
  quantity: 10,
};

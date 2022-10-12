// @packages
import { Meta, Story } from "@storybook/react";

// @scripts
import SelectQuantity, { Props } from ".";

const meta: Meta = {
  title: "SelectQuantity",
  component: SelectQuantity,
};

export default meta;

const Template: Story<Props> = (args) => <SelectQuantity {...args} />;

export const Default = Template.bind({});

Default.args = {};

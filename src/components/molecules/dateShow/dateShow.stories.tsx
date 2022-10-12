// @packages
import { Meta, Story } from "@storybook/react";

// @scripts
import DateShow, { Props } from ".";

const meta: Meta = {
  title: "DateShow",
  component: DateShow,
};

export default meta;

const Template: Story<Props> = (args) => <DateShow {...args} />;

export const Default = Template.bind({});

Default.args = { date: "10-10-2022" };
// @packages
import { Meta, Story } from "@storybook/react";

// @scripts
import ModalPayment, { Props } from ".";

const meta: Meta = {
  title: "ModalPayment",
  component: ModalPayment,
};

export default meta;

const Template: Story<Props> = (args) => <ModalPayment {...args} />;

export const Default = Template.bind({});

Default.args = { isOpen: true };

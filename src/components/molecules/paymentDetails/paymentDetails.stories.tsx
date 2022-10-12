// @packages
import { Meta, Story } from "@storybook/react";

// @scripts
import PaymentDetails, { Props } from ".";

const meta: Meta = {
  title: "PaymentDetails",
  component: PaymentDetails,
};

export default meta;

const Template: Story<Props> = (args) => <PaymentDetails {...args} />;

export const Default = Template.bind({});

Default.args = {
    priceTicket: 150,
};
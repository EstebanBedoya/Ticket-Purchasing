// @packages
import { Meta, Story } from "@storybook/react";
import { CardData } from "../../../utils/types";

// @scripts
import CreditCard from ".";

const meta: Meta = {
  title: "CreditCard",
  component: CreditCard,
};

export default meta;

const initCardData: CardData = {
  name: "Test Name",
  number: "3245123200000000",
  cvc: "123",
  expiry: "1226",
};

const Template: Story = (args) => <CreditCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  setCardData: ({ ...initCardData }: CardData) => {},
};

// @packages
import { Meta } from "@storybook/react";

// @scripts
import ExampleButton from ".";

const meta: Meta = {
  title: "ExampleButton",
  component: ExampleButton,
};

export default meta;

export const Default = () => <ExampleButton />;

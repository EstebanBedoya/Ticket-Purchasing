// @packages
import { Meta } from "@storybook/react";

// @scripts
import AvailableChip from ".";

const meta: Meta = {
  title: "AvailableChip",
  component: AvailableChip,
};

export default meta;

export const Default = () => <AvailableChip isAvailable={false} />;

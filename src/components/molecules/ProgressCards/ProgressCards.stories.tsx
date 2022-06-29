import { Meta, Story } from "@storybook/react";
import { StyledResponsiveContainer } from "../../atoms";
import { ProgressCards } from "./ProgressCards";

export default {
  title: "Molecules/Progress Cards",
  component: ProgressCards,
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <div className="container">
    <StyledResponsiveContainer>
      <ProgressCards />
    </StyledResponsiveContainer>
  </div>
);
export const Default = Template.bind({});

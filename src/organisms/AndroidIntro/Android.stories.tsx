import { Meta, Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { StyledResponsiveContainer } from "../../components/atoms";
import { AndroidIntro } from "./AndroidIntro";

export default {
  title: "Organisms/Android Intro",
  component: AndroidIntro,
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <div className="container">
    <BrowserRouter>
      <StyledResponsiveContainer>
        <AndroidIntro />
      </StyledResponsiveContainer>
    </BrowserRouter>
  </div>
);
export const Default = Template.bind({});

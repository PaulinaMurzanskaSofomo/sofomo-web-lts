import React from "react";
import { Meta, Story } from "@storybook/react";
import { NestedDropdown } from ".";
import { BrowserRouter } from "react-router-dom";
import { SectionContainer, StyledResponsiveContainer } from "../../components/atoms";
import { theme } from "../../themes/MainTheme";

export default {
  title: "Organisms/NestedDropdown",
  component: NestedDropdown,
} as Meta;

export const NestedDropdownList: Story = () => (
  <BrowserRouter>
    <SectionContainer background={theme.colors.purple}>
      <StyledResponsiveContainer>
        <div className="container">
          <NestedDropdown />
        </div>
      </StyledResponsiveContainer>
    </SectionContainer>
  </BrowserRouter>
);

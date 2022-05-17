import React from "react";
import { Banner, Props } from "./Banner";
import { Meta, Story } from "@storybook/react";
import { circles, tenYears } from "../../../assets/images";
import { Grid } from "../Grid";
import { leadersLogoList, partnersLogosList } from "../../../assets/logos/logoLists";

export default {
  title: "Molecules/Banner",
  component: Banner,
} as Meta;

const Template: Story<Props> = (args) => (
  <div className="container footer">
    <Banner {...args}>
      <Grid itemsList={partnersLogosList} variant={"grid-6-items"} />
    </Banner>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  image: circles,
  imageOuter: true,
  title:
    "We build & support your own talented, trusted, full-time development team hosted out of Sofomo’s",
  backgroundColor: "#6c79ef",
  animated: true,
  titleVariant: "font-17-to-20",
  titleColor: "white",
};

export const ImageInner = () => (
  <div className="container footer">
    <Banner
      image={tenYears}
      imageInner
      title="Exceptional development teams for startups to industry leaders"
      backgroundColor="#FAFBFE;"
      titleVariant="font-13 to-20"
    >
      <Grid itemsList={leadersLogoList} variant={"grid-4-items"} />
    </Banner>
  </div>
);

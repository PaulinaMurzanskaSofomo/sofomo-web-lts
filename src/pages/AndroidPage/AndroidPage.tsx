import React from "react";
import { AndroidIntro } from "../../organisms/AndroidIntro";
import { GreenAndroidCards } from "../../organisms/GreenAndroidCards";
import { StyledAndroidPage } from "./StyledAndroidPage";

export const AndroidPage = () => {
  return (
    <StyledAndroidPage>
      <AndroidIntro />
      <GreenAndroidCards />
    </StyledAndroidPage>
  );
};

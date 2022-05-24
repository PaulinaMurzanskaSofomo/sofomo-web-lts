import React, { FC, ReactNode } from "react";
import { SectionContainer, Button, Image } from "../../atoms";
import { PageViewVariants } from "../../../types/pageViewTypes";
import { ButtonVariant } from "../../../types/buttonTypes";
import { StyledPageView, StyledContent, StyledViewImage } from "./StyledPageView";

export interface Props {
  btnVariant?: ButtonVariant;
  btnLabel?: string;
  btnPath?: string;
  btnWidth?: string;
  btnOnClick?: VoidFunction;
  image?: string;
  id?: string;
  children: any;
  variant: PageViewVariants;
  background?: string;
  className?: string;
  animatedSvg?: boolean;
  animatedComponent?: ReactNode;
  flexDirection?: string;
}

export const PageView: FC<Props> = ({
  btnLabel,
  btnPath,
  image,
  children,
  variant,
  btnVariant,
  background,
  flexDirection = "column-reverse",
  id = "i",
  btnOnClick,
  btnWidth,
  animatedComponent,
}) => {
  return (
    <SectionContainer background={background}>
      <StyledPageView name={variant} id={id} flexDirection={flexDirection}>
        <StyledContent name={variant}>
          {children}
          {btnLabel && (
            <Button
              width={btnWidth}
              label={btnLabel}
              onClick={btnOnClick}
              path={btnPath}
              variant={btnVariant}
            />
          )}
        </StyledContent>
        {image && (
          <StyledViewImage className={variant} name={variant}>
            <Image src={image} alt="section" animatedComponent={animatedComponent} />
          </StyledViewImage>
        )}
      </StyledPageView>
    </SectionContainer>
  );
};

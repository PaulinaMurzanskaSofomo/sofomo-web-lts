import React, { FC, useContext } from "react";
import { theme } from "../../themes/MainTheme";
import { offices } from "../../assets/content/footer/Offices";
import { socialIconsList } from "../../assets/icons/socialIconsList";
import { footerLists } from "../../assets/content/footer/SectionAbout";
import { Image, Typography, SectionContainer } from "../../components/atoms";
import { ListItem, List, Card } from "../../components/molecules";
import {
  StyledSpan,
  StyledCardBody,
  StyledListsWrapper,
  StyledFooter,
  StyledDividerLine,
} from "./StyledFooter";
import { Link, useLocation } from "react-router-dom";

export const Footer: FC = () => {
  const location = useLocation();
  const defaultPath = location.pathname;

  return (
    <SectionContainer background="#f5f8fb" as="footer">
      <StyledFooter>
        {offices.map((office, i) => (
          <Card
            className="grid-area"
            key={i}
            title={office.country}
            label={office.headquarter ? "Headquarters" : ""}
            variant={"large-nonresponsive"}
          >
            {office.data && (
              <StyledCardBody>
                <Image width="5rem" height="5rem" src={office.avatar} alt="avatar" />
                <List variant={"plain"} margin="0 0 0 1.5rem">
                  {Object.values(office.data).map((item: any, i: number) => (
                    <Typography variant={"font-14"} key={i}>
                      {item}
                    </Typography>
                  ))}
                </List>
              </StyledCardBody>
            )}
          </Card>
        ))}
        <Card
          className="grid-area"
          socialIconsList={socialIconsList}
          title="About Us"
          variant={"small-nonresponsive"}
        >
          <Typography as="p" variant={"font-14"} width="30.5rem">
            Sofomo provides high performing development teams to innovative companies. Our
            developers join your team and become your superpower!.
          </Typography>
        </Card>
        {footerLists.map((list: any, i: number) => (
          <Card title={list[0][0]} variant={"small-nonresponsive"} className="grid-area" key={i}>
            <StyledListsWrapper>
              <List variant={"plain"} margin="0">
                {list[1].map((item: any, i: number) => (
                  <Link to={item.path === "" ? defaultPath : item.path} key={i}>
                    <ListItem
                      as="div"
                      hover
                      hoverWeight="400"
                      variant={"plain"}
                      listItem={item.title}
                      itemColor={theme.colors.gray400}
                      itemWidth="max-content"
                    />
                  </Link>
                ))}
              </List>
              {list.length > 2 && (
                <List variant={"plain"} margin="0 0 0 4rem">
                  {list[2].map((item: any, i: number) => (
                    <Link key={i} to={item.path}>
                      <ListItem
                        margin="0 0 10px 0"
                        hover
                        hoverWeight="400"
                        variant={"plain"}
                        listItem={item.title}
                        itemColor={theme.colors.gray400}
                        itemWidth="max-content"
                      />
                    </Link>
                  ))}
                </List>
              )}
            </StyledListsWrapper>
          </Card>
        ))}
        <StyledDividerLine />
        <StyledSpan>© All rights reserved Sofomo 2020</StyledSpan>
      </StyledFooter>
    </SectionContainer>
  );
};

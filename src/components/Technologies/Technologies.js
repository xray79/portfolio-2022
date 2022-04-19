import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
import { HiOutlineServer } from "react-icons/hi";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Here is a list of technologies that I have used throughout the above
      projects
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience With: <br /> React and Next
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <HiOutlineServer size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience With: <br /> Node, Express and EJS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience With: <br /> mongoDB and SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

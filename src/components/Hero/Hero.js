import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Ibnul Huq <br />
      </SectionTitle>
      <SectionText>
        Engineering graduate from King’s College London, looking to further
        develop programming skills with relevant experience. I have been
        proactive in further developing my programming skills by using multiple
        online courses and projects.
      </SectionText>
      <Button
        onClick={() => {
          window.location = "https://www.github.com/xray79";
        }}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;

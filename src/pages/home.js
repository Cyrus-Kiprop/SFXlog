import React from "react";
import styled from "styled-components";

import Contact from "../components/contact-me";

export default function Home() {
  return (
    <HomeWrapper>
      <Contact />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div``;

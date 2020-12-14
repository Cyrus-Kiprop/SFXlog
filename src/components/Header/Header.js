import React from "react";
import { Link } from "gatsby";
import Nav from "../shared-components/Nav";
import styled from "styled-components";

export const Header = ({ siteTitle, siteDescription, children }) => (
  <HeaderContentWrapper>
    <div className="spacer"></div>
    <Nav />
    {children}
  </HeaderContentWrapper>
);

export const HeaderContentWrapper = styled.div`
  z-index: 3;
  background: linear-gradient(
    0deg,
    var(--color-homepage-dark),
    var(--color-homepage-light)
  );
  height: 200px;

  position: relative;
  transition: --color-homepage-light 350ms linear 0s,
    --color-homepage-dark 350ms linear 0s;

  @media (min-width: 769px) {
    height: 400px;
  }

  .spacer {
    height: 48px;
    width: 48px;
  }
`;

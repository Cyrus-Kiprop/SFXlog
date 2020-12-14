import React from "react";
import styled from "styled-components";

import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Header } from "./Header/Header";

const AppStyles = styled.div`
  margin: 0 auto;
  background-color: var(--color-background);
`;
export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <AppStyles>
      {/* <Header siteTitle={title} siteDescription={description} /> */}
      {children}
    </AppStyles>
  );
};

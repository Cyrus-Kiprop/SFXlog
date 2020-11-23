import React from "react";
import styled from "styled-components";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const StyledH1 = styled.h1`
  color: rebeccapurple;
`;

export default function Index() {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <StyledH1> {title}</StyledH1>
      <p> {description}</p>
    </div>
  );
}

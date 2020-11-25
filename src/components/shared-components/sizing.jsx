import React from "react";
import styled from "styled-components";

export function Sizing1100px({ children }) {
  return <ElevenHundredPixelWrapper>{children}</ElevenHundredPixelWrapper>;
}

const ElevenHundredPixelWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;
  position: sticky;
  top: 0;
  z-index: 2;
`;

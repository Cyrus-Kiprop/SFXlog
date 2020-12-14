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

export function Sizing1200px({ children }) {
  return <TwelveHundredPixelWrapper>{children}</TwelveHundredPixelWrapper>;
}

const TwelveHundredPixelWrapper = styled.div`
  width: 100%;
  max-width: 1155px;
  margin: auto;
  z-index: 2;
`;

export function SectionSeparator({ children }) {
  return <SeparatorWrapper>{children}</SeparatorWrapper>;
}

const SeparatorWrapper = styled.div`
  padding: 60px 0;
  padding-top: 100px;
  color: red;
`;

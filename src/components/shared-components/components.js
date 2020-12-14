import React from "react";
import styled from "styled-components";

export function SectionTitle({ children }) {
  return (
    <SectionTitleWrapper>
      <h3
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-easing="ease"
        data-sal-duration="800"
      >
        {children}
      </h3>
    </SectionTitleWrapper>
  );
}

const SectionTitleWrapper = styled.div`
  h3 {
    margin-bottom: 60px;
    color: white;
    text-align: center;
    font-size: 30px;
    line-height: 40px;
    font-weight: bold;
  }
`;

export function Row({ children }) {
  return (
    <div className="container-fluid">
      <div className="row">{children}</div>
    </div>
  );
}

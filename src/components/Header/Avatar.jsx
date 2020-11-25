import React from "react";
import styled from "styled-components";

import img from "./avatar.png";

export default function Avatar() {
  return (
    <AvatarWrapper>
      <div className="img__container"></div>
    </AvatarWrapper>
  );
}

const AvatarWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 14rem;
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center center;
  opacity: 1;
  transition: opacity 500ms ease 0s;
  /* border-radius: 50%; */
  background-image: url(${img});
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
`;

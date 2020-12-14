import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faLocationArrow,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { Row } from "../shared-components/components";

export default function ContactItem() {
  return (
    <Row>
      <div className="col-12 col-md-4">
        <ContactItemWrapper
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="800"
        >
          <div class="each-icon">
            <div>
              <FontAwesomeIcon icon={faLocationArrow} />
            </div>
          </div>
          <div class="each-info">
            <h4>Address</h4>
            <address>
              Okore Rd., 2117, <br />
              Kisumu, Kenya
            </address>
          </div>
        </ContactItemWrapper>
      </div>
      <div className="col-12 col-md-4">
        <ContactItemWrapper
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-easing="ease"
          data-sal-duration="800"
        >
          <div class="each-icon">
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <i class="fa fa-envelope-o"></i>
          </div>
          <div class="each-info">
            <h4>Email</h4>
            <a href="mailto:cyruskiprop254@gmail.com">
              cyruskiprop254@gmail.com
            </a>
            <br />
            <a href="mailto:kipmoneygram@gmail.com">kipmoneygram@gmail.com</a>
          </div>
        </ContactItemWrapper>
      </div>
      <div className="col-12 col-md-4">
        <ContactItemWrapper
          data-sal="slide-up"
          data-sal-delay="700"
          data-sal-easing="ease"
          data-sal-duration="800"
        >
          <div class="each-icon">
            <div>
              <FontAwesomeIcon icon={faPhone} />
            </div>
          </div>
          <div class="each-info">
            <h4>Phone</h4>
            <a href="callto:(880)-8976-987">(+254) 726 158 347</a>
            <br />
            <a href="callto:(880)-8976-987">(+254) 779 979 515 </a>
          </div>
        </ContactItemWrapper>
      </div>
    </Row>
  );
}

const ContactItemWrapper = styled.div`
  box-shadow: -1rem 0 3rem #000;
  padding: 30px;
  text-align: center;
  margin-bottom: 30px;
  border-radius: 4px;
  color: #fff;
  background-color: #202026;

  @media (max-width: 768px) {
    max-width: 400px;
    margin: auto;
    margin-bottom: 30px;
  }

  .each-icon {
    margin-bottom: 30px;
    color: white;
    display: flex;
    justify-content: center;
  }

  .each-icon > div {
    border: 1px solid #0bceaf;
    line-height: 100px;
    border-radius: 50%;
    text-align: center;
    height: 100px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .each-icon > div > svg {
    font-size: 20px;
  }

  .each-info h4 {
    margin-bottom: 20px;
    font-size: 1.3rem;
  }

  .each-info > a {
    color: #fff;
    opacity: 0.9;
    cursor: pointer;
    padding: 0px;
  }
`;

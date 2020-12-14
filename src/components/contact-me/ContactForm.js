import React, { useEffect } from "react";
import styled from "styled-components";
import Animate from "../animations";
import { Row } from "../shared-components/components";

export default function ContactForm() {
  return (
    <Row>
      <div className="col-12 col-md-6">
        <Form />
      </div>
      <div className="col-12 col-md-6">2</div>
    </Row>
  );
}

const FormWrapper = styled.div`
  input,
  textarea {
    background: transparent;
    color: #fff;
    height: 50px;
    line-height: 50px;
    margin-bottom: 20px;
    border: 1px solid #fff;
    padding: 20px;
    outline: none;
  }

  input:focus {
    outline: none;
    background: transparent;
    outline-color: red;
  }

  textarea:focus,
  input:focus,
  input[type]:focus,
  .uneditable-input:focus {
    border-color: rgba(229, 103, 23, 0.8);
    box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075) inset,
      0 0 8px rgba(229, 103, 23, 0.6);
    outline: 0 none;
  }

  textarea {
    overflow-y: auto;
    width: 100%;
    border-radius: 4px;
    height: 10rem;
  }

  .btn-form > button {
    background-color: #0bceaf;
    color: #fff;
    padding: 8px 30px;
    font-weight: bold;
    border-radius: 20px;
    transition: color 0.3s ease;
    cursor: pointer;
  }

  .btn-form > button:hover {
    background: transparent;
    border: 2px solid #0bceaf;
    transition: background-color 0.3s ease-in-out;
    color: #0bceaf;
  }
`;

function Form() {
  useEffect(() => {
    const input1 = document.getElementById("L_name");
    const input2 = document.getElementById("name");
    const input3 = document.getElementById("email");

    [input1, input2, input3].forEach((element) => {});
  }, []);
  const handleClick = (event) => {
    const target = event.target;
    target.style.background = "transparent";
  };

  return (
    <Animate>
      <FormWrapper>
        <form id="contactForm" className="single-form">
          <div id="msgSubmit" className="h3 text-center hidden"></div>
          <Row>
            <div className="col-md-6 col-sm-12">
              <input
                name="name"
                onClick={handleClick}
                className="contact-name form-control"
                id="name"
                type="text"
                placeholder="First Name"
                required=""
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <input
                name="name"
                className="contact-email form-control"
                id="L_name"
                type="text"
                placeholder="Last Name"
                required=""
              />
            </div>
            <div className="col-sm-12">
              <input
                name="name"
                className="contact-subject form-control"
                id="email"
                type="email"
                placeholder="Your Email"
                required=""
              />
            </div>
            <div className="col-sm-12">
              <textarea
                className="contact-message"
                id="message"
                rows={6}
                placeholder="Your Message"
                required=""
              ></textarea>
            </div>
          </Row>

          <div className="btn-form col-sm-12">
            <button
              type="submit"
              className="btn btn-fill btn-block disabled"
              id="form-submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </FormWrapper>
    </Animate>
  );
}

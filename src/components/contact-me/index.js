import React from "react";
import { SectionTitle } from "../shared-components/components";

import { Sizing1200px, SectionSeparator } from "../shared-components/sizing";
import ContactForm from "./ContactForm";
import ContactMeItems from "./ContactMeitems";

export default function Contact() {
  return (
    <Sizing1200px>
      <SectionSeparator>
        <SectionTitle>Contact Me</SectionTitle>
        <ContactMeItems />
        {/* contact form */}
        <ContactForm />
      </SectionSeparator>
    </Sizing1200px>
  );
}

import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

export default function Index() {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <h1> {title}</h1>
      <p> {description}</p>
    </div>
  );
}

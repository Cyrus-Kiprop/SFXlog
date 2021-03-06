import { MDXProvider } from "@mdx-js/react";
import React from "react";
import Code from "./src/components/Code";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./src/theme/global-style";

import "bootstrap/dist/css/bootstrap.min.css";

const components = {
  pre: ({ children: { props } }) => {
    if (props.mdxType === "code") {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace("language-", "")}
          {...props}
        />
      );
    }
  },
};
export const WrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <MDXProvider components={components}>{element}</MDXProvider>
  </ThemeProvider>
);

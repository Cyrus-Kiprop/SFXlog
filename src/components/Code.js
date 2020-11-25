import React, { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import styled from "styled-components";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { copyToClipboard } from "../utils/copy-to-clipboard";

// some pre styles for the code editor
export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow-x: auto;
  border-radius: 6px;
  min-height: 284px;
  max-height: 75vh;
  max-width: calc(100% + 64px);
  /* font-family: var(--font-family-mono); */
  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
  font-family: "Courier New", Courier, monospace;
  position: relative;
`;

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;

const CopyCode = styled.button`
  position: absolute;
  right: 0.25rem;
  top: 0.25rem;
  border: 0;
  border-radius: 3px;
  outline: none;
  margin: 0.25em;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
`;

const Code = ({ codeString, language }) => {
  const [copyButtonContent, setCopyButtonContent] = useState(false);
  const handleCopyToClipboard = () => {
    setCopyButtonContent(() => !copyButtonContent);
    copyToClipboard(codeString);
  };

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <CopyCode onClick={handleCopyToClipboard}>
            {copyButtonContent ? "copied!" : "copy"}
          </CopyCode>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};
export default Code;

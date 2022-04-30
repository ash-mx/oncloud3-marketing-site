import { css } from "styled-components";

import Fonts from "./fonts.styles";
import Vars from "./vars.styles";

const Base = css`
  ${Fonts};
  ${Vars};

  html {
    /* Box sizing reset */
    box-sizing: border-box;

    /* Load system fonts */
    font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI,
      Roboto, Helvetica Neue, sans-serif;

    /* Make type rendering look crisper */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* Deactivate auto-enlargement of small text in Safari */
    text-size-adjust: 100%;

    /* Enable kerning and optional ligatures */
    text-rendering: optimizeLegibility;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-color: var(--neutral-1000);
  }

  /**
 * Form elements render using OS defaults,
 * so font-family inheritance must be specifically declared
 */
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
  }

  /* Setting Base Fonts */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-bold);
    color: var(--neutral-0);
    margin: 0;
  }

  p,
  a {
    font-family: var(--font-regular);
    color: var(--neutral-0);
  }

  button {
    font-family: var(--font-medium);
  }

  input,
  optgroup,
  select,
  textarea {
    font-family: var(--font-regular);
  }
`;

export default Base;

import { createGlobalStyle } from "styled-components";

interface ThemeProps {
  // Define your theme properties here
  colors: {
    heading: string;
    text: string;
    bg: string;
    helper: string;
    btn: string;
    white: string;
    black: string;
    border: string;
    shadowSupport: string;
  };
  media: {
    tab: string;
    mobile: string;
  };
}

export const GlobalStyle = createGlobalStyle<{ theme: ThemeProps }>`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Work Sans", sans-serif;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  body {
    overflow-x: hidden;
    scrollbar-color: ${({ theme }) => theme.colors.shadowSupport};
    scrollbar-width: thin;
  }

  /* ... rest of your styles ... */

  input,
  textarea {
    max-width: 50rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: uppercase;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  }

  input[type="submit"] {
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
  }

  /* ... media queries ... */

`;

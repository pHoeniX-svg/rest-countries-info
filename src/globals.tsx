import styled, { createGlobalStyle, css } from 'styled-components';

const basicStyles = css`
  :root {
    color-scheme: light dark;
    scroll-behavior: smooth;
    scroll-padding-top: 2rem;

    /* colors */
    --clr-600: 209, 23%, 22%;
    --clr-500: 207, 26%, 17%;
    --clr-400: 200, 15%, 8%;
    --clr-300: 0, 0%, 52%;
    --clr-200: 0, 0%, 98%;
    --clr-100: 0 0% 100%;

    /* font-sizes */
    --fs-900: 3.6rem;
    --fs-800: 3.2rem;
    --fs-700: 2.4rem;
    --fs-600: 2rem;
    --fs-500: 1.8rem;
    --fs-400: 1.6rem;
    --fs-300: 1.4rem;
    --fs-200: 1.2rem;
    --fs-100: 1rem;

    --fw-800: 700;
    --fw-700: 700;
    --fw-600: 600;
    --fw-500: 500;
    --fw-400: 400;
    --fw-300: 300;

    --ff-primary: 'Nunito Sans', sans-serif;

    --max-width: 128rem;
  }

  /* Set core root defaults */
  html {
    box-sizing: border-box;
    font-size: 50%;
    text-rendering: optimizeSpeed;
    @media screen and (min-width: 45em) {
      font-size: 56.25%;
    }
    @media screen and (min-width: 75em) {
      font-size: 62.5%;
    }
    @media screen and (min-width: 112.5em) {
      font-size: 75%;
    }
    &,
    &:focus-within {
      scroll-behavior: smooth;
    }
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  /* Set core body defaults */
  body {
    --clr-primary: hsl(var(--clr-400));
    --clr-accent: hsl(var(--clr-300));
    --bg-primary: hsl(var(--clr-200));
    --bg-accent: hsl(var(--clr-100));

    min-height: 100vh;
    color: var(--clr-primary);
    background-color: var(--bg-primary);
    font-family: var(--ff-primary);
    font-size: var(--fs-300);
    line-height: 1.5;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /*********** THEMING ************/

  [class*='theme-'] {
    background: var(--bg-primary);
    color: var(--clr-primary);
  }

  .theme-dark {
    --clr-primary: hsl(var(--clr-100));
    --clr-accent: hsl(var(--clr-200));
    --bg-primary: hsl(var(--clr-500));
    --bg-accent: hsl(var(--clr-600));
  }

  .theme-light {
    --clr-primary: hsl(var(--clr-400));
    --clr-accent: hsl(var(--clr-300));
    --bg-primary: hsl(var(--clr-200));
    --bg-accent: hsl(var(--clr-100));
  }

  @media (prefers-color-scheme: dark) {
    .theme-dark {
      --clr-primary: hsl(var(--clr-100));
      --clr-accent: hsl(var(--clr-200));
      --bg-primary: hsl(var(--clr-500));
      --bg-accent: hsl(var(--clr-600));
    }

    .theme-light {
      --clr-primary: hsl(var(--clr-400));
      --clr-accent: hsl(var(--clr-300));
      --bg-primary: hsl(var(--clr-200));
      --bg-accent: hsl(var(--clr-100));
    }
  }

  /*********** SCROLLBARS: DISABLED ************/
  *,
  html {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */

    &::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* Chrome/Safari/Webkit */
    }
  }

  /* Make images easier to work with */
  /* :not([hidden]) selector fixes display issues */
  img,
  picture:not([hidden]) {
    height: auto;
    display: block;
    max-width: 100%;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  // reset the default link colors
  a {
    color: inherit;
  }

  /* Inherit fonts for inputs and buttons */
  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  // screen reader only
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  // skip to main content
  .skip-to-content {
    position: absolute;
    margin-inline: auto;
    padding: 0.5em 1em;
    color: hsl(var(--clr-dark));
    background: hsl(var(--clr-white));
    clip: 0;
    z-index: 9999;
    transform: translateY(-120%);
    transition: transform 500ms ease-in-out;

    &:focus {
      transform: translateY(0);
    }
  }

  /* FLOW UTILITY */
  .flow > *:where(:not(:first-child)) {
    margin-block-start: var(--flow-space, 1em);
  }

  .flow-space--small {
    --flow-space: 1rem;
  }

  .section {
    padding-block: 15rem;
  }
`;

const GlobalContainer = styled.div`
  max-width: var(--max-width, 128rem);
  margin-inline: auto;
  padding-inline: var(--spacer, 2em);
`;

const GlobalStyle = createGlobalStyle`
  ${basicStyles}
`;

export { GlobalStyle, GlobalContainer };

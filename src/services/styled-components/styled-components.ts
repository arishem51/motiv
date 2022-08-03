import { createGlobalStyle } from "styled-components";
import { COLORS, SIZE } from "./variables";

export const GlobalStyle = createGlobalStyle`
    /*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
  font-family: 'DM Sans', sans-serif;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
:root {
    --color-purple:${COLORS.purple}
    --color-white:${COLORS.white}
    --color-dark:${COLORS.dark}
    --color-red:${COLORS.red}
    --color-orange:${COLORS.orange}
    --color-yellow:${COLORS.yellow}
    --color-green:${COLORS.green}
    --color-blue:${COLORS.blue}
    --size-8: ${SIZE[0]}
    --size-16:${SIZE[1]}
    --size-24:${SIZE[2]}
    --size-32:${SIZE[3]}
    --size-64:${SIZE[4]}
}
`;

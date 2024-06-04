import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
body {
    display: flex;
    justify-content: center;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* #__next {
    width: 100%;
    height: 2500px;
} */
`
export default GlobalStyles
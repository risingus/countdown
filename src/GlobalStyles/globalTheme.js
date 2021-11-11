import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {
    @font-face {
      font-family: redHatBold;
      src: url(RedHatText-Bold.ttf) format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: redHat;
      src: url(RedHatText-Regular.ttf) format('truetype');
    }

    font-family: redHatBold;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`;
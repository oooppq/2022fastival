import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @font-face {
        font-family: 'EF_WAKEUP';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-01@1.0/EF_WAKEUP.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
      font-family: 'ChosunGs';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ChosunGs.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

    body {
        font-family: 'EF_WAKEUP'
    }

    * {
        box-sizing : border-box;
    }
`;

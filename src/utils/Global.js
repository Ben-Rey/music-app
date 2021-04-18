import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { neuroBasic } from "./colors";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    html {
        font-style: 16px;
        box-sizing: border-box;
    }
    *, *::before, *::after{
        box-sizing: inherit;
    }
    body {
        margin: 0;
        font-family: ${primaryFont};
        background-color: ${neuroBasic[100]}
        
    }
    main {
        width:90%;
        margin: 0 auto
    }
`;

import { createGlobalStyle } from "styled-components"; 

const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        
        font-family: "Roboto", sans-serif;
    }

    body {
        background-image: url("https://i.pinimg.com/564x/5d/c3/63/5dc36357e9f4f4419b484433d4bad3f8.jpg");
        background-size: cover;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 100dvw;
        height: 100dvh;
    }
`

export default GlobalStyled
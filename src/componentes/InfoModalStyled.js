import styled from "styled-components";

export const Back = styled.div`
    background-color: rgba(200, 200, 200, 0.2);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export const Conteiner = styled.div `
    width: 50dvw;
    height: 50dvh;

    background-color: rgba(61, 223, 224, 0.6);
    backdrop-filter: blur(1px);

    border-radius: 10px;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 20px;

    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 7px;
`

export const Fechar = styled.button `
    width: 25px;
    height: 25px;

    position: absolute;
    top: 10px;
    right: 10px;

    border-radius: 50%;
    border: none;

    background-color: transparent;

    cursor: pointer;
`
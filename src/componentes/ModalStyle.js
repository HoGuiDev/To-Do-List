import styled from 'styled-components'

export const BackGruond = styled.div `
    background: rgba(0, 0, 0, 0.25);
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`

export const Fechar = styled.button`
    position: fixed;
    top: 0;
    right: 0;

    width: 20px;
    height: 20px;

    border: none;

    background: transparent;

    cursor: pointer;
`

export const Adm = styled.div `
    background: rgba(129, 245, 250, 0.2);
    backdrop-filter: blur(3px);

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 50vw;
    height: 50vh;

    display: flex;
    flex-direction: column;

    padding: 20px;
    gap: 20px;

    border-radius: 10px;
`
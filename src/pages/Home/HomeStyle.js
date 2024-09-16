import styled from 'styled-components'

export const Buttons = styled.div `
    width: 70px;
    display: flex;
    justify-content: space-around;
`

export const Concluir = styled.button `
    background-color: green;
    border: green solid 1px;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    cursor: pointer;
`

export const Excluir = styled.button `
    background-color: red;
    border: red solid 1px;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    cursor: pointer;
`

export const Conteiner = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    width: 50dvw;
    height: 75dvh;

    border: none;
    border-radius: 10px;

    background-color: rgba(40, 240, 247, 0.01);
    backdrop-filter: blur(10px);

    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
`

export const Title = styled.h1 `
    color: black;

    margin: 20px 0px;

    align-self: center;
`

export const Tarefa = styled.div `
    display: flex;
    justify-content: space-between;

    border: #6E6E6E solid 2px;
    border-radius: 10px;

    height: 50px;

    padding: 10px 10px 5px 10px;
    margin: 2.5px 5px;
`

export const Adm = styled.div `
    margin: 10px 10px;

    display: flex;
    justify-content: space-around;

    justify-self: end;
`

export const AdmInput = styled.input `
    width: 300px;
    height: 30px;
    border: none;
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
`

export const AdmButton = styled.button `
    width: 300px;
    height: 30px;

    border: none;
    border-radius: 20px;
    
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);

    cursor: pointer;

    &:hover {
        background-color: #48FF58;
    }
`

export const List = styled.div `
    overflow-y: auto;

    height: 50dvh;
`
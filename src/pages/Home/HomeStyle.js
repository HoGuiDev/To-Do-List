import styled from "styled-components"

export const Buttons = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    width: 160px;

    display: flex;
    justify-content: space-around;
`

export const Concluir = styled.button`
    background-color: green;
    border: green solid 1px;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;
`

export const Excluir = styled.button`
    background-color: red;
    border: red solid 1px;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;
`

export const Conteiner = styled.div`
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

export const Title = styled.h1`
    color: black;

    margin: 20px 0px;

    align-self: center;
`

export const Tarefa = styled.div`
    display: flex;
    justify-content: space-between;

    border: #6E6E6E solid 2px;
    border-radius: 10px;

    height: 50px;

    padding: 10px 10px 5px 10px;
    margin: 2.5px 5px;
`

export const AdmInput = styled.input`
    width: 300px;
    height: 30px;
    border: none;
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
`

export const AdmDesc = styled.textarea `
    height: 40vh;
`

export const AdmButton = styled.button`
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

export const List = styled.div`
    overflow-y: auto;
    height: 50dvh;

    &::-webkit-scrollbar{
        width: 10px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: rgba(168, 168, 250, 0.8);
        border-radius: 5px;
    }
`

export const AddButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;

    border: none;
    border-radius: 100%;

    width: 50px;
    height: 50px;

    cursor: pointer;

    font-size: x-large;

    &:hover {
        background-color: rgba(200, 200, 200);
    }
`

export const BtInfo = styled.button`
    width: 50px;

    border-radius: 50%;
    border: none;

    cursor: pointer;
    
    &:hover {
        background: rgba(200, 200, 200);
    }
`

export const Nome = styled.p`
    color: black;

    overflow-x: hidden;

    align-self: center;

    ${props => props.$lista = "width: 200px"}
`

export const Desc = styled.p`
    width: 50vw;
    height: 40vh;
    
    margin-top: 10px;

    word-wrap: break-word;
`
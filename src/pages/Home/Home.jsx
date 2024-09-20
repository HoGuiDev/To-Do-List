import React, { useState } from 'react'
import { Concluir, Excluir, Conteiner, 
Title, Buttons, Tarefa, List, AdmInput, 
AdmButton, AddButton, Info } from './HomeStyle'
import Modal from '../../componentes/Modal'
import InfoModal from '../../componentes/InfoModal'

export default function Home() {

  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      nome: 'tarefa1',
      estado: false
    },
    {
      id: 2,
      nome: 'tarefa2',
      estado: true
    }
  ])
  
  function Add() {
    /* Adiciona uma nova tarefa a lista */
    let getName = document.querySelector("#NomeDaTarefa")
    let newId = tarefas.length + 1
    let newEstado = false

    let obj = [{id: newId, nome: getName.value, estado: newEstado}]

    if (getName.value !== "") {
      setTarefas(tarefas.concat(obj))
      getName.value = ""
    } else {
      alert(`Escreva a tarefa no campo (Nome da Tarefa) para adicionar uma nova tarefa!`)
      
    }
  }

  function concluir(item) {
    /* Altera o estado atual da tarefa */
    let newTarefas = [...tarefas]
    newTarefas.map((a) => a.id === item? (a.estado = !a.estado): a)
    setTarefas(newTarefas)
  }

  function excluir(item) {
    /* Exclui a tarefa da lista */
    let resul = tarefas.filter((e) => e.id !== item)
    setTarefas(resul)
  }

  const [open, setOpen] = useState(false)

  const [openInfo, setOpenInfo] = useState(false)
  
  function modal() { 
    setOpen(true)
  }

  function fecharBt() {
    setOpen(false)
  }

  function Info() {
    setOpenInfo(true)
  }
  
  return (
    <div>
      <AddButton onClick={modal}>+</AddButton>
      <Conteiner>
        <Title>Lista de Tarefas</Title>
        <List>
          {tarefas.map((item) =>
            <Tarefa key={item.id}>
              <p>{item.nome}</p>
              <p>{item.estado === false ? "Em Adamento" : "Concluido"}</p>
              
              <Info onClick={Info}>i</Info>

              <InfoModal isOpen={openInfo}>
                <Buttons>
                  <Excluir onClick={() => excluir(item.id)}>Excluir</Excluir>
                  <Concluir onClick={() => concluir(item.id)}>Confirmar</Concluir>
                </Buttons>
              </InfoModal>
            </Tarefa>
          )}
        </List>
      </Conteiner>

      <Modal isOpen={open} fechar={fecharBt}>
        <AdmInput name="Nome" type='text' placeholder='Nome da Tarefa' id='NomeDaTarefa'></AdmInput>
        <AdmButton onClick={Add}>Adicionar</AdmButton>
      </Modal>
    </div>
  )
}

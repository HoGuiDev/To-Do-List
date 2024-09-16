import React, { useState } from 'react'
import { Concluir, Excluir, Conteiner, Title, Buttons, Tarefa, List, Adm, AdmInput, AdmButton } from './HomeStyle'

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

  return (
    <Conteiner>
      <Title>Lista de Tarefas</Title>
      <List>
        {tarefas.map((item) =>
          <Tarefa key={item.id}>
            <p>{item.nome}</p>
            <p>{item.estado === false ? "Em Adamento" : "Concluido"}</p>
            <Buttons>
              <Excluir onClick={() => excluir(item.id)}>&#10007;</Excluir>
              <Concluir onClick={() => concluir(item.id)}>&#10003;</Concluir>
            </Buttons>
          </Tarefa>
        )}
      </List>
      <Adm>
        <AdmInput name="Nome" type='text' placeholder='Nome da Tarefa' id='NomeDaTarefa'></AdmInput>
        <AdmButton onClick={Add}>Adicionar</AdmButton>
      </Adm>
    </Conteiner>

  )
}

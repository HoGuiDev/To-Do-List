import React, { useState } from 'react'
import {
  Concluir, Excluir, Conteiner,
  Title, Buttons, Tarefa, List, AdmInput,
  AdmButton, AddButton, BtInfo, Nome, Desc, AdmDesc
} from './HomeStyle'
import Modal from '../../componentes/Modal'
import InfoModal from '../../componentes/InfoModal'

export default function Home() {

  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      nome: 'Tarefa1',
      estado: false,
      desc: "Testando"
    },
    {
      id: 2,
      nome: 'Tarefa2',
      estado: true,
      desc: "asdwafsdgag"
    }
  ])

  function Add() {
    /* Adiciona uma nova tarefa a lista */
    let getName = document.querySelector("#NomeDaTarefa")
    let getDesc = document.querySelector("#DescTarefa")
    let newId = Math.round(Math.random() * 1000000)
    let newEstado = false
    let newDesc = getDesc.value !== ""? getDesc.value : "Não foi designado uma descrição para essa tarefa!"

    let obj = [{ id: newId, nome: getName.value, estado: newEstado, desc: newDesc }]

    if (getName.value !== "") {
      setTarefas(tarefas.concat(obj))
      getName.value = ""
      getDesc.value = ""
    } else {
      alert(`Escreva a tarefa no campo (Nome da Tarefa) para adicionar uma nova tarefa!`)

    }
  }

  function concluir(item) {
    /* Altera o estado atual da tarefa */
    let newTarefas = [...tarefas]
    newTarefas.map((a) => a.id === item.id ? (a.estado = !a.estado) : a)
    setTarefas(newTarefas)
  }

  function excluir(item) {
    /* Exclui a tarefa da lista */
    let resul = tarefas.filter((e) => e.id !== item.id)
    setTarefas(resul)
    setOpenInfo(false)
  }

  const [open, setOpen] = useState(false)

  const [openInfo, setOpenInfo] = useState(false)

  const [nome, setNome] = useState("")

  const [item, setItem] = useState([])

  const [desc, setDesc] = useState("")

  function modal() {
    setOpen(true)
  }

  function fecharBt() {
    setOpen(false)
  }

  function InfoOn(e) {
    let tarefaNome = e.nome
    let tarefaDesc = e.desc
    setOpenInfo(true)
    setNome(tarefaNome)
    setDesc(tarefaDesc)
    setItem(e)
  }

  function InfoOff() {
    setOpenInfo(false)
  }

  return (
    <div>
      <AddButton onClick={modal}>+</AddButton>

      <Conteiner>
        <Title>Lista de Tarefas</Title>
        <List>
          {tarefas.map((item) =>
            <Tarefa key={item.id} id={item.id}>
              <Nome $lista>{item.nome}</Nome>
              <p style={{alignSelf:'center'}}>{item.estado === false ? "Em Adamento" : "Concluido"}</p>

              <BtInfo onClick={() => InfoOn(item)}>i</BtInfo>

            </Tarefa>
          )}
        </List>
      </Conteiner>

      <InfoModal isOpen={openInfo} InfoFechar={InfoOff}>
        <Nome>Tarefa: {nome} </Nome>
        <Desc>Descrição: {desc} </Desc>
        <Buttons>
          <Excluir onClick={() => excluir(item)}>Excluir</Excluir>
          <Concluir onClick={() => concluir(item)}>Confirmar</Concluir>
        </Buttons>
      </InfoModal>

      <Modal isOpen={open} fechar={fecharBt}>
        <AdmInput type='text' placeholder='Nome da Tarefa' id='NomeDaTarefa'></AdmInput>
        <AdmDesc type='text' placeholder='Descrição aqui!' id='DescTarefa'></AdmDesc>
        <AdmButton onClick={Add}>Adicionar</AdmButton>
      </Modal>

    </div>
  )
}

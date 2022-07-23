let inputTitle = document.querySelector('.inputTitle')
let inputSelect = document.querySelector('.inputSelect')
const tarefaUl = document.querySelector('.tasks')

let button = document.querySelector('.addTask')
button.addEventListener('click', criarObjeto)

const tarefas = []

function criarObjeto() {
  let inputObjeto = document.querySelector('.inputTitle')
  let inputValor = document.querySelector('.inputSelect')
  let value = inputObjeto.value
  if (value == '') {
    return
  }
  let select = inputValor.value
  const tarefaObjeto = {}

  tarefaObjeto.task = `${value}`
  tarefaObjeto.status = `${select}`

  tarefas.push(tarefaObjeto)

  listarTarefas(tarefas, tarefaUl)

  inputObjeto.value = ''
}

function listarTarefas(tarefasArr, tarefasUl) {
  tarefasUl.innerHTML = ''
  for (let i = 0; i < tarefasArr.length; i++) {
    let tarefa = tarefasArr[i]
    let indiceAtual = i
    let card = criarCard(tarefa, indiceAtual)
    tarefaUl.append(card)
  }
}

listarTarefas(tarefas, tarefaUl)

function removerTarefas(event) {
  let btnRemover = event.target

  if (btnRemover.tagName == 'BUTTON') {
    let index = btnRemover.id

    tarefas.splice(index, 1)

    listarTarefas(tarefas, tarefaUl)
  }
}

tarefaUl.addEventListener('click', removerTarefas)

function criarCard(tarefa, indiceAtual) {
  let cardTask = document.createElement('div')
  tarefaUl.append(cardTask)
  let divBall = document.createElement('div')
  let p = document.createElement('p')
  let button = document.createElement('button')
  cardTask.append(divBall, p, button)

  if (tarefa.status == 'Baixa') {
    divBall.classList.add('statusGreen')
  } else if (tarefa.status == 'Média') {
    divBall.classList.add('statusOrange')
  } else divBall.classList.add('statusRed')

  cardTask.classList.add('cardTask')
  p.innerHTML = `${tarefa.task}`
  button.innerHTML = 'Excluir'
  button.classList.add('btnExcluir')
  button.id = indiceAtual
  return cardTask
}

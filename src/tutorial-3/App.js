let tasks = ['Я хочу сделать список задач']
const tasksContainer = document.querySelector('ul')
const inputEl = document.querySelector('input')
const addButton = document.querySelector('#add')


const handleClickRemove = (e) => {
  if (e.target.tagName === 'BUTTON') {
    const index = e.target.Id;
    tasks.splice(index, 1);
    render();
  } else return
}


const handleClickAdd = () => {
  if (inputEl.value === '') {
    alert('Введите задачу')
    return
  }
  tasks.push(inputEl.value);
  render();
  inputEl.value = '';
}


const render = () => {
  tasksContainer.textContent = ''
  tasks.map((task, i) => (
    tasksContainer.insertAdjacentHTML('beforeend', `<li>${task} <button id=${i}>X</button></li> `)))
}

tasksContainer.addEventListener('click', (e) => {
  handleClickRemove(e)
})

addButton.addEventListener('click', handleClickAdd)
render() 
const params = new URLSearchParams(location.search);
const id = params.get('id');

//get data from Local storage and convert it into Objects:
const tasks = JSON.parse(localStorage.getItem('tasks'))

const task = tasks[id];
console.log(task);



document.querySelector('.title').innerHTML = task.title;
document.querySelector('.description').innerHTML = task.description;
document.querySelector('.priority').innerHTML=task.priority
document.querySelector('.Created').innerHTML = task.createdAt
document.querySelector('.Due').innerHTML = task.dueDate;




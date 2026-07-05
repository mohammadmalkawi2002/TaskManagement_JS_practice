
const taskForm = document.forms['TaskForm'];
//console.log(taskForm);

//we want to get the data from local storage and store it in an array we must check if the data exists in local storage or not, if it does we will parse it and store it in an array, if not we will create an empty array:

let tasks = [];
if (localStorage.getItem('tasks') != null) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
}

taskForm.onsubmit = (event) => {
    event.preventDefault();
    //1- after submit we want to get the data from the form and store it in an object
    const task = {
        title: taskForm.title.value,
        description: taskForm.description.value,
        priority: taskForm.priority.value,
        dueDate: taskForm.dueDate.value,
        createdAt: new Date().toLocaleString()
    }
    //2-add the task to the tasks array and store it in local storage
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();


}

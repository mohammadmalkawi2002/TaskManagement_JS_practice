
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



//we want to display the data in the table::

const displayTasks = () => {
    const result = tasks.map((task, index) => {
        return `
                 <tr>
                     <td class="px-6 py-4 whitespace-nowrap">${task.title}</td>
                     <td class="px-6 py-4 whitespace-nowrap">${task.description}</td>
                     <td class="px-6 py-4 whitespace-nowrap">${task.priority}</td>
                     <td class="px-6 py-4 whitespace-nowrap">${task.dueDate}</td>
                     <td class="px-6 py-4 whitespace-nowrap">${task.createdAt}</td>
                     <td class="px-6 py-4 whitespace-nowrap">
                   <button
                         class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Details</button>
                     <button
                         class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
                          onclick="deleteTask(${index})">
                         Delete
                         </button>
                 </td>
                 </tr>`
    })

    //result is an array of strings, we want to join them together and display them in the table body:
    document.querySelector('.data').innerHTML = result.join('');
}

displayTasks();




const deleteTask = (index) => {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}
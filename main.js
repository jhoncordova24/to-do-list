const input = document.getElementById("taskInput");
const button = document.getElementById("addTaskButton");
const task = document.getElementById("taskList");

button.addEventListener("click", function () {
  const tasktesk = input.value;

  if (tasktesk.trim() === "") {
    alert("Por favor, ingresa una tarea");
    return;
  }

  const newtask = document.createElement("li");

  newtask.textContent = tasktesk;

  task.appendChild(newtask);

  input.value = "";
});

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
  const span = document.createElement("span");

  span.addEventListener("click", function () {
    span.parentElement.remove();
  });

  newtask.textContent = tasktesk;
  span.textContent = "X";

  newtask.appendChild(span);
  task.appendChild(newtask);

  input.value = "";
});

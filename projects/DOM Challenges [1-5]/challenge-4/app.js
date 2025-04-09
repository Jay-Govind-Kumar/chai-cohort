const a = document.getElementById("taskList");
const li = document.createElement("li");
const button = document.createElement("button");
button.textContent = "Delete";
button.classList.add("delete-button");

li.textContent = "Task 1";
li.appendChild(button);
li.classList.add("task-item");
a.appendChild(li);

const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");
const todoItemsContainer = document.getElementById("todo-items-container");

addBtn.addEventListener("click", () => {
  const todoValue = todoInput.value;
  if (todoValue) {
    const li = document.createElement("li");
    li.textContent = todoValue;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    delBtn.addEventListener("click", () => {
      todoItemsContainer.removeChild(li);
    });

    li.appendChild(delBtn);
    todoItemsContainer.appendChild(li);
  }
  todoInput.value = "";
});

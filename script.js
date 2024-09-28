let submitBtn = document.querySelector(".btn");
let Maain = document.querySelector(".mainn");

// Load tasks from local storage
document.addEventListener("DOMContentLoaded", loadTasks);

// Array to store tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Function to create a new task element
function createTaskElement(task) {
    let DoDiv = document.createElement("div");
    DoDiv.className = "Dos";

    let labelBox = document.createElement("label");

    let image = document.createElement("img");
    image.src = "https://e7.pngegg.com/pngimages/854/935/png-clipart-computer-icons-scalable-graphics-icon-design-delete-button-logo-sign-thumbnail.png";

    let uncheckBox = document.createElement("div");
    uncheckBox.className = "uncheck";
    let checkBox = document.createElement("div");
    checkBox.classList = "check hide";
    checkBox.innerText = "✓";

    if (task.completed) {
        checkBox.classList.remove("hide");  // Show check mark if task is completed
    }

    uncheckBox.append(checkBox);
    let textSpan = document.createElement("span");
    textSpan.className = "task-text";
    textSpan.innerText = task.text;

    if (task.completed) {
        textSpan.classList.add("line-through");  // Apply strike-through if completed
    }

    labelBox.append(uncheckBox);
    labelBox.append(textSpan);

    DoDiv.prepend(labelBox);
    DoDiv.append(image);

    // Toggle check/uncheck
    uncheckBox.addEventListener("click", function () {
        checkBox.classList.toggle("hide");
        textSpan.classList.toggle("line-through");

        // Update the task's completed status in local storage
        task.completed = !task.completed;
        updateTaskInLocalStorage(task);
    });

    // Remove task on delete button click
    image.addEventListener("click", function () {
        DoDiv.remove();
        removeTaskFromLocalStorage(task.text); // Remove from local storage
    });

    Maain.before(DoDiv);
}

// Add new task on submit
submitBtn.addEventListener("click", () => {
    let inputText = document.querySelector(".txt");
    let text = inputText.value;

    if (text.trim() !== "") {
        let newTask = { text: text, completed: false };  // Create task object
        createTaskElement(newTask);

        // Save the task to local storage
        tasks.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        inputText.value = ""; // Clear the input field
    } else {
        alert("Please enter some text.");
    }
});

// Load tasks from local storage
function loadTasks() {
    tasks.forEach(task => {
        createTaskElement(task);  // Add each task to the page
    });
}

// Remove task from local storage
function removeTaskFromLocalStorage(taskText) {
    tasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Update task's completed status in local storage
function updateTaskInLocalStorage(updatedTask) {
    tasks = tasks.map(task => task.text === updatedTask.text ? updatedTask : task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


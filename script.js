const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    const li = document.createElement("li");
    li.className = "task-item";

    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div>
            <button class="action-btn complete-btn">Selesai</button>
            <button class="action-btn delete-btn">Hapus</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
});

taskList.addEventListener("click", function (e) {
    const target = e.target;

    if (target.classList.contains("complete-btn")) {
        const li = target.parentElement.parentElement;
        const span = li.querySelector(".task-text");
        span.classList.toggle("completed");
    }

    if (target.classList.contains("delete-btn")) {
        const li = target.parentElement.parentElement;
        taskList.removeChild(li);
    }
});

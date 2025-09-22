const taskInput = document.querySelector("#input-task");
const addBtn = document.querySelector("#add-task");
const taskList = document.querySelector('#task-list');

addBtn.addEventListener('click', () => {
    const value = taskInput.value.trim();
    if (!value) return;

    // Create task container
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-item');

    // Task text
    const taskText = document.createElement('p');
    taskText.innerText = value;
    taskText.classList.add('task-text');

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('task-button');
    editBtn.onclick = () => {
        const input = document.createElement('input');
        input.type = 'text';
        input.value = taskText.innerText;
        input.classList.add('task-text');

        taskDiv.replaceChild(input, taskText);
        input.focus();

        // Save on Enter
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                taskText.innerText = input.value;
                taskDiv.replaceChild(taskText, input);
            }
        });

        // Save on blur
        input.addEventListener('blur', () => {
            taskText.innerText = input.value;
            taskDiv.replaceChild(taskText, input);
        });
    };

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('task-button');
    deleteBtn.onclick = () => taskDiv.remove();

    // Append elements
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(editBtn);
    taskDiv.appendChild(deleteBtn);
    taskList.appendChild(taskDiv);

    taskInput.value = '';
});

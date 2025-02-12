const taskInput = document.getElementById('taskInput');
        const addTaskBtn = document.getElementById('addTaskBtn');
        const taskList = document.getElementById('taskList');

        let tasks = [];

        addTaskBtn.addEventListener('click', addTask);

        function addTask() {
            const task = taskInput.value.trim();
            if (task === '') {
                alert('Please enter a task.');
                return;
            }

            tasks.push(task);
            taskInput.value = '';
            renderTasks();
        }

        function renderTasks() {
            taskList.innerHTML = '';

            tasks.forEach((task, index) => {
                const listItem = document.createElement('li');
                const taskText = document.createElement('span');
                taskText.textContent = task;

                const btnContainer = document.createElement('div');
                btnContainer.className = 'btn-container';

                const editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                editButton.className = 'edit-btn';
                editButton.onclick = () => editTask(index);

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.className = 'delete-btn';
                deleteButton.onclick = () => deleteTask(index);

                btnContainer.appendChild(editButton);
                btnContainer.appendChild(deleteButton);

                listItem.appendChild(taskText);
                listItem.appendChild(btnContainer);
                taskList.appendChild(listItem);
            });
        }

        function deleteTask(index) {
            tasks.splice(index, 1);
            renderTasks();
        }

        function editTask(index) {
            const newTask = prompt('Edit task:', tasks[index]);
            if (newTask !== null && newTask.trim() !== '') {
                tasks[index] = newTask.trim();
                renderTasks();
            }
        }

        document.addEventListener('DOMContentLoaded', renderTasks);
const app = () => {
  const taskInput = document.getElementById('new-task');
  const addButton = document.getElementsByTagName('button')[0];
  const incompleteTasksHolder = document.getElementById('incomplete-tasks');
  const completedTasksHolder = document.getElementById('completed-tasks');

  const createNewTaskElement = task => {
    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const label = document.createElement('label');
    const editInput = document.createElement('input');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    checkBox.type = 'checkBox';
    editInput.type = 'text';
    editButton.innerText = 'Edit';
    editButton.className = 'edit';
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete';

    label.innerText = task;

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
  };

  const bindTaskEvents = (taskListItem, checkBoxEventHandler) => {
    const checkBoxbindTaskEvents = taskListItem.querySelector(
      'input[type="checkbox"]'
    );
    const editButtonbindTaskEvents = taskListItem.querySelector('button.edit');
    const deleteButtonbindTaskEvents = taskListItem.querySelector(
      'button.delete'
    );
    editButtonbindTaskEvents.onclick = editTask;
    deleteButtonbindTaskEvents.onclick = deleteTask;
    checkBoxbindTaskEvents.onchange = checkBoxEventHandler;
  };

  const taskCompleted = function() {
    const listItemtaskCompleted = this.parentNode;
    completedTasksHolder.appendChild(listItemtaskCompleted);
    bindTaskEvents(listItemtaskCompleted, taskIncomplete);
  };

  const taskIncomplete = function() {
    const listItemtaskIncomplete = this.parentNode;
    incompleteTasksHolder.appendChild(listItemtaskIncomplete);
    bindTaskEvents(listItemtaskIncomplete, taskCompleted);
  };

  const addTask = () => {
    const listAddTask = createNewTaskElement(taskInput.value);
    incompleteTasksHolder.appendChild(listAddTask);
    bindTaskEvents(listAddTask, taskCompleted);
    taskInput.value = '';
  };

  const editTask = function() {
    const listItemeditTask = this.parentNode;
    const editInputeditTask = listItemeditTask.querySelector(
      'input[type=text]'
    );
    const labeleditTask = listItemeditTask.querySelector('label');
    const containsClass = listItemeditTask.classList.contains('editMode');

    if (containsClass) {
      labeleditTask.innerText = editInputeditTask.value;
    }

    editInputeditTask.value = labeleditTask.innerText;
    listItemeditTask.classList.toggle('editMode');
  };

  const deleteTask = function() {
    const listItemdeleteTask = this.parentNode;
    const ul = listItemdeleteTask.parentNode;
    ul.removeChild(listItemdeleteTask);
  };

  addButton.addEventListener('click', addTask);

  const incompleteTaskColl = incompleteTasksHolder.children;
  const completedTasksColl = completedTasksHolder.children;

  for (const item of incompleteTaskColl) {
    bindTaskEvents(item, taskCompleted);
  }

  for (const item of completedTasksColl) {
    bindTaskEvents(item, taskIncomplet);
  }
};

app();

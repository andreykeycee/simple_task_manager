window.onload = function() {
  const input = document.getElementById('task-input');
  const addButton = document.getElementById('add-button');
  const taskList = document.getElementById('task-list');
  const taskDiv = document.getElementById('task-div');

  function addTask() {
    if(input.value === '') {
      alert('please insert your task');
    } else {
      const task = document.createElement('li');
      const checkbox = document.createElement('input');
      const span = document.createElement('span');

      checkbox.type = 'checkbox';
      span.textContent = input.value;
      task.appendChild(checkbox);
      task.appendChild(span);
      // check existance of delete button
      let existDeleteButton = document.getElementById('delete-button');
      // if button not exist - create it
      if(existDeleteButton === null) {
        addDeleteButton();
      }
      taskList.appendChild(task);
      // crossline over completed task
      checkbox.addEventListener('click', function() {
        if(span.className === '') {
          span.className = 'crossline';
        } else {
          span.className = '';
        }
      });
      input.value = '';
    }
  }

  function addDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.id = 'delete-button';
    deleteButton.textContent = 'Clear';
    deleteButton.addEventListener('click', function() {
      taskList.innerHTML = '';
    })
    taskDiv.appendChild(deleteButton);
  }

  addButton.addEventListener('click', addTask);

  // able to add new task with enter
  input.addEventListener('keydown', function(e) {
    if(e.keyCode === 13) {
      // set enter to not submiting my form
      e.preventDefault();
      addTask();
    }
  });
}

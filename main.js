window.onload = function(){
  const input = document.getElementById('task-input');
  const addButton = document.getElementById('add-button');
  const taskList = document.getElementById('task-list');


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
      taskList.appendChild(task);
      input.value = '';
    }
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

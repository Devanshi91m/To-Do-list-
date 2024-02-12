/* SCRIPT FOR TO DO LIST PROJECT */ 

const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

addTask.addEventListener('click', function(){

   let task = document.createElement('div');
   task.classList.add('task');

   let li = document.createElement('li');
   li.innerText = inputTask.value;
   //need to append the new task with the list 
   task.appendChild(li);

   //create check and delete button 
   let checkButton = document.createElement("button");
   checkButton.innerHTML = '✓';
   checkButton.classList.add('checkTask');
   task.appendChild(checkButton);

   let deleteButton = document.createElement("button");
   deleteButton.innerHTML = '❌';
   deleteButton.classList.add('deleteTask');
   task.appendChild(deleteButton);

   if(inputTask.value === "")
   {
      alert('Please Enter a task ');
   }
   else{
      taskContainer.appendChild(task);
   }

   inputTask.value = "";

   checkButton.addEventListener('click', function(){

      checkButton.parentElement.parentElement.style.textDecoration = "line-through";
   });

   deleteButton.addEventListener('click', function(e){

      let target = e.target;
      target.parentElement.parentElement.remove();

   });
});
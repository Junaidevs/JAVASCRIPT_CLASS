//get the button 
const addButton = document.getElementById("addButton")

addButton.addEventListener("click", function () {
    const taskInput = document.getElementById("taskInput");

    const taskText = taskInput.value.trim();

    if (taskText=== "") {
        alert("please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");  
    


    const li = document.createElement("li");




    const deleteBtn= document.createElement("button");
deleteBtn.textContent = "Remove";

li.addEventListener('click', function () {
    
   li.style.textDecoration = 'line-through';
})

deleteBtn.addEventListener("click", function (){
    taskList.removeChild(li)
})

li. textContent = taskText;


window.location.href ="main.html";


})





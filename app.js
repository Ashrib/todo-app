var mainDiv = document.getElementById("main-container");
var title = document.createElement("h1");
title.appendChild(document.createTextNode("Todo App"));
mainDiv.appendChild(title);

var bodyDiv = document.createElement("div");
bodyDiv.setAttribute("id", "body-box");
mainDiv.appendChild(bodyDiv);

var inputsBox = document.createElement("div");
inputsBox.setAttribute("id", "inputs-box");
bodyDiv.appendChild(inputsBox);

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Add your new todo");
input.setAttribute("id", "user-input");
inputsBox.appendChild(input);

var add_btn = document.createElement("input");
add_btn.setAttribute("type", "button");
add_btn.setAttribute("id", "add-btn");
add_btn.setAttribute("value","Add");
add_btn.setAttribute("onClick","add()");
inputsBox.appendChild(add_btn);

var allTodoDiv = document.createElement("div");
allTodoDiv.setAttribute("id", "all-todoBox")
bodyDiv.appendChild(allTodoDiv);

var arrayOfData = [];
function add() {
    var getValue = input.value;
    getValue = getValue.replace(/\s\s+/g , " ");

    if(getValue === "" || getValue === " ") {
        alert("Please fill the input correctly!")
    }
    else{
        function Task(id , userInput, completed){
            this.id = id;
            this.userInput = userInput; 
            this.completed = completed;
        }
        var todo = new Task(arrayOfData.length, getValue, false);
        arrayOfData.push(todo);
        // console.log(arrayOfData);
        
        for(var i=0; i<arrayOfData.length; i++) {
            console.log(arrayOfData[i])
                //todo div
                var taskDiv = document.createElement("div");
                taskDiv.setAttribute("id", i);
                // todo text span
                var todoText = document.createElement("span");
                todoText.setAttribute("class", "todo-text");
                todoText.appendChild(document.createTextNode(arrayOfData[i].userInput));
                //done btn
                var tick_btn = document.createElement("button");
                tick_btn.appendChild(document.createTextNode("<"));
                tick_btn.setAttribute("id" , "done-btn");
                tick_btn.setAttribute("onClick" , "done(event)");
                //edit btn
                var edit_btn = document.createElement("button");
                edit_btn.appendChild(document.createTextNode("edit"));
                edit_btn.setAttribute("id" , "edit-btn");
                edit_btn.setAttribute("onClick" , "edit(event)");
                //delete btn
                var delete_btn = document.createElement("button");
                delete_btn.appendChild(document.createTextNode("del"));
                delete_btn.setAttribute("id" , "delete-btn");
                delete_btn.setAttribute("onClick" , "deletes(event)");
            }
            taskDiv.appendChild(todoText);
            taskDiv.appendChild(tick_btn);
            taskDiv.appendChild(edit_btn);
            taskDiv.appendChild(delete_btn);

        allTodoDiv.appendChild(taskDiv);
    
        document.getElementById("user-input").value = null;
    }
}

function done(event) {
    // console.log(event.target.parentNode);

    var completedTodo = event.target.previousSibling.textContent;
    
    console.log(completedTodo);

}
function deletes(event) {
    var deleteTodo = event.target.parentNode;
    deleteTodo.remove();
}
var editOne;
function edit(event) {
    var editTodo = event.target.parentNode.firstChild.innerText;
    input.value = editTodo;
    console.log(editTodo);
    editOne = event.target.parentNode

    var getUp = document.getElementById("update-btn");
    if(getUp){
        getUp.remove()
    }
        var update_btn = document.createElement("button");
        update_btn.innerHTML = "Update";
        update_btn.setAttribute("id", "update-btn");
        update_btn.setAttribute("onClick", "update()");
        inputsBox.appendChild(update_btn);
    
}
function update(event) {
    // console.log(event.target.parentNode)

    console.log(editOne)
}
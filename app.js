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
input.setAttribute("maxlength","25");
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
        
        for(var i=0; i<arrayOfData.length; i++) {
                //todo div
                var taskDiv = document.createElement("div");
                taskDiv.setAttribute("id", i);
                taskDiv.setAttribute("class", "todo");
                //compl ============================
                // var compDiv = document.createElement("div");
                // compDiv.setAttribute("id" , "comp-div");
                // var compText = document.createElement("div");
                // compText.setAttribute("id" , "comp-text");
                // compText.textContent = "Completed";
                // compDiv.appendChild(compText);
                // var compClose = document.createElement("div");
                // compClose.setAttribute("id" , "comp-close");
                // compClose.textContent = "X";
                // compDiv.appendChild(compClose);
                ///////////////============
                // todo text span
                var todoText = document.createElement("span");
                todoText.setAttribute("class", "todo-text");
                todoText.appendChild(document.createTextNode(arrayOfData[i].userInput));
                //all-btns
                var all_btns = document.createElement("div");
                all_btns.setAttribute("class", "all-btns");

                //done btn
                var tick_btn = document.createElement("button");
                var tickFont = document.createElement("i");
                tickFont.setAttribute("class" ,"fa-solid fa-check");
                tick_btn.appendChild(tickFont);
                tick_btn.setAttribute("id" , "done-btn");
                tick_btn.setAttribute("title" , "done");
                tick_btn.setAttribute("onClick" , "done(event)");
                //edit btn
                var edit_btn = document.createElement("button");
                var editFont = document.createElement("i");
                editFont.setAttribute("class" ,"fa-solid fa-pen-to-square");
                edit_btn.appendChild(editFont);
                edit_btn.setAttribute("id" , "edit-btn");
                edit_btn.setAttribute("title" , "edit");
                edit_btn.setAttribute("onClick" , "edit(event)");
                //delete btn
                var delete_btn = document.createElement("button");
                var deleteFont = document.createElement("i");
                deleteFont.setAttribute("class" ,"fa-solid fa-trash");
                delete_btn.appendChild(deleteFont);
                delete_btn.setAttribute("id" , "delete-btn");
                delete_btn.setAttribute("title" , "delete");
                delete_btn.setAttribute("onClick" , "deletes(event)");
            }
            all_btns.appendChild(todoText);
            all_btns.appendChild(tick_btn);
            all_btns.appendChild(edit_btn);
            all_btns.appendChild(delete_btn);
            // taskDiv.appendChild(compDiv);
            taskDiv.appendChild(todoText);
            taskDiv.appendChild(all_btns);

        allTodoDiv.appendChild(taskDiv);
    
        document.getElementById("user-input").value = null;
    }
    var getUp = document.getElementById("update-btn");
    if(getUp){
        getUp.remove();
    }
}

function done(event) {
    var completedTodo = event.target.parentNode.parentNode.previousSibling;
    completedTodo.style.textDecoration = "line-through";
    // console.log(completedTodo);

    // var compTodo = event.target.parentNode.parentNode.parentNode.firstChild;
    // compTodo.style.display = "flex"
    // console.log(compTodo)

    var getUp = document.getElementById("update-btn");
    if(getUp){
        getUp.remove();
    }
}
function deletes(event) {
    var deleteTodo = event.target.parentNode.parentNode.parentNode;//target that specific todo
    deleteTodo.remove();
    var getUp = document.getElementById("update-btn");
    if(getUp){
        getUp.remove();
    }
    // var delId = deleteTodo.getAttribute("id");
    // for(var i=0; i<arrayOfData.length; i++) {
    //     for(var key in arrayOfData[i]){
    //         if(arrayOfData[i][key].id === delId){
    //             arrayOfData.splice([i])
    //         }
    //         console.log(arrayOfData[i][key])
    //     }
    // }
    // console.log(arrayOfData)
    
}
var editOne;
function edit(event) {
    var editTodo = event.target.parentNode.parentNode.previousSibling.textContent;
    input.value = editTodo;
    editOne = event.target.parentNode.parentNode.parentNode;
    console.log(editOne);

    var getUp = document.getElementById("update-btn");
    if(getUp){
        getUp.remove();
    }
        var update_btn = document.createElement("button");
        update_btn.innerHTML = "Update";
        update_btn.setAttribute("id", "update-btn");
        update_btn.setAttribute("onClick", "update()");
        inputsBox.appendChild(update_btn);

}
function update(event) {
    
    console.log(editOne.firstChild.textContent)
    editOne.firstChild.textContent = input.value;
    //remove update-btn
    var getUp = document.getElementById("update-btn");
    getUp.remove();
    input.value = null;
}
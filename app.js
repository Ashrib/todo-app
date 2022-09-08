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

var submit_btn = document.createElement("input");
submit_btn.setAttribute("type", "button");
submit_btn.setAttribute("id", "submit-btn");
submit_btn.setAttribute("value","Submit");
submit_btn.setAttribute("onClick","submit()");
inputsBox.appendChild(submit_btn);

var allTodoDiv = document.createElement("div");
allTodoDiv.setAttribute("id", "all-todoBox")
bodyDiv.appendChild(allTodoDiv);

var arrayOfData = [];
function submit() {
    var getValue= input.value;
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
        console.log(arrayOfData);
        
        var taskDiv = document.createElement("div");
        for(var i=0; i<arrayOfData.length; i++) {
            taskDiv.setAttribute("id", i)
            for(var key in arrayOfData[i]){
                console.log(arrayOfData[i][key]);
                
                taskDiv.appendChild(document.createTextNode(arrayOfData[i][key]))
            }
            
        }
        allTodoDiv.appendChild(taskDiv);
    
        document.getElementById("user-input").value = null;
    }
}


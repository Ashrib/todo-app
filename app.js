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
        // console.log(arrayOfData);
        
        for(var i=0; i<arrayOfData.length; i++) {
            for(var key in arrayOfData[i].userInput){
                var taskDiv = document.createElement("div");
                taskDiv.setAttribute("id", i);
                var todoText = document.createElement("span");
                todoText.setAttribute("class", "todo-text");
                taskDiv.appendChild(todoText);

                // var tick_btn = document.createElement("button");
                // tick_btn.appendChild(document.createTextNode("<"))
                // taskDiv.appendChild(tick_btn);


                //console.log(arrayOfData[i].userInput[key]);
                
                todoText.appendChild(document.createTextNode(arrayOfData[i].userInput))
            }
            
        }
        allTodoDiv.appendChild(taskDiv);
    
        document.getElementById("user-input").value = null;
    }
}


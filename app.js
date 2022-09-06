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
input.setAttribute("id", "user-input");
inputsBox.appendChild(input);

var submit_btn = document.createElement("input");
submit_btn.setAttribute("type", "button");
submit_btn.setAttribute("value","Submit");
submit_btn.setAttribute("onClick","submit()");
inputsBox.appendChild(submit_btn);

var arrayOfData = [];
function submit() {
    var getValue= input.value;

    function Task(id , userInput){
        this.id = id;
        this.userInput = userInput, 
        this.completed = false
    }
    var obj = new Task(arrayOfData.length, getValue);
    arrayOfData.push(obj);

    console.log(arrayOfData);
    
    var objDiv = document.createElement("div");
    bodyDiv.appendChild(objDiv);
    var taskDiv = document.createElement("div");
    for(var i=0; i<arrayOfData.length; i++) {
        taskDiv.setAttribute("id", i)
        for(var key in arrayOfData[i]){
    console.log(arrayOfData[i][key]);
            
           // taskDiv.appendChild(document.createTextNode(arrayOfData[i].userInput))
        }
        
        
    }
    objDiv.appendChild(taskDiv);

    document.getElementById("user-input").value = null;
}



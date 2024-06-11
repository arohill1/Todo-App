const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("You must add your task here!");}
        else{
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            // add icon in span tag to add cross
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";   
            li.appendChild(span);
        }
        inputBox.value= "";
        saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    // to save data being entered
    localStorage.setItem("data",listContainer.innerHTML);

}

// to display data whenever site is refereshed
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
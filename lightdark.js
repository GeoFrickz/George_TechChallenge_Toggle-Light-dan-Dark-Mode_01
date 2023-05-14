let button = document.getElementById("button");
let checkbox = document.getElementById("toggle-light");
let label = document.getElementById("light-btn");
let title = document.getElementById("title");
let text = document.getElementById("text");
let back = document.getElementById("back");
let clickButton = document.getElementById("overlay");

function dark(){
    back.style.backgroundColor = "white";
    document.body.style.backgroundColor = "black";
    button.style.transform = "translate(148px, 0)";
    title.style.color = "white";
    title.innerText = "DARK";
    text.style.color = "white";
}

function light(){
    back.style.backgroundColor = "black";
    document.body.style.backgroundColor = "white";
    button.style.transform = "translate(0, 0)";
    title.style.color = "black";
    title.innerText = "LIGHT";
    text.style.color = "black";
}

overlay.addEventListener("click", function(){
    if (checkbox.checked){
        checkbox.checked = false;
        dark();
    }
    else{
        checkbox.checked = true;
        light();
    }
});
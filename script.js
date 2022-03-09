// ######################## QUESTÃO 1 ########################

const buttonQuestion1 = document.querySelector(".example1 button");

buttonQuestion1.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#32B72F";
});

buttonQuestion1.addEventListener("mouseout", function() {
    this.style.backgroundColor = "#42a5f5";
});

const imgQuestion1 = document.querySelector(".example1 img");

imgQuestion1.addEventListener("mouseover", function() {
    this.src = "./img/happy-cat.png";
});

imgQuestion1.addEventListener("mouseout", function() {
    this.src = "./img/sad-cat.jpg";
});

// mousedown
function mouseDown(event){
    event.style.backgroundColor = "#1ec5e5";
    event.innerHTML = "ME SOLTA!!!";
}

// mousedown
function mouseUp(event){
    event.style.backgroundColor="#D94A38";
    event.innerHTML="CLICA NEU!!!"
}

// keydown
const inputQuestion1 = document.querySelector(".keyboard-events input");

inputQuestion1.addEventListener("keydown", function(e) {
    console.log(e.key);

    document.querySelector(".keyboard-events .keys").innerHTML += `${e.key} || `;
});

// keyup
inputQuestion1.addEventListener("keyup", function(e) {
    if(e.key === "Enter"){
        console.log("Soltou o Enter");
    }
});


// ######################## QUESTÃO 2 ########################

const buttonQuestion2 = document.querySelector(".button");
const message = document.querySelector(".message");
buttonQuestion2.addEventListener("click", () => {
    message.classList.toggle("shown");
});

// ######################## QUESTÃO 5 ########################

//Imprime no console assim que uma tecla é apertada
addEventListener("keydown", function(event) {
    console.log(event);
});
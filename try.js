const text = document.querySelector(".title2");
const strText = text.textContent;
const splitText = strText.split("");
const loader = document.getElementById("pre-loader")

/*window.addEventListener("load", function() {
  loader.style.display = "none";
})*/

window.addEventListener('load', function(load) {
  window.removeEventListener('load', load, false);               
  setTimeout(function(){loader.style.display = 'none'},2000);

},false);


text.textContent = "";
for(let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>"+ splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}
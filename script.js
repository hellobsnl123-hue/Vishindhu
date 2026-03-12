let currentPage = 1;
const totalPages = 3;

function nextPage(){

if(currentPage < totalPages){

document.getElementById("page"+currentPage).classList.remove("active");

currentPage++;

document.getElementById("page"+currentPage).classList.add("active");

}

}

document.addEventListener("click",function(e){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💗";

heart.style.left=e.pageX+"px";

heart.style.top=e.pageY+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},1000);

});

function yesAnswer(){

alert("You just made my heart the happiest 🤍");

}

function noAnswer(){

alert("Nice try 😌 You are mine forever 🤍");

}

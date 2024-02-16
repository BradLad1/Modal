//variables
let openbtn = document.getElementById('open-btn');
let modalContainer =document.getElementById('modal-container');
let closebtn = document.getElementById('close-btn');


//Event Listeners
openbtn.addEventListener('click', function(){
    modalContainer.style.display = "block";
})

closebtn.addEventListener('click', function(){
    modalContainer.style.display = "none";
})

window.addEventListener('click', function(e){
    if(e.target === modalContainer) {
    modalContainer.style.display = "none";
    }
})
/*This code will get the modalcontainer and allow for us to click on to open it
and when to not close it and we can also click the window to close it */
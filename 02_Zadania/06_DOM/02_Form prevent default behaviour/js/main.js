//event prevent default - zeby wylaczyc standardowe dzialanie przycisku submit
document.getElementById("formularz").lastChild.previousSibling.addEventListener("click", function(e){
    e.preventDefault();
    console.log(document.getElementsByName("fname")[0].value);
    console.log(document.getElementsByName("lname")[0].value);
})
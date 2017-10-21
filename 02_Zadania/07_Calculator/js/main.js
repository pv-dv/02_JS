//Functions declaration
    
function push(button){
    document.getElementById("display").value += button;
}
    
function calculate(equation){
    var result = eval(equation);
    document.getElementById("display").value = result;
}




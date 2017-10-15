document.addEventListener("DOMContentLoaded", function () {



    console.log(document.getElementById("name"));
    console.log(document.getElementById("name").nextSibling);
    
    // Definition of error paragraph
    var errorParagraph = document.createElement("p");
    var parText = document.createTextNode("Error! Fill this field!");
    errorParagraph.appendChild(parText);
    errorParagraph.style.color = "#ff0000";



    document.getElementsByTagName("Form")[0].onsubmit = function(e){
        
        e.preventDefault();
        
        if(document.getElementById("name").value.length == 0){
            console.log("Error - puste imie")
            
            //put it not under specific element, just one under another
            
            document.getElementsByTagName("form").appendChild(errorParagraph);
//            document.getElementById("name").nextSibling.insertBefore(errorParagraph, document.getElementById("name").nextSibling);
    }

    };
});

document.addEventListener("DOMContentLoaded", function () {

    var validArray = ["Name field", "E-mail field"];
    var checkArray = ["name", "email"]
    var htmlString = "<ul>";

    document.getElementsByTagName("Form")[0].onsubmit = function (e) {
      
        e.preventDefault();

        for (var i = 0; i < checkArray.length; i++) {
            if (document.getElementById(checkArray[i]).value.length == 0) {
                htmlString += "<li>" + validArray[i] + " cannot be empty.</li>"
            }
        }
        if (document.getElementById("zgoda-marketingowa-1").checked == false) {
            htmlString += "<li>Consent checkbox cannot be empty. </li>"
        }
        htmlString += "</ul>";
        
        
        
        var elementNew = document.createElement("div");
        elementNew.setAttribute ("id", "error")
//        console.log(elementNew);
        elementNew.innerHTML = htmlString;
        console.log(document.getElementsByTagName("div").length);
        console.log(document.getElementsByTagName("div"));
        if(document.getElementsByTagName("div").length > 0){
//            document.body.lastChild.remove();
            
//            console.log(document.getElementById("error"));
//        document.getElementsByTagName("div").removeChild(document.getElementsByTagName("div")[0]);
//            console.log(document.getElementsByTagName("div"));
        }
        // KURWA MAC
        document.body.appendChild(elementNew);
        
//        return false;
    };
});
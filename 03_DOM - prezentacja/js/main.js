document.addEventListener( "DOMContentLoaded", function() {
//Above will prevent any of the below script to be executed before whole document will be loaded. General practice is that functions definitions are outside of this eventListener, but any of them are called in it.
    
    
    
    

// Will show whole index.html
console.log("*** Whole index.html");
console.log(document);



// Will show certain HTML tags
console.log("*** only HTML tag content");
console.log(document.documentElement);

console.log("*** only HEAD tag content");
console.log(document.head);

console.log("*** only BODY tag content");
console.log(document.body);



//------------------------------------------------------------------
// specific Tag hooks
console.log("-----------------------------------------------------");
console.log("                SPECIFIC HTML TAG HOOKS");
var firstDiv = document.getElementById("parFirst");
console.log("*** getElementById: whole tag with id = parFirst ");
console.log(firstDiv);


var links = document.getElementsByClassName("link");
console.log("*** getElementsByClassName: ALL tags with class name = link ");
console.log(links); //this is not an array - node list!
console.log(links[1]);


var tagLinks = document.getElementsByTagName("link");
console.log("*** getElementsByTagName: ALL tags with tag name = link ");
console.log(links); //this is not an array - node list!



//------------------------------------------------------------------
console.log("-----------------------------------------------------");
console.log("               SPECIFIC CSS SELECTORS");
// Specific CSS selectors
// Query Selector -> first found!
var divByID = document.querySelector("#sectionFirst");
console.log("*** querySelector: first tag with ID = sectionFirst");
console.log(divByID); 

var linkByClass = document.querySelector(".link");
console.log("*** querySelector: First! tag with class = .link");
console.log(linkByClass); 


//Query Selector ALL -> all elements
var allLinksByClass = document.querySelectorAll(".link");
console.log("*** querySelectorAll: ALL tags with class = .link");
console.log(allLinksByClass); //this is not an array - node list!


// Array methods will not work (reverse, etc), as the returned object is not an array  - it's a node list! It needs to be converted to an Array first
var arrayList = [];
for (var i=0; i<allLinksByClass.length; i++){
    arrayList[i] = allLinksByClass[i];
}

console.log("UNREVERSED ARRAY:");
console.log(arrayList);
arrayList.reverse();
console.log("REVERSED ARRAY:");
console.log(arrayList);






//------------------------------------------------------------------
console.log("-----------------------------------------------------");
console.log("                    DOM SELECTORS");

//Parent nodes
var elementParent = document.getElementById("parFirst").parentNode;
console.log("*** .parentNode: ONE parent of element with id = parFirst");
console.log(elementParent);

//Child nodes
var elementChild = document.getElementById("parSecond").childNodes;
console.log("*** .childNode: ALL children of element with id = parSecond");
console.log(elementChild); //#text = white spaces between div and p

//Children of an element
//.children returns all children of an element
console.log("*** .children: ALL children of firstDiv var = div#parFirst");
console.log(firstDiv.children);

//firstChild/lastChild
console.log("*** .firstChild: first child of firstDiv var = div#parFirst");
console.log(firstDiv.firstChild);

console.log("*** .lastChild: last child of firstDiv var = div#parFirst");
console.log(firstDiv.lastChild);


//nextSibling/prevSibling
console.log("*** .firstChild.nextSibling: next sibling of first child of firstDiv var = div#parFirst");
console.log(firstDiv.firstChild.nextSibling);

console.log("*** .lastChild: prev sibling of last child of firstDiv var = div#parFirst");
console.log(firstDiv.lastChild.previousSibling);  
//last child = a, but in fact there's text after it (Akapit link 2), so the last child will be #text. In order to get <a> - .previousSibling


// in order to check the node type - node types on dev mozilla
console.log(firstDiv.firstChild.nodeType);


// Dla kazdego dziecka first Div pobierz element (node, bo dziecmi diva sa kolejne nody), i sprawdz czy typ node = 1. jesli tak, wypisz element (czyli caly node)
firstDiv.childNodes.forEach(function(element){
    if(element.nodeType == 1){
        console.log(element);
    }
})






//------------------------------------------------------------------
console.log("-----------------------------------------------------");
console.log("          CREATION OF NEW DOM ELEMENTS");
//Creation of new nodes, adding text to the nodes, adding attributes
var btn = document.createElement("button");         // Creates new button element
var btnText = document.createTextNode("Click me!")  // Creates texts
var classAtr = document.createAttribute("class");   // Creates new class

classAtr.value = "btn";                             // Sets the attribte value
console.log(classAtr);


// Adding the newly created node
document.body.appendChild(btn);  // Creates a new button in body <button></button>
btn.appendChild(btnText);        // Adds the previously created text <button>Click me!</button>
btn.setAttributeNode(classAtr);  // Adds "class" attribute to the button <button class=''>Click me!</button>
btn.setAttribute("href", "#");   // Adds new attributes to the button <button href= '' id='' class=''>Click me!</button> -------> href='#'



// 1. Create new element (paragraph) -      var paragraph = document.createElement("p");
// 2. Add content? -                        var text = document.createTextNode("Lorem") 
// 3. Create new attribute (class) -        var classAtr = document.createAttribute("class");
// 3.1 Add some value to the attribute -    classAtr.value = "par1";
// 4. Anchor the new element in the doc -   document.body.appendChild(paragraph);
// 5. Add the created content -             paragraph.appendChild(text); 
// 6. Add the recently created attribute -  paragraph.setAttributeNode(classAtr);
// 7. Add any other attribute? -            paragraph.setAttribute("id", "firstPar");
// Result:  <p class="par1">Lorem</p> 
//          anchored as the last element of body tag



//Adding new paragraph after button
var par = document.createElement("p");
var parText = document.createTextNode("Lorem srolem");

document.body.appendChild(par);
par.appendChild(parText);
par.setAttribute("id", "paragraph_test")

document.getElementById("paragraph_test").style.backgroundColor = "#000000" 
document.getElementById("paragraph_test").style.color = "#ffffff" 



// Adding new event to the button
btn.onclick = function(){
    if(document.getElementById("paragraph_test").style.display == "none"){
       document.getElementById("paragraph_test").style.display = "block";
    } else {
       document.getElementById("paragraph_test").style.display = "none"; 
    }
}


// New button in specific document section
var btn_section = document.createElement("button");         
var btnText_section = document.createTextNode("Click me - section!")  
var classAtr_section = document.createAttribute("class");   

classAtr.value = "btn_section";                             
console.log(classAtr_section);

document.getElementById("sectionFirst").appendChild(btn_section);
btn_section.appendChild(btnText_section);        
btn_section.setAttributeNode(classAtr_section);  
btn_section.setAttribute("href", "#");   




//Inserting a second paragraph before
// Creation of new button
var btn_before = document.createElement("button");         
var btnText_before = document.createTextNode("Click me - before child!") 
btn_before.appendChild(btnText_before); 
// Anchoring the button
document.getElementById("parSecond").insertBefore(btn_before, document.getElementById("parSecond").firstElementChild);




// Replacigng a child
var input = document.createElement("input");
input.setAttribute("placeholder", "Please provide text");
document.body.appendChild(input);

var input_black = document.createElement("input");
input_black.style.backgroundColor = "#000";

document.body.replaceChild(input_black, input);




// multiple attributes assignment

var input_multi = document.createElement("input");
document.body.appendChild(input_multi);

var arrayAttributes = ["id", "class", "href"];
var arrayValues = ["dupa", "buttonz", "#"];

for (var i = 0; i < arrayAttributes.length; i++){   
    var j = ( Math.floor( Math.random() * arrayAttributes.length ));
    input_multi.setAttribute(arrayAttributes[j], arrayValues[j]);
}



// Removal of elements
// WIll remove the third link fro the SectionFirst
document.getElementById("sectionFirst").removeChild(document.getElementById("sectionFirst").childNodes[9]);




//-----------------------------------------------------------------
console.log("-----------------------------------------------------");
console.log("                   DOM MANIPULATION");

// innerHTML - injects provided HTML structure
var firstParagraph = document.getElementById("parFirst").firstElementChild;
console.log(firstParagraph.innerHTML);
firstParagraph.innerHTML = "<h1>Changed text!</h1>";

// innerText - injects value as text only
console.log(firstParagraph.innerText);
firstParagraph.innerText = "<h2>Changed text! Again!</h2>";


// OuterHTML
// Copies HTML structure to a string
// in the below example we are copying structure of parSecond and pasting it as HTML into firstParagraph
console.log(document.getElementById("parSecond").outerHTML);
var outer = document.getElementById("parSecond").outerHTML;
console.log(typeof outer);
//firstParagraph.innerHTML = outer;


//Attribute change
console.log(document.getElementById("parSecond").id);
document.getElementById("parSecond").id = "newID";
console.log(document.getElementById("newID").id);
document.getElementById("newID").id = "parSecond"; //REvert the cchange


//Change & list class
document.getElementById("parSecond").className = "dupa1 dupa2";
console.log(document.getElementById("parSecond").classList);

    
//Style
btn_section.setAttribute("id", "btn_section");
document.getElementById("btn_section").style.background = "red";
document.getElementById("btn_section").style.width = 400 + "px";

    

    
    
// EVENTS!!
//-----------------------------------------------------------------
console.log("-----------------------------------------------------");
console.log("               EVENTS ");
// most of the events will be handled by AddEventListener

// Add a new Listener for clicking in any area of parFirst div
document.getElementById("parFirst").addEventListener("click", isWorking);

//Remove Event LIstener
// Will remove the above listener
document.getElementById("parFirst").removeEventListener("click", isWorking);

    
// Remove event listener from HTML tag
document.getElementById("parSecond").removeEventListener("click", isWorking);   
// Impossible, as no event listener has been defined explicitly in JS - only via onclick event in HTML
    


document.getElementById( "link" ).addEventListener( 'click', function(e){
    if (!e) var e = window.event; // End of if  <--line applicable for IE only
    console.log(e);
    console.log(e.type);
}); 
    


//Prevent default
// Removes default object behaviour - link without href (#; no # - reloads whole page) shows top of page & logs "123". with prevented default just logs "123"
document.getElementById("dupa_link").addEventListener("click", function(e){
    console.log("123");
    e.preventDefault();
})

    
    
// STOP PROPAGATION
// by default JS will go from the inside element to the top, triggering all events encountered (assuming condition is met). to stop it use - stopPropagation();


    
    
    
    
    
    
    
}); //DOMContentLoaded



// Functions definition should be done outside of DOMContentLoaded Event!
function isWorking(){
    console.log("Works OK!");
}


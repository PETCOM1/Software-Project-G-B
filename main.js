//DOM Document Object Model
// The Document Object Model (DOM) is a programming interface for web documents. 
// It represents the page so that programs can change the document structure, style, and content. 
// The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.



const username = document.getElementById('username');
const heading  = document.getElementById('main-heading');



function changeColor(){

    heading.style.background = 'red';
heading.style.color = 'white';
}
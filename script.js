// let paragraph = document.querySelector("#myParagraph");

// let parent = paragraph.parentElement;

// let newParagraph = document.createElement('p');

// newParagraph.textContent = "This is a new paragraph.";

// parent.insertBefore(newParagraph, paragraph );

let list = document.querySelector('#myList');
let secondItem = document.querySelector('#second');

let newItem = document.createElement('li');
newItem.textContent = "First Item";

list.insertBefore(newItem, secondItem );
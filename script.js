const myLibrary = [];
const display = document.getElementById("display");
const newButton = document.getElementById("newBook");
const form = document.getElementById("newForm");
const formFields = "Title:<br><input type='text' id='title'><br>Author:<br><input type='text' id='author'><br>Pages:<br><input type='text' id='pages'><br>Read? (Y/N)<br><input type='text' id='readStatus'><br><br><button id=submit>Submit</button>"

const neuromancer = new Book("Neuromancer", "William Gibson", "300", "read");
const matilda = new Book("Matilda", "Roald Dahl", "200", "read");
const perksWallflower = new Book("The Perks of Being a Wallflower", "Stephen Chbosky", "300", "read");

let bookId = [];
let index = 0;

myLibrary.push(neuromancer, matilda, perksWallflower);

console.table(myLibrary);

bookDisplay();

// for(i = 0; i < myLibrary.length; i++) {
//     const bookTab = document.createElement("div");
//     bookTab.classList.add("tab");
//     bookTab.textContent = myLibrary[i].title;
//     bookTab.addEventListener("click", function() {

//     });
//     display.appendChild(bookTab);

// }

newButton.addEventListener("click", function() {
    const entryForm = document.createElement("div");
    entryForm.classList.add("newInfo");
    entryForm.innerHTML = formFields;
    form.appendChild(entryForm);
    const submitInfo = document.getElementById("submit");    

    submitInfo.addEventListener("click", function() {
        const bookTitle = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const pages = document.getElementById("pages").value;
        const readStatus = document.getElementById("readStatus").value;

        bookId[index] = new Book(bookTitle, author, pages, readStatus);
            console.table(bookId);

        myLibrary.push(bookId[index]);
            console.table(myLibrary);

        bookDisplay();
        
        index++;

    });

});

function bookDisplay() {
    while (display.firstChild) {
        display.removeChild(display.firstChild);

    }

    for(i = 0; i < myLibrary.length; i++) {
        const bookTab = document.createElement("div");
        bookTab.classList.add("tab");
        bookTab.textContent = myLibrary[i].title;
        bookTab.addEventListener("click", function() {
    
        });
        display.appendChild(bookTab);
    
    }
}

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

// function clearThis(x) {
//     x.splice(0, x.length);
// }
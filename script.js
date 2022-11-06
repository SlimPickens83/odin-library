const myLibrary = [];
const display = document.getElementById("display");
const newButton = document.getElementById("newBook");

const neuromancer = new Book("Neuromancer", "William Gibson", "300", "read");
const matilda = new Book("Matilda", "Roald Dahl", "200", "read");
const perksWallflower = new Book("The Perks of Being a Wallflower", "Stephen Chbosky", "300", "read");

myLibrary.push(neuromancer, matilda, perksWallflower);

console.table(myLibrary);

for(i = 0; i < myLibrary.length; i++) {
    const bookTab = document.createElement("div");
    bookTab.classList.add("tab");
    bookTab.textContent = myLibrary[i].title;
    bookTab.addEventListener("click", function() {

    });
    display.appendChild(bookTab);

}

newButton.addEventListener("click", function() {
    
});

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

// function addBookToLibrary() {
    
// }
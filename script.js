const myLibrary = [];
const display = document.getElementById("display");
const newButton = document.getElementById("newBook");
const form = document.getElementById("newForm");
const formFields = "Title:<br><input type='text' id='title'><br>Author:<br><input type='text' id='author'><br>Pages:<br><input type='text' id='pages'><br><label for='genre'>Genre:</label><select name='genre' id='genre'><option value='kids'>Children's Lit</option><option value='lit'>Literature</option><option value='scifi'>Science Fiction</option><option value='romance'>Romance</option><option value='mystery'>Mystery</option><option value='fantasy'>Fantasy</option><option value='nonf'>Non-fiction</option></select><br>Read? (Y/N)<br><input type='text' id='readStatus'><br><br><button id=submit>Submit</button>"

const neuromancer = new Book("Neuromancer", "William Gibson", "300", "scifi", "yes");
const matilda = new Book("Matilda", "Roald Dahl", "200", "kids", "yes");
const perksWallflower = new Book("The Perks of Being a Wallflower", "Stephen Chbosky", "300", "lit", "yes");

let bookId = [];
let index = 0;

myLibrary.push(neuromancer, matilda, perksWallflower);

console.table(myLibrary);

bookDisplay();

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
        const genre = document.getElementById("genre").value;

        if (bookTitle === "" || author === "" || pages === "" || readStatus === "") {
            alert("Please enter a value for all input fields.");

        } else {

            bookId[index] = new Book(bookTitle, author, pages, genre, readStatus);

            myLibrary.push(bookId[index]);
                console.table(myLibrary);

            bookDisplay();
        
            index++;

            entryForm.innerHTML = "";

        }

    });

});

// Function list

function Book(title, author, pages, genre, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.genre = genre
    this.readStatus = (readStatus === "yes" ? true : false);

}

function bookDisplay() {
    while (display.firstChild) {
        display.removeChild(display.firstChild);

    }

    for(i = 0; i < myLibrary.length; i++) {
        const bookTab = document.createElement("div");
        bookTab.classList.add("tab");

        let x;
        if(myLibrary[i].readStatus === true) {
            x = "Yes";
        } else if (myLibrary[i].readStatus === false) {
            x = "No";
        }

        bookTab.innerHTML = `<img/><div><span class="entryTitle">${myLibrary[i].title}</span><br><span class="entryBody">${myLibrary[i].author}<br>${myLibrary[i].pages} pages<br>Read? ${x}</span></div><div id="buttons"><button id="read${i}">Change read status</button><button id="remove${i}">Remove</button></div>`;
        bookTab.setAttribute("id", `${i}`);
        genrePic(bookTab, myLibrary[i].genre);
        display.appendChild(bookTab);

        let delBook = document.getElementById(`remove${i}`);
        delBook.addEventListener("click", function() {
            let indexValue = bookTab.getAttribute("id");
            myLibrary.splice(indexValue, 1);
            console.table(myLibrary);
            bookDisplay();
        });

        let isRead = document.getElementById(`read${i}`);
        let y = myLibrary[i].readStatus;
        let z = i;
        let statusUpdate;

        isRead.addEventListener("click", function() {
            
            if(y === true) {
                statusUpdate = false;
            } else if(y === false) {
                statusUpdate = true;
            }
            
            changeReadStatus(z, statusUpdate);
            bookDisplay();

        });

    }

}

function changeReadStatus(index, newStatus) {
    myLibrary[index].readStatus = newStatus;
}

function genrePic(tab, genre) {
    const img = document.createElement("img");

	if (genre === "kids") {
		img.src = 'images/kids_icon.png';
	} else if (genre === "scifi") {
		img.src = 'images/scifi_icon.png';
	} else if (genre === "lit") {
		img.src = 'images/literature_icon.png';
	} else if (genre === "nonf") {
		img.src = 'images/nonfiction_icon.png';
	} else if (genre === "mystery") {
		img.src = 'images/mystery_icon.png';
	} else if (genre === "romance") {
		img.src = 'images/romance_icon.png';
	} else if (genre === "fantasy") {
        img.src = 'images/fantasy_icon.png';
    }

    tab.appendChild(img);

}
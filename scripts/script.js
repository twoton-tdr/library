let myLibrary = [];

const mainContent = document.querySelector(".main-content");
let isRemoving = false;
class Book {
    constructor(name, author, genre){
        this.name = name;
        this.author = author;
        this.genre = genre;
        this["read"];
    }
    newCard(){
        const bookCard = document.createElement('div');
        bookCard.classList.add("book-card");
        mainContent.appendChild(bookCard);

        const bookDetails = document.createElement("ul");
        bookDetails.classList.add("book-details");
        bookCard.appendChild(bookDetails);

        const bookName = document.createElement("li");
        bookName.classList.add("book-name");
        bookDetails.appendChild(bookName)
        bookName.textContent = this.name;

        const bookCover = document.createElement("li")
        bookCover.classList.add("book-cover");
        bookDetails.appendChild(bookCover);
        const bookCoverImage = document.createElement("div");
        bookCoverImage.classList.add("img");
        bookCover.appendChild(bookCoverImage);

        const bookAuthor = document.createElement("li");
        bookAuthor.classList.add("author");
        bookDetails.appendChild(bookAuthor);
        bookAuthor.textContent = "Author: ";
        const bookAuthorSpan = document.createElement("span");
        bookAuthorSpan.classList.add("author-name");
        bookAuthor.appendChild(bookAuthorSpan);
        bookAuthorSpan.textContent = this.author;

        const bookgenre = document.createElement("li")
        bookgenre.classList.add("genre");
        bookDetails.appendChild(bookgenre);
        bookgenre.textContent = "Genre: "
        const bookGenreSpan = document.createElement("span");
        bookGenreSpan.classList.add("genre-name");
        bookgenre.appendChild(bookGenreSpan);
        bookGenreSpan.textContent = this.genre;

        const readStatus = document.createElement("li");
        readStatus.classList.add("read-status");
        bookDetails.appendChild(readStatus);
        readStatus.textContent = "Read Status: ";
        const statusSelect = document.createElement("select");
        statusSelect.id = "read-select";
        statusSelect.name = "read status";
        readStatus.appendChild(statusSelect);

        const notStarted = document.createElement("option");
        notStarted.value = "notstarted";
        notStarted.textContent = "Not yet Started";
        statusSelect.appendChild(notStarted);

        const ongoing = document.createElement("option");
        ongoing.value = "ongoing";
        ongoing.textContent = "Ongoing";
        statusSelect.appendChild(ongoing);

        //storing read status
        statusSelect.addEventListener("click",()=>{
            this.read=statusSelect.value;
        });

    }
}


const dialog = document.querySelector("dialog");


const addButton = document.querySelector(".sidebar-add");
addButton.addEventListener("click", ()=>{
    dialog.showModal();
    isRemoving = true;
    removeButton();
});

const confirmButton = document.querySelector("dialog button");
confirmButton.addEventListener('click', addNewBook)

function addNewBook(e) {
    e.preventDefault();
    let bookName = document.querySelector("#book_name");
    bookName = bookName.value;

    let authorName = document.querySelector("#author_name");
    authorName = authorName.value;

    let genre = document.querySelector("#genre_n");
    genre = genre.value;

    window[bookName] = new Book(bookName, authorName, genre); //creating global variable containing content inside the bookName
    window[bookName].newCard();


    myLibrary.push(window[bookName]);
    dialog.close();
    document.querySelector("dialog form").reset();
}





//removing function
const removeBtn = document.querySelector(".sidebar-remove");
removeBtn.addEventListener("click",removeButton);


function removeButton(){

    isRemoving = !isRemoving;

    const bookremove = document.querySelectorAll(".book-card");
    const bookSelect = document.querySelectorAll(".book-details");

    if(isRemoving){

        for(let b=0; b<bookSelect.length;b++){
        
            bookSelect[b].classList.add("book-select"); // gives blur (opacity to card)
    
        }

        for(let i=0;i<bookremove.length;i++){


            bookremove[i].classList.add("book-remove"); //to add select icon
    
            bookremove[i].addEventListener("click",removeBook);
        }

    }
    else{
        for(let b=0; b<bookSelect.length;b++){
        
            bookSelect[b].classList.remove("book-select"); // gives blur (opacity to card)
    
        }

        for(let i=0;i<bookremove.length;i++){


            bookremove[i].classList.remove("book-remove"); //to add select icon
    
            bookremove[i].removeEventListener("click",removeBook)
        }
    }

}

function removeBook(e){

    const bookName = e.target.querySelector(".book-name").textContent;

    for(let k = 0; k < myLibrary.length;k++){
        
        if(bookName === myLibrary[k].name){
            myLibrary.splice(k,1); //removes the data from the array
            e.target.remove(); //remove the dom containing the deleted book
        }
    }
}
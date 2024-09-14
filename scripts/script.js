let myLibrary = [];

const mainContent = document.querySelector(".main-content");

function Book(name, author, genre) {
    this.name = name;
    this.author = author;
    this.genre = genre;
}

Book.prototype.newCard = function() {
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

} 

const dialog = document.querySelector("dialog");


const addButton = document.querySelector(".sidebar-add");
addButton.addEventListener("click", ()=>{dialog.showModal();});

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

    console.log(window[bookName])

    myLibrary.push(window[bookName]);
    dialog.close();
    document.querySelector("dialog form").reset();
    console.log(myLibrary);
}

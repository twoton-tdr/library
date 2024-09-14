let myLibrary = [];

function Book(name, author, genre) {
    this.name = name;
    this.author = author;
    this.genre = genre;
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


    console.log(window[bookName])

    myLibrary.push(window[bookName]);
    dialog.close();
    document.querySelector("dialog form").reset();
    console.log(myLibrary);
}

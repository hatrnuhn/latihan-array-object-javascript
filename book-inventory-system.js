const books = [];
function addBook(title, author, genre, price, availability) {
    const newBook = {
        title: title,
        author: author,
        genre: genre,
        price: price,
        availability: availability
    };

    books.push(newBook);  
}

function updateBook(title, newDetails){
    const bookIndex = books.findIndex(book => book.title === title);
    if (bookIndex !== -1) {
        books[bookIndex] = { ...books[bookIndex], ...newDetails };
        console.log("Detail buku berhasil diperbarui.");
    } else {
        console.log("Buku tidak ditemukan.");
    }
}

function searchByAuthor(author) {
    let result = books.filter(book => book.author === author);
    if (result.length > 0) {
        console.log("Buku oleh " + author + ":");
        console.log(result);
    } else {
        console.log("Tidak ada buku yang ditemukan oleh " + author);
    }
}

function searchByGenre(genre) {
    let result = books.filter(book => book.genre === genre);
    if (result.length > 0) {
        console.log("Buku dalam genre " + genre + ":");
        console.log(result);
    } else {
        console.log("Tidak ada buku yang ditemukan dalam genre " + genre);
    }
}

function displayAvailableBooks() {
    let availableBooks = books.filter(book => book.availability);
    if (availableBooks.length > 0) {
        console.log("Buku Tersedia:");
        console.log(availableBooks);
    } else {
        console.log("Tidak ada buku yang tersedia.");
    }
}

addBook("Laskar Pelangi", "Andrea Hirata", "Fiksi", 35000, true);
addBook("Ayat-ayat Cinta", "Habiburrahman El Shirazy", "Romance", 45000, true);
addBook("Perahu Kertas", "Dee Lestari", "Fiksi", 42000, false);

updateBook("Perahu Kertas", { price: 50000 });

searchByAuthor("Andrea Hirata");
searchByGenre("Fiksi");

displayAvailableBooks();
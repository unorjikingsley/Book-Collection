/* eslint-disable no-use-before-define */

const list = document.querySelector('.list');
const form = document.querySelector('.form');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
let storedBooks = [];

function displayBookData() {
  list.innerHTML = '';
  storedBooks.forEach((data, index) => {
    const classBook = document.createElement('div');
    classBook.classList.add('class-book');
    const par = document.createElement('p');
    par.textContent = `${data.title} by ${data.author}`;
    const btnRemove = document.createElement('button');
    btnRemove.textContent = 'Remove';
    btnRemove.addEventListener('click', () => {
      removeBook(index);
    });
    classBook.appendChild(par);
    classBook.appendChild(btnRemove);
    list.appendChild(classBook);
  });
}

function addBook() {
  const newBook = {
    title: title.value.trim(),
    author: author.value.trim(),
  };

  if (!newBook.title || !newBook.author) {
    return;
  }
  storedBooks.push(newBook);
  saveBooks(storedBooks);
  displayBookData();
  title.value = '';
  author.value = '';
}

function removeBook(index) {
  storedBooks.splice(index, 1);
  saveBooks(storedBooks);
  displayBookData();
}

function saveBooks(book) {
  localStorage.setItem('bookInfo', JSON.stringify(book));
}

function loadBooks() {
  const storedBooksStr = localStorage.getItem('bookInfo');
  if (storedBooksStr) {
    storedBooks = JSON.parse(storedBooksStr);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBook();
});

loadBooks();
displayBookData();

// let bookCollection = [];

// function displayBooks() {
//   const bookList = document.getElementById('book-list');
//   bookList.innerHTML = '';
//   bookCollection.forEach((book) => {
//     const bookDiv = document.createElement('div');
//     bookDiv.className = 'book';
//     const titleHeading = document.createElement('h2');
//     titleHeading.innerText = book.title;
//     const authorPara = document.createElement('p');
//     authorPara.innerText = `By ${book.author}`;
//     const removeButton = document.createElement('button');
//     removeButton.innerText = 'Remove';
//     removeButton.onclick = () => {
//       removeBook(book.title);
//     };
//     bookDiv.appendChild(titleHeading);
//     bookDiv.appendChild(authorPara);
//     bookDiv.appendChild(removeButton);
//     bookList.appendChild(bookDiv);
//   });
// }

// const addBook = () => {
//   const titleInput = document.getElementById('title');
//   const authorInput = document.getElementById('author');
//   const newBook = {
//     title: titleInput.value,
//     author: authorInput.value,
//   };
//   bookCollection.push(newBook);
//   displayBooks();
//   titleInput.value = '';
//   authorInput.value = '';
// };

// function removeBook(title) {
//   bookCollection = bookCollection.filter((book) => book.title !== title);
//   displayBooks();
// }

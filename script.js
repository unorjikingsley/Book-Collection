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

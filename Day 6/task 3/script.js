const books = [
    { id: 1, title: "Book One", author: "Author One", year: 2020 },
    { id: 2, title: "Book Two", author: "Author Two", year: 2019 },
    
  ];
  const searchInput = document.getElementById('searchInput');
  const booksList = document.getElementById('booksList');
  const noResultsMessage = document.getElementById('noResultsMessage');
  function highlightText(text, query) {
    const regex = new RegExp(query, 'gi');
    return text.replace(regex, match => `<span class="highlight">${match}</span>`);
  }
  function displayBooks(books) {
    booksList.innerHTML = '';
    noResultsMessage.style.display = 'none';
    if (books.length === 0) {
      noResultsMessage.style.display = 'block';
    } else {
      books.forEach(book => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <div>Title: ${highlightText(book.title, searchInput.value)}</div>
          <div>Author: ${highlightText(book.author, searchInput.value)}</div>
        `;
        booksList.appendChild(listItem);
      });
    }
  }
  function searchBooks(query) {
    const filteredBooks = books.filter(book => {
      return book.title.toLowerCase().includes(query.toLowerCase()) ||
             book.author.toLowerCase().includes(query.toLowerCase());
    });
    displayBooks(filteredBooks);
  }
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    searchBooks(query);
  });
  
  displayBooks(books);
  
  
  
  
  
  
  
  
  
  
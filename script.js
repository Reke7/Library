document.addEventListener('DOMContentLoaded', function(){

    const newBook = getElementById('newBook');

    const myLibrary = [
    ];
    
    // Function to handle form submission
    function Book(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        const author = document.getElementById('author').value;
        const title = document.getElementById('title').value;
        const numberOfPages = document.getElementById('numberOfPages').value;
        const isRead = document.getElementById('isRead').checked;

        const book = {
            author,
            title,
            numberOfPages,
            isRead: isRead ? 'Yes' : 'No',
        };

        myLibrary.push(book);

        // Clears out the values in the form
        document.getElementById('author').value = '';
        document.getElementById('title').value = '';
        document.getElementById('numberOfPages').value = '';
        document.getElementById('isRead').checked = false;


        // Updates the table with the new book
        addBookToLibrary();
    }
    
    // Add an event listener to the form's submit event
    const form = document.getElementById('bookForm');
    form.addEventListener('submit', Book);
    
    
    function addBookToLibrary()
    {
        const table = document.getElementById('books');
        const tbody = table.getElementsByTagName('tbody')[0];
    
        // Loops through the Library Array in order to get the books informations and display them in the table
        myLibrary.forEach(book => {
            const row = tbody.insertRow();
            for (const key in book){
                const cell = row.insertCell();
                cell.textContent = book[key];
            }
        });
    }
    
    // This function will display the initial books
    addBookToLibrary();
})


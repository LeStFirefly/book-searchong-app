export default class BookService {
    _apiBase = new URL('http://openlibrary.org/search.json');

    async getBooksByTitle(title) {
        const bookURL = this._apiBase.searchParams.set('title', title);
        
        const result = await fetch(bookURL);

        if (!result.ok) {
            throw new Error(`Could not fetch ${bookURL}, recieved ${result.status}`);
        }

        return await result.json();
    }

    async getCoverByISBN(isbn) {
        const coverURL = (`http://covers.openlibrary.org/b/isbn/${isbn}-S.jpg`);

        const cover = await fetch(coverURL);

        if (!cover.ok) {
            throw new Error(`Could not fetch ${coverURL}, recieved ${cover.status}`);
        }

        return await cover.json();
    }

    async getBook(isbn) {
        const book = await fetch(`https://openlibrary.org/isbn/${isbn}`)

        return this._transformBook(book);
    }

    isEmpty(data) {
        if (data) {
            return data
        } else {
            return 'No data'
        }
    }

    _transformBook = (book) => {
        return {
            isbn: this.isEmpty(book.isbn),
            title: this.isEmpty(book.title),
            authorName: this.isEmpty(book.author_name),
            publishYear: this.isEmpty(book.publish_year),
            description: this.isEmpty(book.description)
        }
    }

    
}
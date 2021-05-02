export default class BookService {
    _apiBase = new URL('ВПИСАТЬ URL API');

    async getBookList(name) {
        const bookURL = this._apiBase.searchParams.set('query', name);
        
        const result = await fetch(bookURL);

        if (!result.ok) {
            throw new Error(`Could not fetch ${bookURL}, recieved ${result.status}`);
        }

        return await result.json(); // await ?
    }

    async getBook(isbn) {
        const book = await fetch(`url книги по ${isbn}`)

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
            // another info
        }
    }

    
}
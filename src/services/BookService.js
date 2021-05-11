export default class BookService {
    
    async getBooksByTitle(title) {
        const bookURL = new URL('http://openlibrary.org/search.json');
        bookURL.searchParams.set('title', title);

        const result = await fetch(bookURL);

        if (!result.ok) {
            throw new Error(`Could not fetch ${bookURL}, recieved ${result.status}`);
        }

        let jsonResult = await result.json();

        let filterResult = jsonResult.docs.filter( item => item.key && item.has_fulltext);
        let transformResult = filterResult.map( book => this._transformBook(book));

        return transformResult;
    }

    async getBookByKey(key) {
        const result = await fetch(`https://openlibrary.org${key}.json`);

        return await result.json();
    }

    _transformBook = (book) => {
        return {
            isbn: book.isbn,
            key: book.key,
            has_fulltext: book.has_fulltext,
            title: book.title,
            author_name: book.author_name,
            first_publish_year: book.first_publish_year
        }
    }
}
const bookListLoaded = (newBookList) => {
    return {
        type: 'BOOK_LIST_LOADED',
        payload: newBookList
    };
};

const bookListError = () => {
    return {
        type: 'BOOK_LIST_ERROR'
    };
};

const updateSearch = (search) => {
    return {
        type: 'UPDATE_SEARCH',
        payload: search
    };
};

const removeBooks = () => {
    return {
        type: 'REMOVE_BOOKS'
    };
}

export {
    bookListLoaded,
    bookListError,
    updateSearch,
    removeBooks
}
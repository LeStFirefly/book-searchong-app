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

const getInfoAboutBook = (id) => {
    return {
        type: 'GET_INFO_ABOUT_BOOK',
        payload: id
    }
}

export {
    bookListLoaded,
    bookListError,
    getInfoAboutBook
}
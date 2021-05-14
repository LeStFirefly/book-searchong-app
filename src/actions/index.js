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

const changePage = (page) => {
    return {
        type: 'CHANGE_PAGE',
        payload: page
    }
}

export {
    bookListLoaded,
    bookListError,
    updateSearch,
    changePage
}
const initialState = {
    searchQuery: '',
    books: [],
    loading: true,
    error: false,
    pages: 1,
    currentPage: 1
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SEARCH':
            return {
                ...state,
                searchQuery: action.payload,
                loading: true,
                error: false,
                books: []
            };
        case 'BOOK_LIST_LOADED':
            const booksQuantity = action.payload.length;
            const pages = Math.ceil(booksQuantity/10);
            return {
                ...state,
                books: action.payload,
                pages: pages,
                currentPage: 1,
                loading: false,
                error: false,
            };
        case 'BOOK_LIST_ERROR':
            return {
                ...state,
                loading:false,
                error: true
            };
        case 'CHANGE_PAGE':
            return {
                ...state,
                currentPage: action.payload
            };
        default:
            return state;
    }
}

export default reducer;
const initialState = {
    searchQuery: '',
    books: [],
    loading: true,
    error: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOK_LIST_LOADED':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: false,
            };
        case 'BOOK_LIST_ERROR':
            return {
                ...state,
                loading:false,
                error: true
            };
        case 'UPDATE_SEARCH':
            return {
                ...state,
                searchQuery: action.payload,
                loading: true,
                error: false,
                books: []
            };
        case 'REMOVE_BOOKS':
        return {
            ...state,
            books: [],
        };
        default:
            return state;
    }
}

export default reducer;
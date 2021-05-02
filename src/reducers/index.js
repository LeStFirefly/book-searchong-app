const initialState = {
    bookList: [],
    loading: true,
    error: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOK_LIST_LOADED':
            return {
                ...state,
                bookList: action.payload,
                loading: false,
                error: false
            };
        case 'BOOK_LIST_ERROR':
            return {
                ...state,
                loading:false,
                error: true
            };
        case 'GET_INFO_ABOUT_BOOK': // скорее всего не понадобится
            return {
                ...state,
            };
        default:
            return state;
    }
}

export default reducer;
import React from 'react';

import './BookInfo.sass';

const BookInfo = (book) => {
    const {name, isbn} = book;

    return (
        <div className='bookFullInfo'>
            {name}
            {isbn}
        </div>        
    )
};

export default BookInfo;
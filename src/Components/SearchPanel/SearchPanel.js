import React from 'react';
import { Button } from 'reactstrap';

import './SearchPanel.sass';

const SearchPanel = () => {
   
    return (
        <div className='searchPanel'>
            <input 
                className = 'form-control search-input'
                type = 'text'
                placeholder = 'Введите название книги'
            />
            <Button color="info">Найти</Button>
        </div>
    )
};

export default SearchPanel;
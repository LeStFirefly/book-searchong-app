import React from 'react';
import AppHeader from '../AppHeader/';
import SearchPanel from '../SearchPanel/';
import BookList from '../BookList';


const SearchModule = () => {
    return(
        <section className='searchModule container'>
            <AppHeader/>
            <SearchPanel/>
            <BookList />
        </section>
    )
}

export default SearchModule;
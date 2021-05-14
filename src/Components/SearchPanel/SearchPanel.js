import React, {Component} from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bookListLoaded, bookListError, updateSearch} from '../../actions';
import HOC from '../HOC/';

import './SearchPanel.sass';

class SearchPanel extends Component {
    onClickSearchButton = async () => {
        const {updateSearch} = this.props;

        const input = document.getElementById('searchInput');
        await updateSearch(input.value);
        await this.updateBooks();
    }
    
    onEnter = async (e) => {
        const {updateSearch} = this.props;

        if (e.keyCode === 13) {
            await updateSearch(e.target.value);
            await this.updateBooks();
        }
    }

    updateBooks = () => {
        const {BookService, searchQuery} = this.props;

        BookService.getBooksByTitle(searchQuery)
            .then(res => this.props.bookListLoaded(res))
            .catch(() => this.props.bookListError());
    }

    render() {
        return (
            <div className='searchPanel'>
                <input
                    id = 'searchInput' 
                    className = 'form-control search-input'
                    type = 'text'
                    placeholder = 'Введите название книги'
                    onKeyDown = {(e) => this.onEnter(e)}                  
                />
                <Button color="info"
                    onClick={() => this.onClickSearchButton()}>
                    Найти</Button>
            </div>
        )
    }

};

const mapStateToProps = (state) => {
    return {
        books: state.books,
        searchQuery: state.searchQuery,
    }
}

const mapDispatchToProps = {
    bookListLoaded,
    bookListError,
    updateSearch
}

export default HOC()(connect(mapStateToProps, mapDispatchToProps)(SearchPanel));

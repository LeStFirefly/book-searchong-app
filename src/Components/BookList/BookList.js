import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bookListLoaded, bookListError, removeBooks, updateSearch} from '../../actions/';
import BookListItem from '../BookListItem';
import PaginationPanel from '../PaginationPanel';
import Spinner from '../Spinner/';
import Error from '../Error/';
import HOC from '../HOC/';

import './BookList.sass';

class BookList extends Component{

    componentDidMount() {
        if (this.props.searchQuery === '') {
            return <div>Что ищем сегодня?</div>
        }
    }

    componentDidUpdate(prevState) {
/*         if (this.props.searchQuery !== prevState.searchQuery) {
            this.updateBooks();
        } */
        if (this.props.books !== prevState.books) {
            this.updateBooks();
        }
    }

    updateBooks = () => {
        const {BookService, searchQuery} = this.props;

        BookService.getBooksByTitle(searchQuery)
            .then(res => this.props.bookListLoaded(res))
            .catch(() => this.props.bookListError());
    }

    renderBooks = () => {
        const {books} = this.props;
        return(
            books.map( (item) => {
                let isbn = Array.isArray(item.isbn) ? item.isbn[0] : item.isbn;
                return (
                    <BookListItem
                    key={isbn+item.key}
                    book={item}
                    isbn={isbn}
                    />
                )
            })
        )
    }

    render() {
        const {books, loading, error, searchQuery} = this.props;
        //console.log(books[0]);
        if (searchQuery === '') {
            return <div>Что ищем сегодня?</div>
        }
        
        if (books === []) {
            return <p>Ничего не найдено.</p>
        }

        if (error) {
            return <Error/>
        }

        if (loading) {
            return <Spinner/>
        }
        const items = (books.length===0) ? 'Ничего не найдено': this.renderBooks();

        return (
            <div>
                {items}
                <PaginationPanel />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        books: state.books,
        searchQuery: state.searchQuery,
        loading: state.loading,
        error: state.error,    
    }
}

const mapDispatchToProps = {
    bookListLoaded,
    bookListError,
    removeBooks,
    updateSearch
}

export default HOC()(connect(mapStateToProps, mapDispatchToProps)(BookList));
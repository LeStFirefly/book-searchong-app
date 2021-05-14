import React, {Component} from 'react';
import { connect } from 'react-redux';
import BookListItem from '../BookListItem';
import PaginationPanel from '../PaginationPanel';
import Spinner from '../Spinner/';
import Error from '../Error/';

import './BookList.sass';

class BookList extends Component{

    componentDidMount() {
        if (this.props.searchQuery === '') {
            return <div>Что ищем сегодня?</div>
        }
    }

    componentDidUpdate(prevState) {
        if (this.props.currentPage !== prevState.currentPage) {
            this.renderBooks();
        }
    }

    renderBooks = () => {
        const {books, currentPage} = this.props;
        const currentBooks = books.filter( (item, index) => {
            if (index>=(currentPage-1)*10 && index<currentPage*10) {
                return item;
            }
        });
        console.log(currentBooks);
        return(
            currentBooks.map( (item) => {
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
        console.log(books.length + 'книг найдено');

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
        currentPage: state.currentPage    
    }
}

export default connect(mapStateToProps, {})(BookList);
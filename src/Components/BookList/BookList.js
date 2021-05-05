import React, {Component} from 'react';
import BookListItem from '../BookListItem';
import PaginationPanel from '../PaginationPanel';
import Spinner from '../Spinner/';

import './BookList.sass';

export default class BookList extends Component{
    render() {
        return (
            <div>
                <BookListItem />
                <BookListItem />
                <BookListItem />
                <PaginationPanel />
            </div>
        )
    }
};

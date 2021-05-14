import React, {Component} from 'react';
import { connect } from 'react-redux';
import {changePage} from '../../actions';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import './PaginationPanel.sass'

class PaginationPanel extends Component {
    componentDidMount() {
        if (this.props.pages === 1) {
            return(
                <div></div>
            )
        }
    }

    onChangePages = (e) => {
        const {changePage} = this.props;
        let paginationNumber = e.target.key;
        changePage(paginationNumber);
    }

    render() {
        const {pages} = this.props;
        let paginationsArr = []

        for (let i=1; i<=pages; i++) {
            paginationsArr.push(i);
        }

        let paginations = paginationsArr.map ( item => {
            return(
                <PaginationItem key={item} id={`page-${item}`} onClick={(e) => this.onChangePages(e)}>
                        <PaginationLink>
                        {item}
                        </PaginationLink>
                </PaginationItem>
            )
        })
        

        return(
            <div className='paginationPanel'>
                <Pagination aria-label="Page navigation example">
                    <PaginationItem>
                        <PaginationLink first href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink previous href="#" />
                    </PaginationItem>
                    {paginations}
                    <PaginationItem>
                        <PaginationLink next href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink last href="#" />
                    </PaginationItem>
                </Pagination>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
        pages: state.pages    
    }
}

const mapDispatchToProps = {
    changePage
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationPanel);
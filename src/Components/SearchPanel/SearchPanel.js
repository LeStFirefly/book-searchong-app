import React, {Component} from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { updateSearch, removeBooks} from '../../actions';

import './SearchPanel.sass';

class SearchPanel extends Component {
    onClickSearchButton = async () => {
        const input = document.getElementById('searchInput');
        await this.props.updateSearch(input.value);
        console.log(' was up from button to'+this.props.searchQuery);
        
    }
    
    onEnter = async (e) => {
        if (e.keyCode === 13) {
            await this.props.updateSearch(e.target.value);
            console.log(' was up from enter to'+this.props.searchQuery);
        }
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
        searchQuery: state.searchQuery
    }
}

const mapDispatchToProps = {
    updateSearch,
    removeBooks
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);

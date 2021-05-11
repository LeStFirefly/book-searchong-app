import React from 'react';
import BookContext from '../BookContext';


const HOC = () => (Wrapped) => {
    return (props) => {
        return (
            <BookContext.Consumer>
                {
                    (BookService) => {
                        return <Wrapped {...props} BookService={BookService}/>
                    }
                }
            </BookContext.Consumer>
        )
    }
};

export default HOC;
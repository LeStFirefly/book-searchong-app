import React from 'react';
import BookContext from '../BookContext';

const HOC = () => (Wrapped) => {
    return (props) => {
        return (
            <BookContext.Consumer>
                {
                    (RestoService) => {
                        return <Wrapped {...props} BookService={BookService}/>
                    }
                }
            </BookContext.Consumer>
        )
    }
};

export default HOC;
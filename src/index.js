import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './Components/ErrorBoundary/';
import BookService from './services/BookService';
import BookContext from './Components/BookContext';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const bookService = new BookService();

ReactDOM.render(
  <Provider store={store}>
        <ErrorBoundry>
            <BookContext.Provider value={bookService}>
                <Router>
                    <App />
                </Router>
            </BookContext.Provider>
        </ErrorBoundry>
  </Provider>
  , document.getElementById('root')
);
import React from 'react';
import {SearchModule} from '../pages';
import HOC from '../HOC';

import './App.sass';

const App = () => {
  return (
    <div className='app'>
      <SearchModule/>
    </div>
  );
}

export default HOC()(App);

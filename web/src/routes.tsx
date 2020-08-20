import React from 'react';
import {  BrowserRouter, Route  } from 'react-router-dom'

import Products from './pages/Products';


function Routes() {
    return (
        <BrowserRouter>
        <Route path="/" exact component={Products} />
        </BrowserRouter>
    );
}

export default Routes; 
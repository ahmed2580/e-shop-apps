import React, { Component } from 'react';
import {  Link} from 'react-router-dom';
// import {TransitionGroup , CSSTransition} from 'react-transition-group';
import '../App.css';
import Card from './Card.js'
import products from '../data.js';
// import ProductCard from './ProductCard';


class App extends Component {

  
  render() {
    return (

      <div className="App">
      <h1 className='product-h1'>Product Card</h1>
      <div className='product-list'>
    {Object.keys(products).map(key =>
      <Link to={'/cards/'+key} key={key}>
        <Card productData={products[key]}/> 
       </Link>
     
    )}
   
    </div>
    </div>
    );

  }
}

export default App;

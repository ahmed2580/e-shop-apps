import React, { Component } from 'react';
import '../data.js'
import MainCard from './MainCard';
import DesCard from './DesCard';
import '../App.css';

class Card extends Component {
    render(){
        const p = this.props.productData;
        return(
            <div className="product-Card">
             <MainCard pPrice={p.product_price} url={ p.product_image} />  
             <DesCard pName={p.product_name} pPrice={p.product_price}/>
            </div>
        );
    }
}


export default Card;

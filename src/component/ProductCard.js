import React, { Component } from 'react';
import MainCard from './MainCard';
import DesCard from './DesCard';
import '../App.css';
import products from '../data.js';
import {  Link} from 'react-router-dom';

class ProductCard extends Component {
    render(){
        const id=this.props.match.params.id;
        const p=products[id];
        

        return(
            
         
            
            <div className="Card-Info">
            <Link to='/' >Back</Link>
             <MainCard pName={p.product_name} url={p.product_image}  />  
             <DesCard  pDesc={p.product_desc} pPrice={p.product_price} />      
             </div>
           
        );
    }
}
export default ProductCard;
import React, { Component } from 'react';
import '../data.js'
import '../App.css';

class DesCard extends Component {
    render(){
        return(
            <div>
                <h3>{this.props.pName}</h3>
                <p className="price">{this.props.pPrice} $</p>
                <p className="dese">{this.props.pDesc}</p>
            </div>
        );
    }
}
export default DesCard;
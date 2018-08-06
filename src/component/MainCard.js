import React, { Component  } from 'react';



class MainCard extends Component {
    render(){
        return(
            <div>
                <h3>{this.props.pName}</h3>
                <img src={this.props.url} alt=''/>                   
            </div>
        );
    }
}
export default MainCard;
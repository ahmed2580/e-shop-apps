import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../App.css';
import App from './App';
import ProductCard from './ProductCard'


const Routes =  ()=>(
    <Router>
        <div>
        <Switch>
        <Route exact path="/" component={App} />    
        <Route exact path="/cards/:id" component={ProductCard} />
        </Switch>
        </div>
        
    </Router>  
)
export default Routes;

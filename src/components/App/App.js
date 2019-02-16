import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React , {Component } from 'react';
import Navbar from '../NavBar/navbar';
import { Route } from 'react-router-dom';
import Champions from '../Champions/champions';
import Items from '../Items/items';

class App extends Component {
    render () {
        return(
            <div className = "container">
                <Navbar />
                <Route exact path = '/' component = {Champions}/>
                {/* <Route path ='/items' component = {Items}/> */}
            </div>
        );
    }
}

export default App;

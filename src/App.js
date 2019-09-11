import React from 'react';
import styles from './App.css';
import {Route,BrowserRouter as Router,Link} from 'react-router-dom'
// import Yzh_component from 'Yzh_component';
import TestComponent from './TestComponent';

export default class APP extends React.Component {
    render() {
        return <div>
            <Router>Hello, React Component！
            <Link to="/TestComponent">TestComponent</Link>
                    
            </Router>
        </div>
        
    }
}
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


import "./sass/main.scss";

import Home from "./pages/Home"


ReactDOM.render(

    <Router>
        
        <div>
            <Link to="/"> Home </Link>

            <Route exact path="/" component={Home} />
        
        </div>
    </Router>,
    
    document.getElementById('app')

)
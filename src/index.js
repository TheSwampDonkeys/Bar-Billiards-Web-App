import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


import "./sass/main.scss";

import Home from "./pages/Home"
import PlayBilliards from "./pages/PlayBilliards"


ReactDOM.render(

<<<<<<< HEAD
    <HashRouter>

        <div>

            <Route exact path="/" component={PlayBilliards} />
            <Route exact path="/" component={Home} />

        </div>
                
    </HashRouter>,
=======
    <Router>
        
        <div>
            <Link to="/"> Home </Link>

            <Route exact path="/" component={Home} />
        
        </div>
    </Router>,
>>>>>>> e1972a4c36cb14a2920029f31084500aa326b47c
    
    document.getElementById('app')

)
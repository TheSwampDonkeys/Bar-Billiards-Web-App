import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


import "./sass/main.scss";

import Home from "./pages/Home"
import PlayBilliards from "./pages/PlayBilliards"


ReactDOM.render(

    <HashRouter>

        <div>

            <Route exact path="/" component={PlayBilliards} />
            <Route exact path="/" component={Home} />

        </div>
                
    </HashRouter>,
    
    document.getElementById('app')

)
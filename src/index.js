import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Link } from 'react-router-dom'


import "./sass/main.scss"

import Home from "./pages/Home"
import PlayBilliards from "./pages/PlayBilliards"
import Rules from "./pages/Rules"


ReactDOM.render(

    <HashRouter>

        <div>

            <Route exact path="/" component={Home} />
            <Route exact path="/play" component={PlayBilliards} />
<<<<<<< HEAD
            <Route exact path="/rules" comonent={Rules} />
=======
            <Route exact path="/rules" component={Rules} />

>>>>>>> cfa2440b1481f862cef1de50ed092b491cd66bb2
        </div>
                
    </HashRouter>,
    
    document.getElementById('app')

)
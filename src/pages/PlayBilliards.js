import React from 'react'

import PlayerScoring from './../component/PlayerScoring'
import Rules from './../component/Rules'
import Navbar from '../component/Navbar'

function PlayBilliards(){

    return (

        <div className="wrapper">

            <h1> Play </h1>

            <Navbar/>
            <hr></hr>
            <div className="player-score-wrapper" >

                <PlayerScoring />
                    
            </div>
            <hr></hr>
            <Rules />                 
        
        </div>
    )

}

export default PlayBilliards
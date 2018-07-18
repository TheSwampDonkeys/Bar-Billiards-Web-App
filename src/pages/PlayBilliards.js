import React from 'react'

import PlayerScoring from './../component/PlayerScoring'
import Rules from './../component/Rules'


import LinkButton from "../component/LinkButton"
import Navbar from '../component/Navbar';

class PlayBilliards extends React.Component{

    render() {

        return (

            <div className="wrapper">
                <h1> Play </h1>

                <Navbar/>

                <div className="player-score-wrapper" >

                    <PlayerScoring />
                    
                        
                </div>

                <Rules />

                   
            
            </div>
        )
        
    }


}

export default PlayBilliards
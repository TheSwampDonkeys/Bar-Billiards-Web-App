import React from 'react'

import PlayerScoring from './../component/PlayerScoring'
import Rules from './../component/Rules'
<<<<<<< HEAD
=======


>>>>>>> e18d9648296681e8e46ba415602875504a542686
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
<<<<<<< HEAD
                           
=======
                    <Rules />
                        
>>>>>>> e18d9648296681e8e46ba415602875504a542686
                </div>

                <Rules />

                   
            
            </div>
        )
        
    }


}

export default PlayBilliards
import React from 'react'

import Navbar from './../component/Navbar'
import PlayerScoring from './../component/PlayerScoring'

class PlayBilliards extends React.Component{

    render() {

        return (

            <div className="wrapper">

                <h1> Play </h1>

                <div className="player-score-wrapper" >

                    <Navbar />

                    <PlayerScoring />
                        
                </div>
            
            </div>
        )
        
    }


}

export default PlayBilliards
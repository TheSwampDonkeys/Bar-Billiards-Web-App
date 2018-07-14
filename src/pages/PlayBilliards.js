import React from 'react'

import PlayerScoring from './../component/PlayerScoring'

class PlayBilliards extends React.Component{

    render() {

        return (

            <div className="wrapper">
                <h1> Play </h1>


                <div className="player-Score-Wrapper">

                    <PlayerScoring scoreMultiplier={1} />
                    
                    <PlayerScoring scoreMultiplier={2} />

                    
                </div>

            </div>
        )
        
    }


}

export default PlayBilliards
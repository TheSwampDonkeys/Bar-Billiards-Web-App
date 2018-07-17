import React from 'react'

import PlayerScoring from './../component/PlayerScoring'

class PlayBilliards extends React.Component{

    render() {

        return (

            <div className="wrapper">
                <h1> Play </h1>


                <div className="player-score-wrapper" >

                    <PlayerScoring text="Player One" textId="player-1-input"/>
                        
                </div>
            
            </div>
        )
        
    }


}

export default PlayBilliards
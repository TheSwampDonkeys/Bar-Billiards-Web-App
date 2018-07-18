import React from 'react'

import PlayerScoring from './../component/PlayerScoring'

import LinkButton from "../component/LinkButton"

class PlayBilliards extends React.Component{

    render() {

        return (

            <div className="wrapper">
                <h1> Play </h1>

                <LinkButton text="Rules" link="play"/>

                <div className="player-score-wrapper" >

                    <PlayerScoring text="Player One" textId="player-1-input"/>
                        
                </div>
            
            </div>
        )
        
    }


}

export default PlayBilliards
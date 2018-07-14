import React from 'react'
import { Link } from 'react-router-dom'
import ScoreButton from './ScoreButton';

class PlayerScoring extends React.Component{

    render(){
        return(

            <div className="player-scoring-wrapper">

                <p> Player 1 </p>

                <form>

                    <input type="text"/>

                </form>

                <div className="points-wrappers">

                    <ScoreButton />
                    WHITE POINTS BUTTONS WILL BE INSIDE HERE 

                </div>

                <div className="points-wrappers">RED POINTS BUTTONS WILL BE INSIDE HERE </div>

                {/* score = X + Y */}

                {/* RESET BUTTON */}
            </div>

        )


    }


}

export default PlayerScoring
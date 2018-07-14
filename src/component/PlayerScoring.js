import React from 'react'
import { Link } from 'react-router-dom'
import ScoreButton from './ScoreButton';

const scores = [10, 20, 30, 50, 100, 200]

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
                    

                </div>
                {scores.map((number) =>
                
                   <a> {number * this.props.scoreMultiplier} </a>
                   
                )}
                

                <div className="points-wrappers">RED POINTS BUTTONS WILL BE INSIDE HERE </div>

                {/* score = X + Y */}

                {/* RESET BUTTON */}

            </div>

        )


    }


}

export default PlayerScoring
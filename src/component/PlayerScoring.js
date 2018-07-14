import React from 'react'
import { Link } from 'react-router-dom'
import ScoreButton from './ScoreButton';

const scores = [10, 20, 30, 50, 100, 200]

class PlayerScoring extends React.Component{

    render(){


        return(

            <div className="player-scoring-wrapper">

                <p>
                    {this.props.text}
                </p>

                <form>

                    <input type="text"/>

                </form>

                <div className="score-buttons-wrapper">

                    {scores.map((number) =>
                    
                        <ScoreButton scoreValue={number} buttonClass="score-button score-button-white" />

                    )}

                </div>

                <div className="score-buttons-wrapper">

                    {scores.map((number) =>
                    
                        <ScoreButton scoreValue={number * 2} buttonClass="score-button score-button-red" />

                    )}

                </div>
                
                <div class="player-score">

                    <a class="player-total-score"> 1500 </a>
                    <a class="player-turn-score"> + 900 </a>

                </div>
                
                <div className="score-tally">
                    
                   <p> score = X + Y </p>
                
                </div>

                <div className="reset-turnscore-button">
                
                reset
            
                </div>    


                <div className="reset-totalscore-button">
                
                    reset
                
                </div>


                

            </div>

        )


    }


}

export default PlayerScoring
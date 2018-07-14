import React from 'react'
import { Link } from 'react-router-dom'

const scores = [10, 20, 30, 50, 100, 200]

class PlayerScoring extends React.Component{

    render(){


        return(

            <div className="player-scoring-wrapper">

                <p> Player 1 </p>

                <form>

                    <input type="text"/>

                </form>

                <div className="score-buttons score-buttons-white">

                    {scores.map((number) =>
                    
                        <a> {number} </a>

                    )}

                </div>

                <div className="score-buttons score-buttons-red">

                    {scores.map((number) =>
                    
                        <a> {number * 2} </a>

                    )}

                </div>
                
                
                {/* score = X + Y */}

                {/* RESET BUTTON */}

            </div>

        )


    }


}

export default PlayerScoring
import React from 'react'
import { Link } from 'react-router-dom'
import ScoreButton from './ScoreButton';

const scores = [10, 20, 30, 50, 100, 200]

class PlayerScoring extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            playerTotalScore: 0,
            playerTurnScore: 0
        }

        this.setPlayerTurnScore = this.setPlayerTurnScore.bind(this)
        this.resetTurnPoints = this.resetTurnPoints.bind(this)
        this.resetAllPoints = this.resetAllPoints.bind(this)

    }

    setPlayerTurnScore(newScore){

        let updatedScore = this.state.playerTurnScore + newScore

        this.setState((prevState) => {

            return { playerTurnScore: prevState.playerTurnScore + newScore}

        })

    }

    nextTurn(){

        this.setState({

            playerTotalScore: this.state.playerTurnScore,
            playerTurnScore: 0

        })

    }


    resetTurnPoints(){
        this.setState({

            
            playerTurnScore: 0

        })
    }

    resetAllPoints(){
        this.setState({

            playerTurnScore: 0,
            playerTotalScore: 0
        })
    }

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
                    
                        <ScoreButton updateScore={this.setPlayerTurnScore} scoreValue={number} buttonClass="score-button score-button-white" />

                    )}

                </div>

                <div className="score-buttons-wrapper">

                    {scores.map((number) =>
                    
                        <ScoreButton updateScore={this.setPlayerTurnScore} scoreValue={number * 2} buttonClass="score-button score-button-red" />

                    )}

                </div>
                
                <div class="player-score">
                    <a class="player-score-heading"> Score: </a>
                    <div>
                        <a class="player-total-score"> {this.state.playerTotalScore} </a>
                        <a class="player-total-score"> + </a>
                        <a class="player-turn-score"> {this.state.playerTurnScore} </a>
                    </div>
                </div>


                <div className="reset-button-container">   
                     
                    <button onClick={this.resetTurnPoints} className="reset-score-button button">
                    
                        Reset Turn Points
                
                    </button>    

                    <button onClick={this.resetAllPoints} className="reset-score-button button">
                    
                         Reset all points 
                    
                    </button>

                    <button onClick={this.nextTurn} className="next-turn-button button">
                    
                        <p> Next turn </p>
                
                    </button>

                </div>

            </div>  
        )


    }


}

export default PlayerScoring
import React from 'react'
import { Link } from 'react-router-dom'
import ScoreButton from './ScoreButton';

const scores = [10, 20, 30, 50, 100, 200]

class PlayerScoring extends React.Component{

    constructor(props){

        super(props);

        this.state = {

            player1: {

                playerName: "Player 1",
                playerTotalScore: 0,
                playerTurnScore: 0,

            },

            player2: {

                playerName: "Player 2",
                playerTotalScore: 0,
                playerTurnScore: 0,

            },

            currentPlayer: 1,
            currentTurnScore: 0,
            currentTotalScore: 0
         
        }

        this.setPlayerTurnScore = this.setPlayerTurnScore.bind(this)
        this.resetTurnPoints = this.resetTurnPoints.bind(this)
        this.resetAllPoints = this.resetAllPoints.bind(this)
        this.nextTurn = this.nextTurn.bind(this)
        this.setName = this.setName.bind(this)

    }

    setPlayerTurnScore(newScore){

        // if(this.state.currentPlayer == 1){

        //     let player1 = Object.assign({}, this.state.player1)
        //     player1.playerTurnScore = player1.playerTurnScore + newScore

        //     this.setState({

        //         player1
    
        //     })
            

        // } else{

        //     let player2 = Object.assign({}, this.state.player2)
        //     player2.playerTurnScore = player2.playerTurnScore + newScore

        //     this.setState({

        //         player2
    
        //     })

        this.setState((prevState) =>{

            return {currentTurnScore: prevState.currentTurnScore + newScore}

        })

    }

    getPlayerTotalScore(){

        return "200"

    }


    nextTurn(){

        this.setState({

            

        })

        
        if(this.state.currentPlayer == 1){

            let player1 = Object.assign({}, this.state.player1)
            player1.playerTotalScore = player1.playerTotalScore + this.state.currentTurnScore

            this.setState({

                player1,
                currentTotalScore: this.state.player2.playerTotalScore
    
            })

            this.setState({
            
                currentPlayer: 2
    
            })

        } else {

            this.setState({
            
                currentPlayer: 1,
                currentTotalScore: this.state.player1.playerTotalScore
    
            })

            console.log(this.state.currentPlayer)

        }

        this.setState({
            
            currentTurnScore: 0

        })


    }

    updateAllInfo(){

        if(this.state.currentPlayer == 1){



        }

    }


    resetTurnPoints(){

        this.setState({
            
            currentTurnScore: 0

        })
    }

    resetAllPoints(){

        this.setState({

            playerTurnScore: 0,
            playerTotalScore: 0

        })
    }

    setName(){

        let newName = document.getElementById(this.props.textId).value

        this.setState({

            playerName: newName

        })


    }

    componentDidMount(){

        console.log(this.state)

    }

    render(){


        return(

            <div className="player-scoring-wrapper">

                <div id="player-name-wrapper">

                    <p className="player-names">
                        {this.state.player1.playerName}
                    </p>

                    <button id="edit-player-name" className="button">
                        <i class="fas fa-user-edit"></i>
                    </button>
                </div>

                <form id="name-change-input">

                    <input id={this.props.textId} type="text"/>
                    <button onClick={this.setName} type="submit" className="button"> Change Name </button>

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
                        <a class="player-total-score"> {this.state.currentTotalScore} </a>
                        <a class="player-total-score"> + </a>
                        <a class="player-turn-score"> {this.state.currentTurnScore} </a>
                    </div>
                </div>


                <div className="reset-button-container">   

                    <button onClick={this.resetAllPoints} className="reset-score-button button">
                    
                        Reset All 
               
                    </button>

                     
                    <button onClick={this.resetTurnPoints} className="reset-score-button button">
                    
                        Reset Turn
                
                    </button>    

                    <button onClick={this.nextTurn} className="next-turn-button button">
                    
                         Next turn 
                
                    </button>

                </div>

            </div>  
        )


    }


}

export default PlayerScoring
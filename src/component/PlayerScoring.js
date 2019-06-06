import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ScoreButton from './ScoreButton';
import Rules from './Rules';


import anime from 'animejs'


const scores = [10, 20, 30, 50, 100, 200]



function PlayerScoring (){

    const [player1, setPlayer1] = useState({

        playerName: "Connor",
        playerTotalScore: 0,
        playerTurnScore: 0

    })

    const [player2, setPlayer2] = useState({

        playerName: "Fin",
        playerTotalScore: 0,
        playerTurnScore: 0

    })

    const [currentPlayer, setCurrentPlayer] = useState(1);

    const currentTurnTemp = {};


    return(

        <div id="player-scoring-wrapper">

            <div id="player-name-wrapper">

                <p className="player-names">
                    {player1.playerName}
                </p>

                <button id="edit-player-name" className="button">
                    <i class="fas fa-user-edit"></i>
                </button>

            </div>

            <span> <a> {player1.playerName} ({player1.playerTotalScore}) </a> <a> {player2.playerName} ({player2.playerTotalScore}) </a> </span>

            <form id="name-change-input" style={{display: "none"}}>

                <input id="edit-name" type="text"/>
                <button type="submit" className="button">
                    <i class="fas fa-check"></i>
                </button>

            </form>
{/* 
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
                    <a class="player-total-score"> {this.state.currentTurnTemp.playerTotalScore} </a>
                    <a class="player-total-score"> + </a>
                    <a class="player-turn-score"> {this.state.currentTurnTemp.playerTurnScore} </a>
                </div>
            </div>


            <div className="reset-button-container">   

                <button onClick={this.resetAllPoints} className="reset-score-button button">
                
                    Reset All 
            
                </button>

                    
                <button onClick={this.resetTurnPoints} className="reset-score-button button">
                
                    Foul (Reset Turn)
            
                </button>    

                <button onClick={this.nextTurn} className="next-turn-button button">
                
                        Add Points (Next turn) 
            
                </button>

            </div> */}

        </div>  
    )

}

export default PlayerScoring
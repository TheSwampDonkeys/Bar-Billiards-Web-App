import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ScoreButtonGroup from './ScoreButtonGroup';
import Rules from './Rules';


import anime from 'animejs'
import NameForm from './NameForm';


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

    const handleNameChange = (newName) => {

        if(currentPlayer == 1){

            let tempPlayer = player1;

            setPlayer1({

                playerName: newName,
                playerTotalScore: tempPlayer.playerTotalScore,
                playerTurnScore: tempPlayer.playerTurnScore
        
            })
        }

        else if(currentPlayer == 2){

            let tempPlayer = player2;

            setPlayer2({

                playerName: newName,
                playerTotalScore: tempPlayer.playerTotalScore,
                playerTurnScore: tempPlayer.playerTurnScore
        
            })
        }

    }

    const handleNextTurn = (currentPlayer) => {

        if(currentPlayer == 1){
            setCurrentPlayer(2)

            console.log(currentPlayer);

        }

        if(currentPlayer == 2){
            setCurrentPlayer(1)

            console.log(currentPlayer);

        }

    }


    return(

        <div id="player-scoring-wrapper">

            <div id="player-name-wrapper">

                <p className="player-names">

                    {currentPlayer == 1 ? player1.playerName : player2.playerName}

                </p>

                {/* <button id="edit-player-name" className="button" onClick={ () => handleNameChange(currentPlayer) }>
                    <i class="fas fa-user-edit"></i>
                </button> */}

            </div>

            <span> 
                <a> {player1.playerName} ({player1.playerTotalScore}) </a> 
                <a> {player2.playerName} ({player2.playerTotalScore}) </a> 
            </span>

            <NameForm handleNameChange={ handleNameChange }/>

            <ScoreButtonGroup scores={scores} scoreMultiplier={1} buttonClass="score-button score-button-white" />
            
            <ScoreButtonGroup scores={scores} scoreMultiplier={2} buttonClass="score-button score-button-red" />

            <button value="Next turn" onClick={ () => handleNextTurn(currentPlayer) } > Next turn </button>


        </div>  
    )

}

export default PlayerScoring
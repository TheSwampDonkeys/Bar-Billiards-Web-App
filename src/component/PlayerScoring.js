import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import ScoreButtonGroup from './ScoreButtonGroup';
import Rules from './Rules';


import anime from 'animejs'
import NameForm from './NameForm';


const scores = [10, 20, 30, 50, 100, 200]

function PlayerScoring (){

    const [player1, setPlayer1] = useState({

        playerName: "Player 1",
        playerTotalScore: 0,
        playerTurnScore: 0

    })

    const [player2, setPlayer2] = useState({

        playerName: "Player 2",
        playerTotalScore: 0,
        playerTurnScore: 0

    })

    const [currentPlayer, setCurrentPlayer] = useState(1);

    const [currentTurnTemp, setCurrentTurnTemp] = useState({
        playerTotalScore: 0,
        playerTurnScore: 0
    });

    const handleNameChange = (newName) => {

        if(currentPlayer == 1){

            let tempPlayer = player1;

            setPlayer1({

                playerName: newName,
                playerTotalScore: player1.playerTotalScore,
                playerTurnScore: player1.playerTurnScore
        
            })

            localStorage.setItem('player1', JSON.stringify(player1));

        }

        else if(currentPlayer == 2){

            let tempPlayer = player2;

            setPlayer2({

                playerName: newName,
                playerTotalScore: player2.playerTotalScore,
                playerTurnScore: player2.playerTurnScore
        
            })

            localStorage.setItem('player2', JSON.stringify(player2));

        }

    }

    const handleScoreButton = (scoreValue) => {

        let tempScore = currentTurnTemp;

        setCurrentTurnTemp({

            playerTotalScore: currentTurnTemp.playerTotalScore,
            playerTurnScore: currentTurnTemp.playerTurnScore + scoreValue
    
        })

    }

    const handleNextTurn = (currentPlayer) => {

        if(currentPlayer == 1){

            let tempPlayer = player1;
            
            setPlayer1({

                playerName: tempPlayer.playerName,
                playerTotalScore: tempPlayer.playerTotalScore + currentTurnTemp.playerTurnScore,
                playerTurnScore: 0

            })

            setCurrentPlayer(2);

            setCurrentTurnTemp({

                playerTotalScore: player2.playerTotalScore,
                playerTurnScore: 0
        
            })

        }

        if(currentPlayer == 2){

            let tempPlayer = player2;

            setPlayer2({

                playerName: tempPlayer.playerName,
                playerTotalScore: tempPlayer.playerTotalScore + currentTurnTemp.playerTurnScore,
                playerTurnScore: 0

            });

            setCurrentPlayer(1);

            setCurrentTurnTemp({

                playerTotalScore: player1.playerTotalScore,
                playerTurnScore: 0
        
            })

        }

        saveCurrentGame();

    }

    const handleResetTurn = () => {

        setCurrentTurnTemp({

            playerTotalScore: currentTurnTemp.playerTotalScore,
            playerTurnScore: 0
    
        })

    }

    const handleResetAll = () => {

        setCurrentTurnTemp({

            playerTotalScore: 0,
            playerTurnScore: 0
    
        })

        if(currentPlayer == 1){

            let tempPlayer = player1;

            setPlayer1({

                playerName: tempPlayer.playerName,
                playerTotalScore: 0,
                playerTurnScore: 0
        
            })
        }

        else if(currentPlayer == 2){

            let tempPlayer = player2;

            setPlayer2({

                playerName: tempPlayer.playerName,
                playerTotalScore: 0,
                playerTurnScore: 0
        
            })
        }

    }

    const saveCurrentGame = () => {

        localStorage.setItem('player1', JSON.stringify(player1));
        localStorage.setItem('player2', JSON.stringify(player2));

    }

    // useEffect(() => {

    //     if(localStorage.getItem("player1Name")){
    //         setPlayer1({
    //             playerName: localStorage.getItem("player1Name"),
    //             playerTotalScore: 0,
    //             playerTurnScore: 0
    //         })
    //     }

    //     if(localStorage.getItem("player2Name")){
    //         setPlayer2({
    //             playerName: localStorage.getItem("player2Name"),
    //             playerTotalScore: 0,
    //             playerTurnScore: 0
    //         })
    //     }

    // })


    return(

        <div id="player-scoring-wrapper">

            <div id="player-name-wrapper">

                <p className="player-names">

                    {currentPlayer == 1 ? player1.playerName : player2.playerName}'s turn

                </p>

                {/* <button id="edit-player-name" className="button" onClick={ () => handleNameChange(currentPlayer) }>
                    <i className="fas fa-user-edit"></i>
                </button> */}

                <span className="all-player-scores"> 
                    <a> {player1.playerName} ({player1.playerTotalScore}) </a> 
                    <a> {player2.playerName} ({player2.playerTotalScore}) </a> 
                </span>

                <NameForm handleNameChange={ handleNameChange }/>

            </div>



            <ScoreButtonGroup scores={scores} scoreMultiplier={1} buttonClass="score-button score-button-white" handleScoreButton={handleScoreButton} />
            
            <ScoreButtonGroup scores={scores} scoreMultiplier={2} buttonClass="score-button score-button-red" handleScoreButton={handleScoreButton} />



            <div className="player-turn-wrapper">
                <div className="player-turn-info">
                    <a className="player-score-heading"> Total Score: </a>
                    <a className="player-total-score"> {currentTurnTemp.playerTotalScore} </a>
                </div>
                <div className="player-turn-info">
                    <a className="player-score-heading"> Turn Score: </a>
                    <a className="player-turn-score">+ {currentTurnTemp.playerTurnScore} </a>
                </div>
                    
            </div>
            
            <div className="reset-button-container">  
                   
                <button className="reset-score-button button" onClick={() =>handleResetAll() }>
                
                    Reset All 
            
                </button>
      
                <button  className="reset-score-button button" onClick={ () => handleResetTurn() }>
                
                    Foul
            
                </button>    
            </div> 
            <button value="Next turn" onClick={ () => handleNextTurn(currentPlayer) } className="next-turn-button button"> Next turn </button>

        </div>  
    )

}

export default PlayerScoring
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

    function handleNameChange(player){

        console.log(player1);


        if(player == 1){

            let temp = player1;

            temp.playerName = "Changed";
            console.log(temp);

            setPlayer1(

                temp
        
            );
        }

        else if(player == 2){

            setPlayer1({

                playerName: "Player 2 changed",
                playerTotalScore: 0,
                playerTurnScore: 0
        
            })
        }

    }


    return(

        <div id="player-scoring-wrapper">

            <div id="player-name-wrapper">

                <p className="player-names">

                    {player1.playerName}                   

                </p>

                <button id="edit-player-name" className="button" onClick={ () => handleNameChange(currentPlayer) }>
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

        </div>  
    )

}

export default PlayerScoring
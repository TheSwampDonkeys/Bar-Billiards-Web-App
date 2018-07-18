import React from 'react'
import { Link } from 'react-router-dom'
import ScoreButton from './ScoreButton';
import anime from 'animejs'


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

            currentTurnTemp:{},

            currentPlayer: 1,

         
        }

        this.setPlayerTurnScore = this.setPlayerTurnScore.bind(this)
        this.resetTurnPoints = this.resetTurnPoints.bind(this)
        this.resetAllPoints = this.resetAllPoints.bind(this)
        this.nextTurn = this.nextTurn.bind(this)
        this.setName = this.setName.bind(this)

    }

    componentWillMount(){

        let currentTurnTemp = Object.assign({}, this.state.player1)
        
        this.setState({

            currentTurnTemp: this.state.player1

        })

    }

    setPlayerTurnScore(newScore){

        let currentTurnTemp = Object.assign({}, this.state.currentTurnTemp)
        currentTurnTemp.playerTurnScore += newScore

        this.setState({

            currentTurnTemp

        })

    }

    slideOff(card){

        card.classList.toggle("slideOff")
        card.classList.toggle("slideOn")

    }

    slideOn(card){

        card.classList.toggle("slideOn")
        
    }

    nextTurn(){

        var Timeline = anime.timeline();
        
        Timeline
        .add({
            targets: '#player-scoring-wrapper',
            translateX: ['0' , '150%'], 
            duration: 500, 
            elasticity: 0,
            easing: 'easeOutCirc'
        })
        .add({  
            targets: '#player-scoring-wrapper',
            translateX: ['-150%', '0'], 
            duration: 500, 
            elasticity: 0,
            easing: 'easeOutCirc'
        });

        

        // let card = document.getElementById("player-scoring-wrapper")
        // card.classList.toggle("slideOn")


        if(this.state.currentPlayer == 1){

            let currentTurnTemp = Object.assign({}, this.state.currentTurnTemp)
            currentTurnTemp.playerTotalScore += currentTurnTemp.playerTurnScore
            currentTurnTemp.playerTurnScore = 0
        
            this.setState({

                player1: currentTurnTemp,
                currentPlayer: 2,
                currentTurnTemp: this.state.player2
    
            })

            console.log(this.state)


        } else {

            let currentTurnTemp = Object.assign({}, this.state.currentTurnTemp)
            currentTurnTemp.playerTotalScore += currentTurnTemp.playerTurnScore
            currentTurnTemp.playerTurnScore = 0

            this.setState({

                player2: currentTurnTemp,
                currentPlayer: 1,
                currentTurnTemp: this.state.player1
    
            })

            console.log(this.state)

        }


    }

    resetTurnPoints(){

        let currentTurnTemp = Object.assign({}, this.state.currentTurnTemp)
        currentTurnTemp.playerTurnScore = 0

        this.setState({
            
            currentTurnTemp

        })

    }

    resetAllPoints(){

        let currentTurnTemp = Object.assign({}, this.state.currentTurnTemp)
        currentTurnTemp.playerTurnScore = 0
        currentTurnTemp.playerTotalScore = 0


        this.setState({
            
            currentTurnTemp

        })
    }

    setName(){

        let newName = document.getElementById(this.props.textId).value

        if(newName != ""){

            let currentTurnTemp = Object.assign({}, this.state.currentTurnTemp)
            currentTurnTemp.playerName = newName
    
            this.setState({
    
                currentTurnTemp
    
            })
    
            this.showEditForm()
  
        } else {

            alert("Please input a name")

        }

    }

    showEditForm(){

        let form = document.getElementById("name-change-input")

        if (form.style.display === "none"){

            form.style.display = "flex"

        } else {

            form.style.display = "none"

        }

    }



    render(){


        return(

            <div id="player-scoring-wrapper">

            <a> Player 1: 500 - Player 2: 900 </a>

                <div id="player-name-wrapper">

                    <p className="player-names">
                        {this.state.currentTurnTemp.playerName}
                    </p>

                    <button id="edit-player-name" className="button" onClick={this.showEditForm}>
                        <i class="fas fa-user-edit"></i>
                    </button>

                </div>

                <form id="name-change-input" style={{display: "none"}}>

                    <input id={this.props.textId} type="text"/>
                    <button onClick={this.setName} type="submit" className="button">
                        <i class="fas fa-check"></i>
                    </button>

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

                </div>

            </div>  
        )


    }


}

export default PlayerScoring
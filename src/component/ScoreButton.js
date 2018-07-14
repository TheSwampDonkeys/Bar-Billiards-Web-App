import React from 'react'
import { Link } from 'react-router-dom'

class ScoreButton extends React.Component{
    
    
    addScore(e){
        console.log(parseInt(e.target.value))
        this.props.updateScore(parseInt(e.target.value))

    }

    render(){

        return(

            <button onClick={this.addScore} className={this.props.buttonClass} value={this.props.scoreValue}> {this.props.scoreValue} </button>

        )
    }

    

}

export default ScoreButton
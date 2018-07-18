import React from 'react'
import { Link } from 'react-router-dom'

class ScoreButton extends React.Component{
    
    constructor(props){

        super(props)

        this.addScore = this.addScore.bind(this)


    }
    
    addScore(e){
        
        this.props.updateScore(parseInt(e.target.value))

    }

    render(){

        return(

            <button onClick={this.addScore} className={this.props.buttonClass} value={this.props.scoreValue}> {this.props.scoreValue} </button>

        )
    }

    

}

export default ScoreButton
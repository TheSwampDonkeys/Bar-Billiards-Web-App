import React from 'react'
import { Link } from 'react-router-dom'

class ScoreButton extends React.Component{

    render(){
        return(

            <button className={this.props.buttonClass}> {this.props.scoreValue} </button>

        )
    }

}

export default ScoreButton
import React from 'react'

function ScoreButtonElement(props){
    
    return(
        <button className={props.buttonClass} value={props.scoreValue} onClick={ () => props.handleScoreButton(props.scoreValue) } > {props.scoreValue} </button>

    )
    

}

export default ScoreButtonElement
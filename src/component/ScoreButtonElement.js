import React from 'react'

function ScoreButtonElement(props){
    
    return(

        <button className={props.buttonClass} value={props.scoreValue}> {props.scoreValue} </button>

    )
    

}

export default ScoreButtonElement
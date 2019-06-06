import React from 'react'

import ScoreButtonElement from './ScoreButtonElement';


function ScoreButtonGroup(props){
    
    return(

        <div className="score-buttons-wrapper">

            {props.scores.map((number, index) =>
            
                <ScoreButtonElement key={index} scoreValue={number * props.scoreMultiplier} buttonClass={props.buttonClass} />

            )}

        </div>

    )
    

}

export default ScoreButtonGroup
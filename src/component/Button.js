import React from 'react'

class Button extends React.Component{

    render(){
        return(

            <button type="button">{this.props.text}</button>

        )


    }


}

export default Button
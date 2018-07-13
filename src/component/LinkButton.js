import React from 'react'
import { Link } from 'react-router-dom'

class LinkButton extends React.Component{

    render(){
        return(

            <li>
                <Link to={this.props.link}>{this.props.text}</Link>
            </li>

        )


    }


}

export default LinkButton
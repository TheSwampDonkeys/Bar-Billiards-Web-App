import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component{

    render(){

        return(

            <nav>
                <ul>
                    <li>
                        <Link to={"/"} className="button"> Home </Link>
                    </li>

                    <li>
                        <Link to={"play"} className="button"> Play </Link>
                    </li>

                    <li>
                        <Link to={"/"} className="button"> Rules </Link>
                    </li>
                </ul>
            </nav>

        )

    }

}

export default Navbar
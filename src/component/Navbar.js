import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component{

    render(){

        return(

            <nav>
                <ul>
                    <li>
                        <Link to={"/"} className="button"> Home <i class="fas fa-home"></i> </Link>
                    </li>

                    <li>
                        <Link to={"play"} className="button"> Play <i class="fas fa-beer"></i> </Link>
                    </li>

                    <li>
                        <Link to={"rules"} className="button"> Rules <i class="fas fa-book-open"></i> </Link>
                    </li>
                </ul>
            </nav>

        )

    }

}

export default Navbar
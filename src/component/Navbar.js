import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component{

    goToRules(){

        let rules = document.getElementById("rules-wrapper")
        rules.scrollIntoView()

    }

    render(){

        return(

            <nav>
                <ul>
                    <li>
                        <Link to={"/"} className="button"> Home <i class="fas fa-home"></i> </Link>
                    </li>

                    <li>
                        <Link to={"/play"} className="button"> Play <i class="fas fa-beer"></i> </Link>
                    </li>

                    <li>
                        <a className="button"> Rules <i class="fas fa-book-open" onClick={this.goToRules}></i> </a>
                    </li>
                </ul>
            </nav>

        )

    }

}

export default Navbar
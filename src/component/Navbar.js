import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component{

    goToRules(){

        let rules = document.getElementById("rules-wrapper")
        rules.scrollIntoView({behavior: "smooth"})

    }

    render(){

        return(

            <nav>
                <ul>
                    <li>
                        <Link to={"/"} className="button"> Home <i className="fas fa-home"></i> </Link>
                    </li>

                    <li>
                        <Link to={"/play"} className="button"> Play <i className="fas fa-beer"></i> </Link>
                    </li>

                    <li>
                        <a className="button" onClick={this.goToRules}> Rules <i className="fas fa-book-open"></i> </a>
                    </li>
                </ul>
            </nav>

        )

    }

}

export default Navbar
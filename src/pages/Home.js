import React from 'react'

import LinkButton from "../component/LinkButton"


class Home extends React.Component{

    render() {

        return (

            <div id="home-wrapper" className="wrapper">
                <h1> Bar Billiards </h1>
                <ul>
                    <LinkButton text="Play Game" link="play"/>
                    <LinkButton text="Rules" link="/rules" />
                    <LinkButton text="Top Scores" link="/" />
                </ul>
            </div>
        )
        
    }


}

export default Home
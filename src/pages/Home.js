import React from 'react'

import LinkButton from "../component/LinkButton"

class Home extends React.Component{

    render() {

        return (

            <div id="home-wrapper" className="wrapper">
                <h1> Bar Billiards </h1>
                <ul>
                    <LinkButton text="Play Game" link="play"/>
                    <LinkButton text="Rules" link="rules" />
                    <LinkButton text="Top Scores" link="/" />
                </ul>

                <footer>

                    <p> Made by <a href="https://connordowson.com" target="_blank"> Connor Dowson </a> and Fin Hards </p>

                </footer>

            </div>
        )
        
    }


}

export default Home
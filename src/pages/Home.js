import React from 'react'

import Button from "../component/Button"


class Home extends React.Component{

    render() {

        return (

            <div id="home-wrapper" className="wrapper">
                <h1> Bar Billiards </h1>
                <ul>
                    <Button text="Play Game" link="play"/>
                    <Button text="Rules" link="/" />
                </ul>
            </div>
        )
        
    }


}

export default Home
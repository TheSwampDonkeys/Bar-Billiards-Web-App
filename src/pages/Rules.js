import React from 'react'
import Swiper from 'react-id-swiper';

import Navbar from './../component/Navbar'

class Rules extends React.Component{

    render() {

        return (
            <div className="wrapper">
                <h1>Rules</h1>

            <div id="rules-wrapper">

            <Navbar />

            </div>

            <Swiper>   
                <div>Slide 1</div>
                <div>Slide 2</div>
                <div>Slide 3</div>
            </Swiper>
           </div> 
            
        )
        
    }
}

export default Rules

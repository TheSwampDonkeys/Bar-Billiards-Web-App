import React from 'react'
import Swiper from 'react-id-swiper';

import Navbar from './../component/Navbar'

class Rules extends React.Component{

    render() {

        return (

            <div className="wrapper" id="rules-wrapper">

                <h1>Rules</h1>



                    <Swiper>   
                        <div id="slide-one">Slide 1</div>
                        <div id="slide-two">Slide 2</div>
                        <div id="slide-three">Slide 3</div>
                    </Swiper>


           </div> 
            
        )
        
    }
}

export default Rules

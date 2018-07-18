import React from 'react'
import Swiper from 'react-id-swiper';

const params = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  };

class Rules extends React.Component{

    

    render() {

        return (
            <div className="rules-wrapper">
                <h1>Rules</h1>

            

            <Swiper {...params}>   
                <div id="slide-one">

                    <h2>Basic Play</h2>
        
                </div>

                <div id="slide-two">
                    
                    <h2>Fouls</h2>
                
                </div>

                <div id="slide-three">
                
                    <h2>Final Ball</h2>
                    
                </div>
            </Swiper>

           </div> 
            
        )
        
    }
}

export default Rules

import React from 'react'
<<<<<<< HEAD
=======
import Swiper from 'react-id-swiper';
>>>>>>> 7d8b940767ee706f2f660d908e4ad0dea36a7d29

const params = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  };

class Rules extends React.Component{

    

    render() {

        return (
<<<<<<< HEAD
            <div className="rules-wrapper">
=======
<<<<<<< HEAD

            <div id="rules-wrapper" className="wrapper">

                <h1> Rules </h1>

                <div id="rules-text-wrapper">

                <p> Velit exercitation ex quis magna tempor occaecat. Ut sunt amet do duis sit ex aliqua et cillum enim dolore ut. Cillum laboris consequat dolor exercitation cupidatat consequat cupidatat occaecat ex. Ex nostrud sit irure mollit dolor ullamco nostrud ad consectetur ullamco eu. Velit sint proident elit eiusmod elit magna sint.

Ipsum Lorem irure est magna magna officia duis. Dolore commodo ad eiusmod non. Esse veniam amet sunt aute quis culpa quis consectetur veniam consectetur.

Enim et eu quis amet id elit dolor magna consectetur ad. Laboris qui velit ut voluptate esse eu est consectetur mollit pariatur minim aliqua. Ullamco aliquip sint eu aliqua amet. Veniam nisi non dolore adipisicing laborum. Qui id sit nisi minim ex eu non irure. Elit ex adipisicing amet in enim Lorem excepteur elit qui excepteur fugiat nostrud incididunt exercitation.

Exercitation enim id ipsum culpa culpa proident veniam laborum dolor consectetur ipsum eu. Ad ut irure deserunt fugiat. Dolor elit sit nostrud magna proident labore aliqua. Exercitation nisi velit laborum aliquip aliquip. Id minim occaecat exercitation excepteur laborum. </p>

                </div>
                
            </div>
        )
        
    }


=======
            <div className="wrapper">
>>>>>>> e18d9648296681e8e46ba415602875504a542686
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
>>>>>>> 7d8b940767ee706f2f660d908e4ad0dea36a7d29
}

export default Rules

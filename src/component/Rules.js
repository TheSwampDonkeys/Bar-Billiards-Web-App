import React from "react";
import Swiper from "react-id-swiper";

const params = {
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  loop: true
  // navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
};

class Rules extends React.Component {
  render() {
    return (
      <div id="rules-wrapper">
        <h1>Rules</h1>

        <Swiper {...params}>
          <div id="slide-one">
            <h2>Basic Play</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
              justo faucibus, consequat arcu bibendum, vulputate neque. Fusce
              dignissim, erat in imperdiet tempus, purus est consectetur enim,
              id lobortis lorem nunc non metus. Donec non arcu vulputate,
              euismod ligula non, mattis ex. Donec nec mi sit amet dui hendrerit
              dictum.
            </p>
            <p> rules rules rules </p>
          </div>

          <div id="slide-two">
            <h2>Fouls</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
              justo faucibus, consequat arcu bibendum, vulputate neque. Fusce
              dignissim, erat in imperdiet tempus, purus est consectetur enim,
              id lobortis lorem nunc non metus. Donec non arcu vulputate,
              euismod ligula non, mattis ex. Donec nec mi sit amet dui hendrerit
              dictum.
            </p>
          </div>

          <div id="slide-three">
            <h2>Final Ball</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
              justo faucibus, consequat arcu bibendum, vulputate neque. Fusce
              dignissim, erat in imperdiet tempus, purus est consectetur enim,
              id lobortis lorem nunc non metus. Donec non arcu vulputate,
              euismod ligula non, mattis ex. Donec nec mi sit amet dui hendrerit
              dictum.
            </p>
          </div>
        </Swiper>
      </div>
    );
  }
}

export default Rules;

import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

import FeaturedPlayer from '../../../Resources/images/featured_player.png'
import  styled  from 'styled-components';

const featured_number = styled.div`
font-size:270px;
  color: #ffffff;
    transform: translate(260px,170px);
    position: absolute;
  `;
const featured_first=styled.div`
    position: absolute;
    background: #0e1731;
    color: #ffffff;
    font-size: 92px;
    text-transform: uppercase;
    padding: 0px 20px;`;

class Text extends Component {

     animateNumber = () => (
          <Animate
               show={true}
               start={{
                    opacity: 0,
                    rotate: 0
               }}
               enter={{
                    opacity: [1],
                    rotate: [360],
                    timing: { duration: 1000, ease: easePolyOut }
               }}
          >
               {({ opacity, rotate }) => {
                    return (
                         <featured_number
                              style={{
                                   opacity,
                                   color: "#0000",
                                   transform: `translate(260px,170px) rotateY(${rotate}deg)`
                              }}
                         >
                              3
                         </featured_number>
                    )
               }}
          </Animate>
     );


     animateFirst = () => (
          <Animate
               show={true}
               start={{
                    opacity: 0,
                    x: 503,
                    y: 450
               }}
               enter={{
                    opacity: [1],
                    x: [273],
                    y: [450],
                    timing: { duration: 500, ease: easePolyOut }
               }}
          >
               {({ opacity, x, y }) => {
                    return (
                         <featured_first
                              style={{
                                   opacity,
                                   transform: `translate(${x}px,${y}px)`
                              }}
                         >
                              League
                         </featured_first>
                    )
               }}
          </Animate>
     )

     animateSecond = () => (
          <Animate
               show={true}
               start={{
                    opacity: 0,
                    x: 503,
                    y: 586
               }}
               enter={{
                    opacity: [1],
                    x: [273],
                    y: [586],
                    timing: { delay: 300, duration: 500, ease: easePolyOut }
               }}
          >
               {({ opacity, x, y }) => {
                    return (
                         <div className="featured_second"
                              style={{
                                   opacity,
                                   transform: `translate(${x}px,${y}px)`
                              }}
                         >
                              Championships
                         </div>
                    )
               }}
          </Animate>
     )

     animatePlayer = () => (
          <Animate
               show={true}
               start={{
                    opacity: 0,
               }}
               enter={{
                    opacity: [1],
                    timing: { delay: 800, duration: 500, ease: easePolyOut }
               }}
          >
               {({ opacity }) => {
                    return (
                         <div className="featured_player"
                              style={{
                                   opacity,
                                   background: `url(${FeaturedPlayer})`,
                                   transform: `translate(550px,201px)`
                              }}
                         >
                         </div>
                    )
               }}
          </Animate>
     )

     render() {
          return (
               <div className="featured_text">
                    {this.animatePlayer()}
                    {this.animateNumber()}
                    {this.animateFirst()}
                    {this.animateSecond()}

               </div>
          );
     }
}

export default Text;

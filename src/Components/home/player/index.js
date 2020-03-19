import React, { Component } from 'react'
import imageStripes  from'../../../Resources/images/stripes.png'
import styled from 'styled-components';
const WrapperPlayer = styled.div`
  background: #98c5e9;
  margin-top: 9px;
  padding: 50px 0px;
  background:${props => `#ffffff url(${props.bkg})`};
}

.home_matches_wrapper .home_matches {
  flex-wrap: wrap;
  display: flex;
  margin-top: 60px;
}

.home_matches_wrapper .home_matches .item {
  width: 50%;
  margin: 35px 0px;
}

.home_matches_wrapper .home_matches .item .wrapper {
  padding-right: 30px;
}

`;


export default class MeetPlayers extends Component {
     state={

     }
     render() {
          return (
               <WrapperPlayer bkg={imageStripes}>
sdsdsdsds
               </WrapperPlayer>

          )
     }
}


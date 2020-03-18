import React from 'react'
import styled from'styled-components'
import 


const Wrapper= styled.div`

     background: #98c5e9;
     margin-top: 9px;
     padding: 50px 0px;

.home_matches {
     flex-wrap: wrap;
     display: flex;
     margin-top: 60px;
}

.home_matches.item {
     width: 50%;
     margin: 35px 0px;
}

.home_matches.item.wrapper {
     padding-right: 30px;
}`


export const MatchesHome = () => {
     return (
          <Wrapper>
          <div className="container">
          </div>

          </Wrapper>
     )
}


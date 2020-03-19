import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
const Template = styled.div`
background:${props => props.bck};
font-size:${props => props.size};
color:${props => props.color};
padding:5px 10px;
  margin: 1em;
  border-radius: 6px;
display:inline-block;
font-family:Righteous ;
`;
export const Tag = (props) => {
     if (props.link) {
          return (
               <Link to={props.link_to}>
                    <Template {...props}>{props.children}</Template>

               </Link>
          )
     }
     else {
          return <Template {...props} >{props.children}</Template>

     }

}

 export const firebaseLooper=(snapshot)=>{
     const data=[];
     snapshot.forEach(childSnapshot => {
          data.push({
               ...childSnapshot.val(),
               id:childSnapshot.key

          })
});
return data
}

export const reverseArray=(array)=>{
     return array.reverse(); 
}

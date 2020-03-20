import React from 'react'
import  NavAdmain  from '../Components/admain/nav/NavAdmain'

export const Admain_layout = (props) => {
     return (
          <div className="admin_container">
               <div className="admin_left_nav">
                    <NavAdmain />
               </div>
               <div className="admin_right">
                    {props.children}
               </div>
          </div>
     )
}


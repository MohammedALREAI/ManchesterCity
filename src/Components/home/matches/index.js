import React from "react";
import Block from'./Block'
import { Tag } from "../../Ui/misc";
const MatchesHome = () => {
          return (
               <div className="home_matches_wrapper">
                    <div className="container">
                         <Tag
                              bck="#0e1731"
                              size="50px"
                              color="#ffffff"
                         >
                              Matches
                </Tag>

                         <Block />

                         <Tag
                              bck="#ffffff"
                              size="22px"
                              color="#0e1731"
                              link={true}
                              link_to="/the_team"
                         >
                              See more matches
                </Tag>

                    </div>
               </div>
          );
     };


export default MatchesHome;

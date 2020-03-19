import React, { Component } from "react";
import imageStripes from "../../../Resources/images/stripes.png";
import { Tag } from "../../Ui/misc";
import Reveal from "react-reveal";
import HomeCards from "./card";

class MeetPlayers extends Component {
  state = {
    show: false
  };

  render() {
    const the_Team_Matches = ["Meet", "The", "Players"];
    return (
      <Reveal
        fraction={0.7}
        onReveal={() => {
          this.setState({ show: true });
        }}>
        <div
          className="home_meetplayers"
          style={{
            background: `#ffffff url(${imageStripes})`
          }}>
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper">
                <HomeCards show={this.state.show} />
              </div>
              <div className="home_text_wrapper">
                {the_Team_Matches.map((item, index) => (
                  <Tag
                    bck="#0e1731"
                    size="70px"
                    color="#ffffff"
                    add={{
                      display: "inline-block",
                      marginBottom: "15px"
                    }}>
                    {item}
                  </Tag>
                ))}
              </div>
              <div>
                <Tag
                  bck="#ffffff"
                  size="27px"
                  color="#0e1731"
                  link={true}
                  link_to="/the_team"
                  add={{
                    display: "inline-block",
                    marginBottom: "27px",
                    marginTop: "50px",

                    border: "1px solid #0e1731"
                  }}>
                  Meet them here
                </Tag>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}
export default MeetPlayers;

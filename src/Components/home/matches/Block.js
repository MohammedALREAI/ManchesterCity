import React, { Component } from "react";
import { firebaseLooper, reverseArray } from "../../Ui/misc";
import { firebaseMatches } from "../../../firebase";
import Slide from "react-reveal/Slide";

class Blocks extends Component {
  state = {
    matches: []
  };

  componentDidMount() {
    firebaseMatches
      .limitToLast(6)
      .once("value")
      .then(snapshot => {
        const matches = firebaseLooper(snapshot).reverse();

        this.setState({
          matches: reverseArray(matches)
        });
      });
  }

  showMatches = matches =>
    matches
      ? matches.map(match => (
          <Slide bottom key={match.id}>
            <div className="item">
              <div className="wrapper">
                <div className="match_block">
                  <div className="match_date">
                    {match.final
                      ? match.date
                      : `Match not played yet: ${match.date}`}
                  </div>
                  <div className="match_wrapper">
                    <div className="match_top">
                      <div className="left">
                        <div
                          className="icon"
                          style={{
                            background: `url(/images/team_icons/${match.localThmb}.png)`
                          }}></div>
                        <div className="team_name">{match.local}</div>
                      </div>
                      <div className="right">
                        {match.final ? match.resultLocal : "-"}
                      </div>
                    </div>
                    <div className="match_bottom">
                      <div className="left">
                        <div
                          className="icon"
                          style={{
                            background: `url(/images/team_icons/${match.awayThmb}.png)`
                          }}></div>
                        <div className="team_name">{match.away}</div>
                      </div>
                      <div className="right">
                        {match.final ? match.resultAway : "-"}
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </Slide>
        ))
      : null;

  render() {
    const Data = this.state.matches;
    return <div className="home_matches">{this.showMatches(Data)}</div>;
  }
}

export default Blocks;

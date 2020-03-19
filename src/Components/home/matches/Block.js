import React,{Component} from 'react'
import { firebaseLooper } from '../../Ui/misc';
import { matches_Block } from "../../../HOC/MatchesBlock";
import { matchesFirebase } from "../../../firebase";
import Slide from "react-reveal/Slide";

class Blocks extends Component {
  state = {
    matches: []
  };

  componentDidMount() {
    matchesFirebase
      .limitToLast(6)
      .once("value")
      .then(snapshot => {
        const matches = firebaseLooper(snapshot).reverse();

        this.setState({
          matches
        });
      });
  }

  showMatches = matches =>
    matches
      ? matches.map(match => (
          <Slide bottom key={match.id}>
            <div className="item">
              <div className="wrapper">
                <matches_Block match={match} />
              </div>
            </div>
          </Slide>
        ))
      : null;

  render() {
    return (
      <div className="home_matches">{this.showMatches(this.state.matches)}

      <div style={{background:"red"}}></div>
      </div>
    );
  }
}

export default Blocks;

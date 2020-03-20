import React from "react";
import { Link, withRouter } from "react-router-dom";
import { ListItem } from "@material-ui/core";
import styled from "styled-components";
import { firebase } from "../../../firebase";

//withRoute used

const LI = styled(ListItem)`
  color: #ffffff;
  font-weight: 300;
  border-bottom: 1px solid #353535;
`;

 const NavAdmain = props => {
  const adminLink = [
    {
      title: "Matches",
      linkTo: "/admin_matches"
    },
    {
      title: " Add Match",
      linkTo: "/admin_matches/edit_matches"
    },
    {
      title: "Players",
      linkTo: "/admin_players"
    },
    {
      title: "Add player",
      linkTo: "/admin_matches/edit_player"
    }
  ];
  const renderItems = () =>
    adminLink.map(link => (
      <Link to={link.linkTo} key={link.linkTo}>
        <LI>{link.title}</LI>
      </Link>
    ));

  const logoutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Log out succesfull");
           props.history.push('/')
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      {renderItems()}
      <LI button style={{ color: "red" }} onClick={() => logoutHandler()}>
        Log out
      </LI>
    </div>
  );
};
export default withRouter(NavAdmain);

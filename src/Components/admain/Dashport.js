import React from "react";
import { Admain_layout as Admin } from "../../HOC/Admain_layout";
import styled from "styled-components";
const UserDashbord = styled.div`
 font-size: 40px;
  font-family: "Righteous", cursive;
  color: #d5ebfe;
  text-align: center;
  margin-top:94px;
  z-index:900;

`;
export const Dashboard = () => {
  return (
    <UserDashbord>
      <div>
        <Admin />
      </div>
    </UserDashbord>
  );
};

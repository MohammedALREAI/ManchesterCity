import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Template = styled.div`
  background: ${props => props.bck};
  font-size: ${props => props.size};
  color: ${props => props.color};
  padding: 5px 10px;
  margin: 1em;
  border-radius: 6px;
  display: inline-block;
  font-family: Righteous;
`;
export const Tag = props => {
  if (props.link) {
    return (
      <Link to={props.link_to}>
        <Template {...props} style={{ ...props.add }}>
          {props.children}
        </Template>
      </Link>
    );
  } else {
    return <Template {...props}>{props.children}</Template>;
  }
};

export const firebaseLooper = snapshot => {
  const data = [];
  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    });
  });
  return data;
};

export const reverseArray = actualArray => {
  let reversedArray = [];

  for (let i = actualArray.length - 1; i >= 0; i--) {
    reversedArray.push(actualArray[i]);
  }
  return reversedArray;
};
export const validate = element => {
  let error = [true, ""];

  if (element.validation.email) {
    const valid = /\S+@\S+\.\S+/.test(element.value);
    const message = `${!valid ? "Must be a valid email" : ""}`;
    error = !valid ? [valid, message] : error;
  }

  if (element.validation.required) {
    const valid = element.value.trim() !== "";
    const message = `${!valid ? "This field is required" : ""}`;
    error = !valid ? [valid, message] : error;
  }

  return error;
};

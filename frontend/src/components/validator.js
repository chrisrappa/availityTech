import React from 'react';

export default function checker(props){

  let openingParenthesis = [];
  let inputString = [props.inputArray];

  for(let i = 0; i < inputString.length; i++){

    if(valueOf[i] == "("){
      openingParenthesis.push([i]);
    } 

    if(valueOf[i] == ")"){
      openingParenthesis.pop([i]);
    }

  }

  if(openingParenthesis.length == 0){
    return true;
  } else {
    return false;
  }


}
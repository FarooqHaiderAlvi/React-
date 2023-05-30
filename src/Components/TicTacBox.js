import React from 'react'
import PropTypes from 'prop-types';
import { useState } from 'react';
export default function TicTacBox(props) {
  const [value,setValue]=useState(null);

  function handleClick(){
console.log("click handled");
      let temp="x";
      setValue(temp);
  }

  return (
      <button className='' onClick={handleClick}>{props.value}</button>
  )
}

TicTacBox.propTypes = {
  value: PropTypes.string.isRequired, // validate "value" as a required string prop
};
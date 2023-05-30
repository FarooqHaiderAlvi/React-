
import React from 'react'
import PropTypes from 'prop-types';
export default function PropsSending(props) {
  return (
    <div>
      <div>{props.name} +{props.value}</div>
    </div>
  )
}
PropsSending.propTypes = {
    name: PropTypes.string,
    value: PropTypes.number
  };
import React from 'react'
import PropTypes from 'prop-types';
export default function Alert(props) {
    return (
        // agr props.alert null hai to kch ni kro ni to alert show kro 
      props.alrt &&  <div className="alert alert-warning alert-dismissible fade show" role="alert">
          {props.alrt.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

Alert.propTypes = {
    alrt: PropTypes.any,

};
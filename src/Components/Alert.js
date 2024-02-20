import React from 'react'
import PropTypes from 'prop-types';
export default function Alert(props) {
    return (

        props.alrt && <div className="alert alert-warning alert-dismissible fade show" role="alert">
            {props.alrt.msg}

        </div>
    )
}

Alert.propTypes = {
    alrt: PropTypes.any,

};


 //  in js  "&&" is used as if condition suppose if 
    // props.alert is null then not render it otherwise render it 
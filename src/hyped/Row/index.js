import React from 'react';
import './style.scss'

function Row(props) {

    return (
        <div className="row">
            {props.children}
        </div>
    );

}

export {Row};
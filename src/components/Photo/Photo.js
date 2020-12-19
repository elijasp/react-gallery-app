import React from 'react';

const photo = (props) => {
    return(
        <li>
            <img src={props.url} alt={props.alt}/>
        </li>
    );
}

export default photo;
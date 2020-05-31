import React from 'react';

import './card.styles.css';

// single cards displaying relevant information of the monster passed in the props
export const Card = (props) => {
    return (
        <div className="card-container">
            <img alt={props.name} src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}


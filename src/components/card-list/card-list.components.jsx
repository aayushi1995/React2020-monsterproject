import React from 'react';

import {Card} from '../card/card.components';

import './card-list.styles.css';

// cards container which loops through the monster array and then passing each item of the array to Card Component
export const CardList = (props) => {
    return (
        <div className='card-list'>
            {props.monsters.map(monster => (
                <Card key={monster.id} monster={monster}/>
            ))}
        </div>
    )
};
import React from 'react';
import { Cardicon, Styledcard } from './styled/Fourcard.styled';

export const Featurecard = ({title,description,icon}) => {
  return (
    <Styledcard>
        <h2>
            {title}
        </h2>
        <p>
            {description}
        </p>
        <Cardicon src={icon} alt={icon}/>
    </Styledcard>
  )
}

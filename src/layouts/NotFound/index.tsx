// Geral
import React from 'react';

// Images
import img404 from '../../assets/404.gif';

// Styleds
import { _NotFound } from './styled';
import { _MinHeight } from '../../styled';


// interfaces
import { NotFoundType } from '../../interfaces/NotFound';

const notFound:React.FC<NotFoundType> = ({title}) => {
    return (
        <_MinHeight>
            <_NotFound>
                <img src={img404} alt="" />
                <p>~ {title} ~</p>
            </_NotFound>
        </_MinHeight>
    )
}

export default notFound
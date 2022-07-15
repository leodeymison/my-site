// Geral
import React from 'react';

// Images
import img404 from '../../assets/404.gif';

// Styleds
import { NotFoundStyled } from './styled';
import { MinHeightStyled } from '../../styled';


// interfaces
import { NotFoundType } from '../../interfaces/NotFound';

const notFound:React.FC<NotFoundType> = ({title}) => {
    return (
        <MinHeightStyled>
            <NotFoundStyled>
                <img src={img404} alt="" />
                <p>~ {title} ~</p>
            </NotFoundStyled>
        </MinHeightStyled>
    )
}

export default notFound
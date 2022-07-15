import React from 'react';

// styled
import { FooterStyled } from './styled';

// Interfaces
import { FooterType } from '../../interfaces/Footer';

const Footer:React.FC<FooterType> = ({ footer }) => {
    return (
        <FooterStyled>
            {footer} - {new Date().getFullYear()}
        </FooterStyled>
    )
}

export default Footer
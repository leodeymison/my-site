import React from 'react';

// styled
import { _Footer } from './styled';

// Interfaces
import { FooterType } from '../../interfaces/Footer';

const Footer:React.FC<FooterType> = ({ footer }) => {
    return (
        <_Footer>
            {footer} - {new Date().getFullYear()}
        </_Footer>
    )
}

export default Footer
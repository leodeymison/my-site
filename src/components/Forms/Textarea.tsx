import React from 'react';

// Styled
import { TextareaStyled } from './styled';

// interfaces
import { TextareaType } from '../../interfaces/Textarea';

const Textarea:React.FC<TextareaType> = ({ placeholder, name }) => {
    return <TextareaStyled placeholder={placeholder} name={name}></TextareaStyled>
}

export default Textarea
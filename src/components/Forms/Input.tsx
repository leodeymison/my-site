import React from 'react';
// styled
import { InputStyled } from './styled';

// interfaces
import { InputType } from '../../interfaces/Input';

const Input:React.FC<InputType> = ({type, placeholder, value, name, hover}) => {

    return (
        <>
            <InputStyled 
                hoverOption={hover || false} 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                name={name} 
            />
        </>
        
    )
}

export default Input
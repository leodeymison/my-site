import React from 'react';

// Componets
import BoxInfor from '../../components/Box/BoxInfor';

// Components
import { MinHeightStyled } from '../../styled';

// interfaces
import { ContactType } from '../../interfaces/Contact';

const Contact:React.FC<ContactType> = ({ contact }) => {
    return (
        <MinHeightStyled>
            <BoxInfor 
                title={contact.title}
                contact={contact}
            />
        </MinHeightStyled>
    )
}

export default Contact
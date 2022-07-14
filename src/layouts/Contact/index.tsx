import React from 'react';

// Componets
import BoxInfor from '../../components/Box/BoxInfor';

// Components
import { _MinHeight } from '../../styled';

// interfaces
import { ContactType } from '../../interfaces/Contact';

const Contact:React.FC<ContactType> = ({ contact }) => {
    return (
        <_MinHeight>
            <BoxInfor 
                title={contact.title}
                contact={true}
            />
        </_MinHeight>
    )
}

export default Contact
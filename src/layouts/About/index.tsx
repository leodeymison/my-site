import React from 'react';

// Componets
import BoxInfor from '../../components/Box/BoxInfor';

// Components
import { _MinHeight } from '../../styled';

// interfaces
import { AboutType } from '../../interfaces/About';

const About:React.FC<AboutType> = ({ about, tec }) => {
    return (
        <_MinHeight>
            <BoxInfor 
                title={about.title}
                body={about.body}
            />
            <BoxInfor 
                title={tec.title}
                tecs={tec.tecs}
            />
        </_MinHeight>
    )
}

export default About
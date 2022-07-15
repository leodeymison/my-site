import React from 'react';

// Componets
import BoxInfor from '../../components/Box/BoxInfor';

// interfaces
import { AboutType } from '../../interfaces/About';

const About:React.FC<AboutType> = ({ about, tec }) => {
    return (
        <>
            <BoxInfor 
                title={about.title}
                body={about.body}
            />
            <BoxInfor 
                title={tec.title}
                tecs={tec.tecs}
            />
        </>
    )
}

export default About
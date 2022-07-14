import React from 'react';

// Componets
import BoxInfor from '../../components/Box/BoxInfor';

// Components
import { _Container } from '../../styled';

// interfaces
import { HomeType } from '../../interfaces/Home';

const Home:React.FC<HomeType> = ({lang}) => {

    return (
        <>
            <BoxInfor 
                title={lang.about.title}
                body={lang.about.body}
            />
            <BoxInfor 
                title={lang.tec.title}
                tecs={lang.tec.tecs}
            />
            <BoxInfor 
                title={lang.projects.title}
                projects={lang.projects.list}
            />
            <BoxInfor 
                title={lang.contact.title}
                contact={true}
            />
        </>
    )
}

export default Home
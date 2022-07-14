import React from 'react';

// Componets
import BoxInfor from '../../components/Box/BoxInfor';

// Components
import { _Container } from '../../styled';

// interfaces
import { HomeType } from '../../interfaces/Home';

const Home:React.FC<HomeType> = ({ pags }) => {

    return (
        <>
            <BoxInfor 
                title={pags.about.title}
                body={pags.about.body}
            />
            <BoxInfor 
                title={pags.tec.title}
                tecs={pags.tec.tecs}
            />
            <BoxInfor 
                title={pags.projects.title}
                projects={pags.projects.list}
            />
            <BoxInfor 
                title={pags.contact.title}
                contact={true}
            />
        </>
    )
}

export default Home
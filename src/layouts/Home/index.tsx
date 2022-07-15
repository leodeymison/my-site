import React from 'react';

// Componets
import BoxInfor from '../../components/Box/BoxInfor';

// interfaces
import { HomeType } from '../../interfaces/Home';

const Home:React.FC<HomeType> = ({ pags }) => {

    return (
        <>
            <BoxInfor 
                title={pags.who.title}
                body={pags.who.body}
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
                contact={pags.contact}
            />
        </>
    )
}

export default Home
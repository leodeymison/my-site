import React from 'react';

// Componets
import BoxInfor from '../../components/Box/BoxInfor';

// Components
import { MinHeightStyled } from '../../styled';

// interfaces
import { ProjectType } from '../../interfaces/Projects';

const Project:React.FC<ProjectType> = ({ projects }) => {
    return (
        <MinHeightStyled>
            <BoxInfor 
                title={projects.title}
                projects={projects.list}
            />
        </MinHeightStyled>
    )
}

export default Project
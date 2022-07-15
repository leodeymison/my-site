import React from 'react';

// Componets
import BoxInfor from '../../components/Box/BoxInfor';

// Components
import { _MinHeight } from '../../styled';

// interfaces
import { ProjectType } from '../../interfaces/Projects';

const Project:React.FC<ProjectType> = ({ projects }) => {
    return (
        <_MinHeight>
            <BoxInfor 
                title={projects.title}
                projects={projects.list}
            />
        </_MinHeight>
    )
}

export default Project
// import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

// ds
import { FormatDataMilegundos } from '../../../utils/data.ds';

// styleds
import { TableStyled, BoxStyled, NavegationStyled } from '../styled';

// Graphql
import Client from '../../../config/client-graphql';
import { gql } from '@apollo/client';
import { CategoryGetAll } from '../schemas/Category';

//Components
import ButtonFunc from '../../../components/Forms/ButtonFunc';
import ButtonRouter from '../../../components/Forms/ButtonRouter';

// icons
import { BiTrashAlt } from 'react-icons/bi'
import { FiEdit2 } from 'react-icons/fi'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { ContainerStyled } from '../../../styled';
import { Link } from 'react-router-dom';

const AdminCategorys = () => {
    const [categorys, setCategorys] = useState<Array<any>>()

    useEffect(() => {
        getCategorysStart()
    }, [])

    function getCategorysStart(){
        Client.query({
            query: gql`
                query CategorysAll {
                    ${CategoryGetAll}
                }
            `
        }).then(res => {
            setCategorys(res.data.CategoryGetAll)
        })
    }
    return (
        <BoxStyled>
            <NavegationStyled>
                <Link to="/admin">
                    <AiOutlineArrowLeft />
                </Link>
            </NavegationStyled>
            <h1>Categorias</h1>
            <TableStyled>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>
                            lang
                            <select>
                                <option value="all">Todos</option>
                                <option value="pt-br">Português</option>
                                <option value="en">English</option>
                            </select>
                        </th>
                        <th>Criado</th>
                        <th>Atualizado</th>
                        <th>Controles</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categorys?.map(category => (
                            <tr key={category._id}>
                                <td>{category.name}</td>
                                <td>{category.lang}</td>
                                <td>{FormatDataMilegundos(category.createdAt)}</td>
                                <td>{FormatDataMilegundos(category.updatedAt)}</td>
                                <td>
                                    <ContainerStyled>
                                        <ButtonFunc padding='1em' text={<BiTrashAlt />} />
                                        <ButtonRouter url='/' text={<FiEdit2 />} /> 
                                    </ContainerStyled>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </TableStyled>
        </BoxStyled>
    )
}

export default AdminCategorys
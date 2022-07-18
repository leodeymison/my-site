// import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// ds
import { FormatDataMilegundos } from '../../../utils/data.ds';

// styleds
import { TableStyled, BoxStyled, NavegationStyled } from '../styled';
import { ContainerStyled } from '../../../styled';


// Graphql
import Client from '../../../config/client-graphql';
import { gql } from '@apollo/client';
import { ArticleGetAll } from '../schemas/Articles';

//Components
import ButtonFunc from '../../../components/Forms/ButtonFunc';
import ButtonRouter from '../../../components/Forms/ButtonRouter';

// icons
import { BiTrashAlt } from 'react-icons/bi'
import { FiEdit2 } from 'react-icons/fi'
import { FcLike } from 'react-icons/fc'
import { AiOutlineEye, AiOutlineArrowLeft } from 'react-icons/ai'
import { TbLanguageHiragana } from 'react-icons/tb'

const AdminArticles = () => {
    const [articles, setArticles] = useState<Array<any>>()

    useEffect(() => {
        getCategorysStart()
    }, [])

    function getCategorysStart(){
        Client.query({
            query: gql`
                query ArticlesAll {
                    ${ArticleGetAll}
                }
            `
        }).then(res => {
            setArticles(res.data.ArticleGetAll)
        })
    }
    return (
        <BoxStyled>
            <NavegationStyled>
                <Link to="/admin">
                    <AiOutlineArrowLeft />
                </Link>
            </NavegationStyled>
            <h1>Artigos</h1>
            <TableStyled height='50%'>
                <thead>
                    <tr>
                        <th>Imagem de capa</th>
                        <th>name</th>
                        <th>
                            lang
                            <select>
                                <option value="all">Todos</option>
                                <option value="pt-br">Português</option>
                                <option value="en">English</option>
                            </select>
                        </th>
                        <th>likes</th>
                        <th>Visualizações</th>
                        <th>Categoria</th>
                        <th>Criado</th>
                        <th>Atualizado</th>
                        <th>Controles</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        articles?.map(article => (
                            <tr key={article._id}>
                                <td>
                                    <img src={article.image} alt={article.name} />
                                </td>
                                <td>{article.name}</td>
                                <td><TbLanguageHiragana />{article.lang}</td>
                                <td><FcLike />{article.likes}</td>
                                <td><AiOutlineEye />{article.views}</td>
                                <td>{article.categoryId}</td>
                                <td>{FormatDataMilegundos(article.createdAt)}</td>
                                <td>{FormatDataMilegundos(article.updatedAt)}</td>
                                <td>
                                    <ContainerStyled>
                                        <ButtonFunc padding='1em' text={<BiTrashAlt />} />
                                        <ButtonRouter url='/' text={<FiEdit2 />} /> 
                                        <ButtonRouter url='/' text={<AiOutlineEye />} /> 
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

export default AdminArticles
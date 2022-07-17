import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// styleds
import { 
    TitleStyled, 
    InformationsStyled, 
    FlexBoxStyled,
    CreateCommentStyled,
    CommentStyled
} from "./styled";

// Graphql
import { gql } from "@apollo/client";
import Client from '../../config/client-graphql';
import { ArticleGetOne } from './schemas/Article';

// Icones
import { AiOutlineEye, AiOutlineArrowLeft, AiOutlineHeart, AiOutlineWechat } from "react-icons/ai";
import { BsChatDots } from 'react-icons/bs';
import { FiEdit2 } from 'react-icons/fi';
import { CgTrashEmpty } from 'react-icons/cg';
import {  HiSpeakerphone } from 'react-icons/hi'

// Components
import Textarea from "../../components/Forms/Textarea";
import Input from "../../components/Forms/Input";
import ButtonFunc from "../../components/Forms/ButtonFunc";
import NavbarLogin from "../Navbar/Login";

const Article = () => {
    const params = useParams<any>()
    const [article, setArticle] = useState<any>({})

    useEffect(() => {
        Client.query({
            query: gql`
                query ($id: String!) {
                    ${ArticleGetOne}
                }
            `,
            variables: {
                id: params.id
            }
        }).then(res => {
            setArticle(res.data.ArticleGetOne)
        })
    }, [params])

    return (
        <>
            <FlexBoxStyled justifyContent="space-between">
                <Link to="/blog">
                    <FlexBoxStyled alignItens="center">
                        <AiOutlineArrowLeft />
                        Voltar
                    </FlexBoxStyled>
                </Link>
                <NavbarLogin />
            </FlexBoxStyled>
            <TitleStyled>
                <h1>{article.name}</h1>
            </TitleStyled>
            <div>
                <p>
                    {article.body}
                </p>
            </div>
            <InformationsStyled>
                <FlexBoxStyled  alignItens="center">
                    <p>
                        <AiOutlineEye /> {article.views}
                    </p>
                    <p>
                        <BsChatDots /> {0}
                    </p>
                    <ButtonFunc text={<><AiOutlineHeart /> {0}</>} padding="4px 10px" />
                </FlexBoxStyled>
                
                <p>
                    {article.createdAt}
                </p>
            </InformationsStyled>
            <br /><br />
            <h2>Comentar</h2>
            <br />
            <CreateCommentStyled>
                <Textarea name="comment" placeholder="Escrever..."></Textarea>
                <Input type="submit" value="Enviar" hover={true} />
            </CreateCommentStyled>
            <br /><br />
            <h2>Comentários</h2>
            <br />
            <CommentStyled>
                <li>
                    <div>
                        <img 
                            src="https://th.bing.com/th/id/OIP.1rphQK8P3hLxn2t-4o4q8wHaHa?pid=ImgDet&rs=1" 
                            alt="foto de Leodeymison A." />
                        <h2>Leodeymison A.</h2>
                        <p>
                            O que é o coeficiente de Pearson? O coeficiente de Pearson é um tipo de 
                            coeficiente de correlação que representa a relação entre duas variáveis 
                            O que é o coeficiente de Pearson? O coeficiente de Pearson é um tipo de 
                            coeficiente de correlação que representa a relação entre duas variáveis 
                            O que é o coeficiente de Pearson? O coeficiente de Pearson é um tipo de 
                            coeficiente de correlação que representa a relação entre duas variáveis 
                        </p>
                        <FlexBoxStyled  alignItens="center" padding="10px 0 0 0">
                            <p>
                                <AiOutlineHeart /> {0}
                            </p>
                            <p>
                                <AiOutlineWechat /> {0}
                            </p>
                            <ButtonFunc text={
                                <>
                                    <HiSpeakerphone />
                                    Responder
                                </>
                            } padding="4px 10px" />
                            <ButtonFunc text={
                                <>
                                    <FiEdit2 />
                                    Editar
                                </>
                            } padding="4px 10px" />
                            <ButtonFunc text={
                                <>
                                    <CgTrashEmpty />
                                    Excluir
                                </>
                            } padding="4px 10px" />
                        </FlexBoxStyled>
                    </div>
                    <br />
                    <CommentStyled margin="0 0 0 30px">
                        <li>
                            <div>
                                <img 
                                    src="https://th.bing.com/th/id/OIP.1rphQK8P3hLxn2t-4o4q8wHaHa?pid=ImgDet&rs=1" 
                                    alt="foto de Leodeymison A." />
                                <h2>Leodeymison A.</h2>
                                <p>
                                    O que é o coeficiente de Pearson? O coeficiente de Pearson é um tipo de 
                                    coeficiente de correlação que representa a relação entre duas variáveis 
                                    O que é o coeficiente de Pearson? O coeficiente de Pearson é um tipo de 
                                    coeficiente de correlação que representa a relação entre duas variáveis 
                                    O que é o coeficiente de Pearson? O coeficiente de Pearson é um tipo de 
                                    coeficiente de correlação que representa a relação entre duas variáveis 
                                </p>
                                <FlexBoxStyled  alignItens="center" padding="10px 0 0 0">
                                    <p>
                                        <AiOutlineHeart /> {0}
                                    </p>
                                    <ButtonFunc text={
                                        <>
                                            <FiEdit2 />
                                            Editar
                                        </>
                                    } padding="4px 10px" />
                                    <ButtonFunc text={
                                        <>
                                            <CgTrashEmpty />
                                            Excluir
                                        </>
                                    } padding="4px 10px" />
                                </FlexBoxStyled>
                            </div>
                        </li>
                    </CommentStyled>
                </li>
            </CommentStyled>
        </>
    )
}

export default Article
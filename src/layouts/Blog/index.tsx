import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// styleds
import { 
    TitleStyled, 
    CategorysStyled, 
    ProductsStyled, 
    CategorysLiStyled, 
    IconMenuStyled, 
    FlexBoxStyled,
    SpanStyled,
    ArticleCleanPStyled
} from "./styled";

// icons
import { AiOutlineMenu, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineMenuOpen } from 'react-icons/md'
import { BsChatDots } from 'react-icons/bs'

// Components
import Input from "../../components/Forms/Input";
import NavbarLogin from "../Navbar/Login";

// Graphql
import { gql } from "@apollo/client";
import Client from '../../config/client-graphql';
import { ArticleGetAll, ArticleGetFilter } from './schemas/Article';
import { CategoryGetAll } from './schemas/Category';

type BlogType = {
    lang: string
}

const Blog:React.FC<BlogType> = ({ lang }) => {
    const [menu, setMenu] = useState(false);
    const [menuActive, setMenuActive] = useState<string>('all')
    const [categorys, setCategorys] = useState<Array<any>>([])
    const [articles, setArticles] = useState<Array<any>>([])

    function visualization(id:string){
        Client.mutate({
            mutation: gql`
                mutation ($id: String!) {
                    ArticleUpdateViews (
                        id: $id
                    ) {
                        acknowledged
                    }
                }
            `,
            variables: {
                id
            }
        })
    }

    function openClosedCategory(){
        setMenu(!menu)
    }

    useEffect(() => {
        changeAllCategory()
    }, [])
    
    function changeAllCategory(){
        setMenu(false)
        setMenuActive("all")
        Client.query({
            query: gql`
                query {
                    ${ArticleGetAll}
                    ${CategoryGetAll}
                }
            `
        }).then(res => {
            const categoryFilter = res.data.CategoryGetAll.filter((categ:any) => categ.lang === lang)
            setCategorys(categoryFilter)
            const articleFilter = res.data.ArticleGetAll.filter((arti:any) => arti.lang === lang)
            setArticles(articleFilter)
        })
    }

    function changeCategory(id:any){
        setMenu(false)
        setMenuActive(id)
        Client.query({
            query: gql`
                query ($category: String!) {
                    ${ArticleGetFilter}
                }
            `,
            variables: {
                category: id
            }
        }).then(res => {
            const articleFilter = res.data.ArticleGetFilter.filter((arti:any) => arti.lang === lang)
            setArticles(articleFilter)
        })
    }

    return (
        <>
            <FlexBoxStyled justifyContent="flex-end">
                <NavbarLogin />
            </FlexBoxStyled>
            <TitleStyled>
                <h1>Blog sobre tecnologia</h1>
            </TitleStyled>
            <CategorysStyled>
                <IconMenuStyled onClick={openClosedCategory}>
                    {
                        !menu ? (
                            <AiOutlineMenu />
                        ) : (
                            < MdOutlineMenuOpen />
                        )
                    }
                    
                </IconMenuStyled>
                {
                    menu && (
                        <ul>
                            <CategorysLiStyled onClick={changeAllCategory} active={menuActive === "all" ? true : false}>Todas</CategorysLiStyled>
                            {
                                categorys.map((category) => (
                                    category && (
                                        <CategorysLiStyled 
                                            active={menuActive === category._id ? true : false}
                                            onClick={() => changeCategory(category._id)} 
                                            key={category._id}>
                                                {category.name}
                                        </CategorysLiStyled>
                                    )
                                    
                                ))
                            }
                        </ul>
                    )
                }
                <form action="">
                    <Input type="text" hover={false} name="search" placeholder="Pesquisar" />
                </form>
            </CategorysStyled>
            <ProductsStyled>
                {
                    articles.length !== 0 ? (articles.map(article => (
                        <Link key={article._id} to={`/article/${article._id}`} onClick={() => visualization(article._id)}>
                            <img 
                                src={article.image}
                                alt={article.name} />
                            <FlexBoxStyled  alignItens="center" justifyContent="space-between" padding="10px 5px">
                                <SpanStyled>Novo</SpanStyled>
                                <SpanStyled>Mais vistos</SpanStyled>
                            </FlexBoxStyled>
                            <h2>{article.name}</h2>
                            <p>
                                {article.description}
                            </p>
                            <FlexBoxStyled  alignItens="center" padding="5px">
                                <p>
                                    <AiOutlineEye /> {article.views}
                                </p>
                                <p>
                                    <BsChatDots /> {0}
                                </p>
                                <p>
                                    <AiOutlineHeart /> {article.likes}
                                </p>
                            </FlexBoxStyled>
                        </Link>
                    ))) : (
                        <ArticleCleanPStyled>Nenhum artigo nessa categoria</ArticleCleanPStyled>
                    )
                }
            </ProductsStyled>
        </>
    )
}

export default Blog
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// styleds
import { 
    TitleStyled, 
    CategorysStyled, 
    ProductsStyled, 
    CategorysLiStyled, 
    IconMenuStyled, 
    FlexBoxStyled,
    SpanStyled
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
import { ArticleGetAll } from './schemas/Article';
import { CategoryGetAll } from './schemas/Category';

const Blog = () => {
    const [menu, setMenu] = useState(false);
    const [categorys, setCategorys] = useState<Array<any>>([])
    const [articles, setArticles] = useState<Array<any>>([])

    function openClosedCategory(){
        setMenu(!menu)
    }

    useEffect(() => {
        Client.query({
            query: gql`
                query {
                    ${ArticleGetAll}
                    ${CategoryGetAll}
                }
            `
        }).then(res => {
            setCategorys(res.data.CategoryGetAll)
            setArticles(res.data.ArticleGetAll)
        })
    }, [])

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
                            <CategorysLiStyled active={true}>Todas</CategorysLiStyled>
                            {
                                categorys.map(category => (
                                    <CategorysLiStyled key={category.id}>{category.name}</CategorysLiStyled>
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
                    articles.map(article => (
                        <Link key={article.id} to={`/article/${article.id}`}>
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
                                    <AiOutlineHeart /> {0}
                                </p>
                            </FlexBoxStyled>
                        </Link>
                    ))
                }
            </ProductsStyled>
        </>
    )
}

export default Blog
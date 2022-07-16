import { useState } from "react";
import { Link } from "react-router-dom";

// styleds
import { TitleStyled, CategorysStyled, ProductsStyled, CategorysLiStyled, IconMenuStyled } from "./styled";

// icons
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineMenuOpen } from 'react-icons/md'

// Components
import Input from "../../components/Forms/Input";

const Blog = () => {
    const [menu, setMenu] = useState(false)
    const [categorys, setCategorys] = useState(
        [
            {
                name: "Inteligencia artificial"
            },
            {
                name: "Python"
            }
        ]
    )

    function openClosedCategory(){
        setMenu(!menu)
    }

    return (
        <>
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
                                    <CategorysLiStyled>{category.name}</CategorysLiStyled>
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
                <Link to="/">
                    <img 
                        src="https://www.bmj.com/content/bmj/345/bmj.e4483/F1.large.jpg" 
                        alt="" />
                    <div>
                        <span>Novo</span>
                        <span>Mais vistos</span>
                    </div>
                    <h2>Coeficiente de relação de pearson</h2>
                    <p>
                        O que é o coeficiente de Pearson? O coeficiente de Pearson é um tipo 
                        de coeficiente de correlação que representa a relação entre duas variáveis 
                        ​​que são medidas no mesmo intervalo ou escala de razão.
                    </p>
                </Link>
                
                <Link to="/">
                    <img 
                        src="https://www.bmj.com/content/bmj/345/bmj.e4483/F1.large.jpg" 
                        alt="" />
                    <div>
                        <span>Novo</span>
                        <span>Mais vistos</span>
                    </div>
                    <h2>Coeficiente de relação de pearson</h2>
                    <p>
                        O que é o coeficiente de Pearson? O coeficiente de Pearson é um tipo 
                        de coeficiente de correlação que representa a relação entre duas variáveis 
                        ​​que são medidas no mesmo intervalo ou escala de razão.
                    </p>
                </Link>
                <Link to="/">
                    <img 
                        src="https://www.bmj.com/content/bmj/345/bmj.e4483/F1.large.jpg" 
                        alt="" />
                    <div>
                        <span>Novo</span>
                        <span>Mais vistos</span>
                    </div>
                    <h2>Coeficiente de relação de pearson</h2>
                    <p>
                        O que é o coeficiente de Pearson? O coeficiente de Pearson é um tipo 
                        de coeficiente de correlação que representa a relação entre duas variáveis 
                        ​​que são medidas no mesmo intervalo ou escala de razão.
                    </p>
                </Link>
                <Link to="/">
                    <img 
                        src="https://www.bmj.com/content/bmj/345/bmj.e4483/F1.large.jpg" 
                        alt="" />
                    <div>
                        <span>Novo</span>
                        <span>Mais vistos</span>
                    </div>
                    <h2>Coeficiente de relação de pearson</h2>
                    <p>
                        O que é o coeficiente de Pearson? O coeficiente de Pearson é um tipo 
                        de coeficiente de correlação que representa a relação entre duas variáveis 
                        ​​que são medidas no mesmo intervalo ou escala de razão.
                    </p>
                </Link>
                <Link to="/">
                    <img 
                        src="https://www.bmj.com/content/bmj/345/bmj.e4483/F1.large.jpg" 
                        alt="" />
                    <div>
                        <span>Novo</span>
                        <span>Mais vistos</span>
                    </div>
                    <h2>Coeficiente de relação de pearson</h2>
                    <p>
                        O que é o coeficiente de Pearson? O coeficiente de Pearson é um tipo 
                        de coeficiente de correlação que representa a relação entre duas variáveis 
                        ​​que são medidas no mesmo intervalo ou escala de razão.
                    </p>
                </Link>
            </ProductsStyled>
        </>
    )
}

export default Blog
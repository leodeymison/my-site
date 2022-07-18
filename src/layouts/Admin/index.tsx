import { Link } from 'react-router-dom'

// styleds
import { ListStyled, BoxStyled } from './styled';

const Admin = () => {
    return (
        <BoxStyled>
            <h1>Administrador</h1>
            <ListStyled>
                <li>
                    <Link to="/admin/categorys">
                        Categorias
                    </Link>
                </li>
                <li>
                    <Link to="/admin/articles">
                        Artigos
                    </Link> 
                </li>
                <li>
                    <Link to="/admin/users">
                        Usuários
                    </Link>
                </li>
            </ListStyled>
        </BoxStyled>
    )
}

export default Admin
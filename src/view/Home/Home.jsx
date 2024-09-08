//styled
import { ContainerHome } from './home.styled';

import { Link } from 'react-router-dom';

function Home() {
    return(
        <ContainerHome>
            <h1>home</h1>
            <Link to='/manRutines'>
                <button>Hombre</button>
            </Link>
            <Link to='/womenRutines'>
                <button>Mujer</button>
            </Link>
        </ContainerHome>
    )
}

export default Home;
import { ContainerHome, Title } from './home.styled';
//components
import CardGym from '../../components/CardGym/CardGym';
//img
import imgPecho from '../../assets/img/imgPecho.jpg';
import imgEspalda from '../../assets/img/imgEspalda.jpg';
import imgPierna from '../../assets/img/imgPierna.jpg';
import gymBackground from '../../assets/img/gym-background.jpg';
import buffaloLogo from '../../assets/img/buffaloLogo.png';

function Home() {
    return (
        <ContainerHome style={{ backgroundImage: `url(${gymBackground})` }}>
            <div className=" logo top-1 left-1">
                <img src={buffaloLogo} alt="Buffalo Gym Logo" className="w-16 h-16" />
            </div>

            {/* Título principal */}
            <Title>
                <span className="text-orange-500">R</span>UTINAS
            </Title>

            {/* Cards */}
            <CardGym imgBackground={imgPecho} letter='T' title='orso' letterSub='P' subtitle='echo-Hombro-Trapecio' link='/rutinaPecho'></CardGym>
            <CardGym imgBackground={imgEspalda} letter='T' title='orso' letterSub='E' subtitle='spalda-Biceps-Triceps' link='/rutinaEspalda'></CardGym>
            <CardGym imgBackground={imgPierna} letter='P' title='ierna' letterSub='C' subtitle='uadriceps-Femorales-Gemelos' link='/rutinaPierna'></CardGym>

        </ContainerHome>
    );
}

export default Home;

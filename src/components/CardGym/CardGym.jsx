import { ContainerCardGym } from './cardGym.styled';
import { Link } from 'react-router-dom';

const CardGym = ({imgBackground, letter, title,letterSub,subtitle, link}) => {
    return(
        <ContainerCardGym>
            <Link to={link}>
                <div style={{ backgroundImage: `url(${imgBackground})` }} className='flex flex-col items-center justify-end bg-cover bg-center bg-no-repeat sm:w-96 w-72 h-44 rounded-3xl hover:scale-110 transition-transform duration-300 ease-in-out'>
                    <div className='gradient flex items-center justify-center h-2/4 w-full rounded-b-3xl'>
                        <div className='flex items-center justify-between w-full px-4'>
                            <div>
                                <p className='text-3xl font-title uppercase'>
                                    <span className="text-orange-500">{letter}</span>{title}
                                </p>
                                <p className='text-2xl font-title'>
                                    <span className="text-orange-500">{letterSub}</span>{subtitle}
                                </p>
                            </div>
                            <svg className='text-3xl' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="white"><path d="m12.052 14.829l1.414 1.414L17.71 12l-4.243-4.243l-1.414 1.415L13.88 11H6.343v2h7.537z"/><path fill-rule="evenodd" d="M19.778 19.778c4.296-4.296 4.296-11.26 0-15.556s-11.26-4.296-15.556 0s-4.296 11.26 0 15.556s11.26 4.296 15.556 0m-1.414-1.414A9 9 0 1 0 5.636 5.636a9 9 0 0 0 12.728 12.728" clip-rule="evenodd"/></g></svg>
                        </div>
                    </div>
                </div>
            </Link>
        </ContainerCardGym>
    )
}

export default CardGym;
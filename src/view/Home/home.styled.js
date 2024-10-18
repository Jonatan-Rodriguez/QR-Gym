import styled from 'styled-components';

export const ContainerHome = styled.div`
    /* width: 100vw;
    min-height: 100vh;
    max-height: 150vh; */
    width: auto;
    min-height: 100vh;
    height: auto;
    padding: 3% 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    row-gap: 15px;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: relative;

    .logo{
        position: absolute;
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        z-index: 1;
    }

    & > * {
        position: relative;
        z-index: 2;
    }

`;

export const Title = styled.h1`
    font-family: 'Bebas Neue', sans-serif;
    font-size: 6rem;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    span {
        color: #f97316;
    }
`;

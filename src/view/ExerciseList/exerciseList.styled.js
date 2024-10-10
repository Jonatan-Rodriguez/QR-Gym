import styled from 'styled-components';

export const ContainerExerciseList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #F5F5F5;
    min-height: 100vh;
    padding: 3% 0;
`;

export const ExerciseCard = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    padding: 1rem;
    cursor: pointer;
    column-gap: 50px;

    img {
        width: 100px;
        height: 80px;
    }
    h2 {
        color: #333;
    }
    &:hover {
        background-color: #e5e5e5;
    }
`;

export const DropdownMenu = styled.div`
    background-color: white;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 13px;
    padding: 4% 5%;
`;

export const Title = styled.h1`
    font-family: 'Bebas Neue', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    color: black;

    span {
        color: #f97316;
    }
`;

import React, { useState } from 'react';
import { ContainerExerciseList, ExerciseCard, DropdownMenu, Title, BoxFont } from './exerciseList.styled';
import { Link } from 'react-router-dom';
import Checkbox from '../../components/Checkbox/Checkbox';

const ExerciseList = ({ exercises, letter, title }) => {
    return (
        <ContainerExerciseList>
            <div className='flex justify-between items-center border border-black h-14'>
                <Link to='/'>
                    <svg className='text-3xl ml-2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <g fill="black">
                            <path d="m11.948 14.829l-1.414 1.414L6.29 12l4.243-4.243l1.414 1.415L10.12 11h7.537v2H10.12z"/>
                            <path fillRule="evenodd" d="M4.222 19.778c-4.296-4.296-4.296-11.26 0-15.556s11.26-4.296 15.556 0s4.296 11.26 0 15.556s-11.26 4.296-15.556 0m1.414-1.414A9 9 0 1 1 18.364 5.636A9 9 0 0 1 5.636 18.364" clipRule="evenodd"/>
                        </g>
                    </svg>
                </Link>
                <Title className='text-4xl'>
                    <span>{letter}</span>{title}
                </Title>
                <div></div>
            </div>
            {exercises.map((exercise, index) => (
                <ExerciseCardComponent key={index} exercise={exercise} />
            ))}
        </ContainerExerciseList>
    );
};

const ExerciseCardComponent = ({ exercise }) => {
    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [completedSets, setCompletedSets] = useState(Array(exercise.series).fill(false));

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleCheckboxChange = (index) => {
        const updatedSets = [...completedSets];
        updatedSets[index] = !updatedSets[index]; // Cambia el estado del checkbox

        // Actualiza el estado de count basándose en el nuevo estado de completedSets
        const newCount = updatedSets.filter(Boolean).length; // Cuenta cuántos checkboxes están marcados
        setCount(newCount); // Actualiza el count
        setCompletedSets(updatedSets); // Actualiza completedSets
    };

    return (
        <div>
            <ExerciseCard className='' onClick={toggleDropdown}>
                <div>
                    <svg className='text-3xl' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 10l5 5m0 0l5-5"/>
                    </svg>
                </div>
                <img className='' src={exercise.img} alt={exercise.name} />
                <BoxFont>
                    <p className='text-3xl font-bold'>{exercise.name}</p>
                    <div className='text-lg '>
                        <p><span>{count}</span> / {exercise.series} Terminado</p>
                    </div>
                </BoxFont>
            </ExerciseCard>

            {/* Menú desplegable */}
            {isOpen && (
                <DropdownMenu>
                    {Array.from({ length: exercise.series }, (_, i) => (
                        <BoxFont
                            key={i}
                            className={`flex items-center justify-around w-full h-20 p-8 rounded-lg transition-colors duration-300 ${
                                completedSets[i] ? 'bg-green-300' : 'bg-[#F5F5F5]'
                            }`}
                        >
                            <div className='flex items-center justify-center gap-x-10'>
                                <Checkbox 
                                    type="checkbox"
                                    checked={completedSets[i]}
                                    onChange={() => handleCheckboxChange(i)}
                                />
                                <div className={`text-3xl transition-colors duration-300 ${completedSets[i] ? 'text-white' : 'text-black'}`}><p>{i + 1}</p></div>
                            </div>
                            <div className='flex items-center justify-center gap-x-10 text-3xl'>
                                <div className='flex items-center justify-center text-3xl w-32 h-12 bg-[#6C757D30] rounded-lg '>
                                    <p className={`text-3xl transition-colors duration-300 ${completedSets[i] ? 'text-white' : 'text-[#6C757D]'}`}>{exercise.reps}</p>
                                </div>
                                <div className={`text-3xl transition-colors duration-300 ${completedSets[i] ? 'text-white' : 'text-black'}`}><p>Reps</p></div>
                            </div>
                        </BoxFont>
                    ))}
                </DropdownMenu>
            )}
        </div>
    );
};

export default ExerciseList;

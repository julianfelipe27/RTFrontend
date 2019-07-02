import React from 'react';
import './styles.css'
//El componente calendario va a pintar en las fechas que corresponda
//las tutorias para un usuario con id ?, puede implementarse con un findByDate()
//y cuando se hace click en un dia se manda la fecha a dicha funcion, por conveniencia
//esta deberia retornar un JSON del cual se obtendrán las monitorias que tiene 
//el usuario para dicha fecha con su información completa.

const TutorialFile=({date,hourS,hourE, subject, topics, people, price, status })=>{
        return (
            <div className='tutorialFile'>
                <div className='separator'>
                <p className='subtitle'>Fecha: </p> <p>{date}</p>
                </div>
                <div className='separator'>
                <p className='subtitle'>Hora: </p> <p>{hourS}-{hourE}</p>
                </div>
                <div className='separator'>
                <p className='subtitle'>Materia: </p> <p>{subject}</p>
                </div>
                <div className='separator'>
                <p className='subtitle'>Temas: </p> <p>{topics}</p>
                </div>
                <div className='separator'>
                <p className='subtitle'>Personas: </p> <p>{people}</p>
                </div>
                <div className='separator'>
                <p className='subtitle'>Precio: </p> <p>{price}</p>
                </div>
                <div className='separator'>
                <p className='subtitle'>Estado: </p> <p>{status}</p>
                </div>
            </div>

        );
        
}

export default TutorialFile;
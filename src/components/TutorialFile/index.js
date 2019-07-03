import React from 'react';
import Divider from '@material-ui/core/Divider'
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
                <p className='subtitle'>Fecha: {date}</p>
                </div>
                <div className='separator'>
                <p> <span className='subtitle'>Hora:</span> {hourS}-{hourE}</p> 
                </div>
                <div className='separator'>
                <p> <span className='subtitle'>Materia:</span> {subject}</p> 
                </div>
                <div className='separator'>
                <p> <span className='subtitle'>Temas:</span> {topics}</p> 
                </div>
                <div className='separator'>
                <p> <span className='subtitle'>Personas:</span> {people}</p> 
                </div>
                <div className='separator'>
                <p> <span className='subtitle'>Precio:</span> {price}</p> 
                </div>
                <div className='separator'>
                <p> <span className='subtitle'>Estado:</span> {status}</p>
                </div>
                <div className='divider'>
                    <Divider />
                </div>
            </div>

        );
        
}

export default TutorialFile;
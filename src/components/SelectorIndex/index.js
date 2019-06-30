import React, { Component } from 'react';
import './styles.css'


class SelectorIndex extends Component {
    render() {
        return (
            <div className='selectorIndexCont'>
                <h3>Cuéntanos, ¿qué eres?</h3>
                <div className='selectionCont'>
                    <a className='studentCont' href='#/loginEstudiante'>Estudiante</a>
                    <a className='masterCont' href='#/loginTutor'>Tutor</a>
                </div>
            </div>
        );
    }
}

export default SelectorIndex;
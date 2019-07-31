import React, { Component } from 'react';
import './styles.css'


class SelectorIndex extends Component {
    render() {
        return (
            <div className='selectorIndexCont'>
                <h3>Cuéntanos, <span>¿qué eres?</span></h3>
                <div className='selectionCont'>
                    <div>
                    <a className={`studentCont`} href='#/loginEstudiante'>E</a>
                    <p className='student'>Estudiante</p>
                    </div>
                    <div>
                    <a className='masterCont' href='#/loginTutor'>T</a>
                    <p className='tutor'>Tutor</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectorIndex;
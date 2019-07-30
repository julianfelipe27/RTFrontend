import React, { Component } from 'react';
import './styles.css'


class SelectorIndex extends Component {
    render() {
        return (
            <div className='selectorIndexCont'>
                <h3>Cuéntanos, <span>¿qué eres?</span></h3>
                <div className='selectionCont'>
                    <a className='studentCont' href='#/loginEstudiante'>E</a>
                    <a className='masterCont' href='#/loginTutor'>T</a>
                </div>
            </div>
        );
    }
}

export default SelectorIndex;
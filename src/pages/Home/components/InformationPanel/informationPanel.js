import React, { Component } from 'react';
import CountUp from 'react-countup'
import tutors from './img/tutors.png'
import board from './img/tutors2.png'
import hours from './img/hours.png'
import './informationPanel.css'

class InformationPanel extends Component {
 
    startCount(){
        if(document.documentElement.scrollTop>900 && document.documentElement.scrollTop<1100 ){
        this.classes.restart()
        this.classes.start()
        this.students.restart()
        this.students.start()
        this.tutors.restart()
        this.tutors.start()   
        }
    }
    render() {
        return (
            <div className='informationPanelContent'>
                <h6>Algo sobre nosotros...</h6>
                <div className='statics'>
                <div className='iconsContent'>
                <img src={board} alt=''></img>   
                <img src={tutors} alt=''></img>
                <img src={hours} alt=''></img>
                </div>
                <div className='countersContent'>
                 <div> 
                 <p>+ <CountUp className='counter' end={250} duration={5} delay={0}ref={element=>{this.classes=element}} onScroll={this.startCount()}/> clases dictadas</p>
                </div>  
                <div>   
                 <p>+ <CountUp className='counter' end={120} duration={5} delay={0} ref={element=>{this.students=element}}/> tutores que te enseñaran la materia que buscas </p>
                </div>
                <div>
                 <p>+ <CountUp className='counter' end={100} duration={5}  delay={0} ref={element=>{this.tutors=element}}/> estudiantes registrados</p>
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default InformationPanel;
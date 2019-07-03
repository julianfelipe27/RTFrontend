import React, { Component } from 'react';
import BarNavigation from './../../components/BarNavigation'
import BarPane from './../../components/BarPane'
import Footer from './../../components/Footer'
import TutorialFile from './../../components/TutorialFile'

import Divider from '@material-ui/core/Divider'
import {AddCircle} from '@material-ui/icons'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'


import mainLogo from './../../img/mainLogo.png'

import './styles.css'

const children=[]

const monitorias=[{

    date:'2019-07-07',
    subject: 'Algebra'
},
{
    date: '2019-07-07',
    subject: 'Cálculo'
}
]
const events=[
    {
     
    }
]

class PanelStudent extends Component {

    constructor(props) {
        super(props);

        for (let index = 0; index < monitorias.length; index++) {
            

            events.push({
                title:monitorias[index].subject,
                start: monitorias[index].date 
            })
            
        }
        

        this.state = {

            calendarWeekends: true,
            calendarEvents: events // initial event data
                  //  { title: 'Event Now', start: new Date() },
                  //  { title: 'Monitoria' ,start: '2019-07-03'}
                
        }

    
    }
    
    render() {

        return (
            <div className='panelStudent'>
                <header>
                    <div className='headerNav'>
                    <BarNavigation className='bar' classBar='barNavigation2' mainLogo={mainLogo} fixed={'no-fixed'} />
                    <BarPane></BarPane>
                    </div>
                </header>
                <section className='main'>
                    <div className='calendarContent'>
                        <p className='mainTitle'>Mis monitorias agendadas</p>
                        <div className='divider'>
                        <Divider />
                        </div>
                        <div className='tutorialContent'>
                        <div className='fullCalendar'>
                            <FullCalendar
                                ref={this.calendarRef}
                                events={this.state.calendarEvents}
                                defaultView='dayGridMonth'
                                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                height={400}
                                displayEventTime={true}
                                defaultTimedEventDuration='02:00'
                                forceEventDuration={true}
                                dateClick={this.handleDateClick}
                                themeSystem='bootstrap'
                                columnHeaderText={function (date) {
                                    
                                    if (date.getDay() === 5) {
                                        return 'Viernes';
                                    }
                                    if (date.getDay() === 1) {
                                        return 'Lunes';
                                    }
                                    if (date.getDay() === 2) {
                                        return 'Martes'
                                    }
                                    if (date.getDay() === 3) {
                                        return 'Miércoles'
                                    }
                                    if (date.getDay() === 4) {
                                        return 'Jueves'
                                    }
                                    if (date.getDay() === 6) {
                                        return 'Sábado'
                                    }
                                    if (date.getDay() === 0) {
                                        return 'Domingo'
                                    }
                                }
                            }
                            header={
                                {   
                                    right: 'today',
                                    center: 'title',
                                    left:''
                                  }
                            }

                            footer={{
                                right:'',
                                center:'prev,next',
                                left:''
                            }
                            }
                            titleFormat= {{ year: 'numeric', month: '2-digit', day: '2-digit' }}
                            buttonText={

                                {
                                    today:'Hoy'
                                }
                            }
                            />
                            <div className='operationButtons'>
                                <a href='#/pedidoTutoria'><AddCircle fontSize='large' /></a>
                            </div>

                        </div>
                            <div className='sideBar'>
                                <p className='title'>Información extendida</p>
                                <div className='tutorialFileContent' id='1'>
                                    {children}
                                </div>
                            </div>
                        </div>
                        <div className='divider'>
                            <Divider />
                        </div>
                    </div>

                </section>
                <section className='footer'>
                            <Footer classColor='black'/>
                </section>

            </div>
        );
    }

    handleDateClick = (arg) => {

        this.setState({
            numChild: this.state.numChild+1
        }
        )
        children.push(<TutorialFile date={arg.dateStr} />);
        
    }
    

        
    }



export default PanelStudent; 
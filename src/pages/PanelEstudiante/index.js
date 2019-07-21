import React, { Component } from 'react';
import BarNavigation from './../../components/BarNavigation'
import Footer from './../../components/Footer'
import TutorialFile from './../../components/TutorialFile'
import mainLogo from './../../img/footer/mainLogoWhite.png'

import Divider from '@material-ui/core/Divider'
import {AddCircle} from '@material-ui/icons'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'

import './styles.css'



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
                start: monitorias[index].date, 
                })    
        }
        this.state = {
            calendarWeekends: true,
            calendarEvents: events,
            children: [] // initial event data
                  //  { title: 'Event Now', start: new Date() },
                  //  { title: 'Monitoria' ,start: '2019-07-03'}
                
        }
    }
    handleDateClick = (arg) => {
        this.state.children.push(<TutorialFile date={arg.dateStr} />);
        this.forceUpdate()     
        }
    render() {
        return (
            <div className='panelStudent'>
                <header>
                    <div className='headerNav'>
                    <BarNavigation mainLogo={mainLogo} classBar='barNavigation2'></BarNavigation>
                    </div>
                </header>
                <section className='main'>
                    <div className='calendarContent'>
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
                                dateClick={this.handleDateClick}
                                themeSystem='bootstrap'
                                columnHeaderText={function (date) {
                                    
                                    if (date.getDay() === 5) {
                                        return 'Vie';
                                    }
                                    if (date.getDay() === 1) {
                                        return 'Lun';
                                    }
                                    if (date.getDay() === 2) {
                                        return 'Mar'
                                    }
                                    if (date.getDay() === 3) {
                                        return 'Mié'
                                    }
                                    if (date.getDay() === 4) {
                                        return 'Jue'
                                    }
                                    if (date.getDay() === 6) {
                                        return 'Sáb'
                                    }
                                    if (date.getDay() === 0) {
                                        return 'Dom'
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
                                    {this.state.children}
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section className='footer'>
                            <Footer classColor='black'/>
                </section>

            </div>
        );
    }
     
    }



export default PanelStudent; 
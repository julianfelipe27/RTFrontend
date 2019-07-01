import React, { Component } from 'react';
import BarNavigation from './../../components/BarNavigation'
import BarPane from './../../components/BarPane'

import Divider from '@material-ui/core/Divider'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'


import mainLogo from './../../img/mainLogo.png'

import './styles.css'


class PanelStudent extends Component {

    constructor(props) {
        super(props);

        this.state = {

            calendarWeekends: true,
            calendarEvents: [ // initial event data
                { title: 'Event Now', start: new Date() }
            ]
        }
    }
    
    calendarRef = React.createRef()


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
                        <p>Mis monitorias agendadas</p>
                        <Divider />
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
                                    right: '',
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

                        </div>
                            <Divider />
                    </div>

                </section>
                <section className='footer'>

                </section>

            </div>
        );
    }

    handleDateClick = (arg) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
            this.setState({  // add new event data
                calendarEvents: this.state.calendarEvents.concat({ // creates a new array
                    title: 'New Event',
                    start: arg.date,
                    allDay: arg.allDay
                })
            })
        }
    }

    
}


export default PanelStudent; 
import React, { Component } from 'react';
import BarNavigation from './../../components/BarNavigation'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import mainLogo from './../../img/footer/mainLogoWhite.png'
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
                    <BarNavigation className='bar' classBar='barNavigation2' mainLogo={mainLogo} />
                </header>
                <section className='main'>
                    <div className='calendarContent'>
                        <p>Mis monitorias agendadas</p>
                        <div>
                            <FullCalendar
                                ref={this.calendarRef}
                                events={this.state.calendarEvents}
                                defaultView='dayGridMonth'
                                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                height={500}
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

                            />
                            <button value='Siguiente'></button>
                        </div>
                    </div>

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
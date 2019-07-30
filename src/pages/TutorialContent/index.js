import React, { Component } from 'react';
import { AddCircle } from '@material-ui/icons'
import TutorialFile from './../../components/TutorialFile'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import Divider from '@material-ui/core/Divider'
import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import './styles.css'


class TutorialContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            calendarWeekends: true,
            calendarEvents: [{title:'Algebra', start:'2019-07-07'},
            {title:'Cálculo', start:'2019-07-19'}
            ],
            children: [] // initial event data
            //  { title: 'Event Now', start: new Date() },
            //  { title: 'Monitoria' ,start: '2019-07-03'}

        }
    }
    componentDidMount() {
    
    }
    
    handleDateClick = (arg) => {
        this.state.children.push(<TutorialFile date={arg.dateStr} />);
        this.forceUpdate()
    }
    render() {
        return (
            <div className='calendarContent'>
                <h2>Mis Tutorias</h2>
                <div className='divider'>
                    <Divider />
                </div>
                    <p className='info'>Administra todas tus tutorias y consulta los detalles de las mismas</p>
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
                                    left: ''
                                }
                            }

                            footer={{
                                right: '',
                                center: 'prev,next',
                                left: ''
                            }
                            }
                            titleFormat={{ year: 'numeric', month: '2-digit', day: '2-digit' }}
                            buttonText={

                                {
                                    today: 'Hoy'
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
        )
    }
}

export default TutorialContent;
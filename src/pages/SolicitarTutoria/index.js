import React, { Component } from 'react';
import Footer from '../../components/Footer'
import Divider from '@material-ui/core/Divider'
import BarPane from '../../components/BarPane'
import banner from './../../img/banner.jpg'
import fecha from './../../img/solicitud/calendar.png'
import hora from './../../img/solicitud/clock.png'
import materias from './../../img/solicitud/open-book.png'
import temas from './../../img/solicitud/writing.png'
import cantidadPersonas from './../../img/cantidadPersonas.png'
import pesos from './../../img/pesos.png'
import axios from 'axios'

import './styles.css'


class SoiicitarTutoria extends Component {

  constructor(props) {
    super(props)
    this.state = {
      areas:[],
      sub: [],
      topics: []

    }
  }
  async componentDidMount(){
    let areasN=[]
    let subP=this.state.sub
    let topicsP=this.state.topics
    let data=await this.getAreas()
    data.map(area=>areasN.push(<option value={area.areaName} key={area.areaName}></option>))
    this.setState({
      areas:areasN,
      sub:subP,
      topics:topicsP
    })    
  }
  verifyPeople = () => {
    if (this.people.value > 0 && this.people.value < 6) {

      this.peopleError.hidden = true
    }
    else {

      this.peopleError.hidden = false
    }
  }
  verifyArea=()=>{
    let areasName=this.state.areas.map(area=>area.props.value)
    if(areasName.includes(this.areas.value)){
      this.areasError.hidden=true
      this.getSubjects(this.areas.value)
    }
    else if(!this.areas.value){
      this.areasError.hidden=true
      this.subjects.value=''
    }
    else{
      this.areasError.hidden=false
    }
  }
  verifySubject = () => {
    let { sub } = this.state
    let names = sub.map(subject => subject.props.value)
    if (names.includes(this.subjects.value)) {
      console.log('getTopics')
      this.subjectsError.hidden = true
    }
    else if (!this.subjects.value) {
      this.subjectsError.hidden = true
    }
    else {
      this.subjectsError.hidden = false
    }
  }
  verifyTopic = () => {
    let top = this.state.topics.map(op => op.props.value)
    if (top.includes(this.topics.value)) {
      this.topicsError.hidden = true
    }
    else if (!this.topics.value) {
      this.topicsError.hidden = true
    }
    else {
      this.topicsError.hidden = false
    }
  }
  getAreas=()=>{
    return axios.get('http://localhost:8080/cognitive-coordinator/knowledge-areas').then(res=>res.data)
  }
   async getSubjects(subject){
    let areasP=this.state.areas
    let subN=[]
    let topicsP=this.state.topics
    let data = await axios.get(`http://localhost:8080/cognitive-coordinator/subjects/${subject}`).then(res=>res.data)
    data.map(subject=>subN.push(<option value={subject.subjectName} key={subject.subjectName}></option>))
    this.setState({
      areas:areasP,
      sub:subN,
      topics:topicsP
    })
  }
  getTopics = () => {
    let val = this.subjects.value
    let top = this.state.sub.filter(subject => subject.name === val)
    let { topics } = top[0]
    let subP = this.state.sub
    let topLNew = topics.map(topic => (<option value={topic} key={topic}></option>))
    this.setState({
      sub: subP,
      topics: topLNew
    })
  }
  changeHour = () => {
    this.hours.textContent = this.qhours.value
  }

  render() {
    return (
      <div className='divTutorial'>
        <header>
          <div className='headerNav'>
            <BarPane></BarPane>
          </div>
        </header>

        <section className='mainTutorial'>
          <div className='divider'>
            <Divider />
          </div>
          <form className='formTutorial'>
            <div>
              <img src={banner} alt=' ' className="banner"></img>
              <p className="leyenda">
                Aquí podrás pedir la tutoria que necesites
                el día y a la hora que quieras
                        </p>
            </div>
            <div className="spaceB">
              <img src={fecha} alt=' ' className="icon"></img>
              <label className="labels">Fecha: </label>
              <input name="fecha" type="date" required className="inputs"></input>
            </div>
            <div className="spaceB">
              <img src={hora} alt=' ' className="icon"></img>
              <label className="labels">Hora: </label>
              <input type='time' className='inputs'></input>
            </div>
            <div className='spaceB'>
              <div ref={element => { this.hours = element }} className='hours'>-</div>
              <label className='labels'>Número de horas:</label>
              <input onChange={this.changeHour} type='range' ref={(element) => { this.qhours = element }} className='inputs' step={0.5} min='1' max='4'></input>
            </div>
            <div className="spaceB">
              <img src={materias} alt=' ' className="icon"></img>
              <label className="labels">Area: </label>
              <input autoCorrect='off' spellCheck='false' autoComplete='off' onChange={this.verifyArea} list='areas' type='text' ref={element => { this.areas = element }} className="inputs" required></input>
              <datalist id='areas'>
              {this.state.areas}
              </datalist>
              <p ref={element => { this.areasError = element }} className='error' hidden={true}>Especifica un area de las existentes</p>
            </div>
            <div className="spaceB">
              <img src={materias} alt=' ' className="icon"></img>
              <label className="labels">Materia: </label>
              <input autoCorrect='off' spellCheck='false' autoComplete='off' onChange={this.verifySubject} list='materias' type='text' ref={element => { this.subjects = element }} className="inputs" required></input>
              <datalist id='materias'>
              {this.state.sub}
              </datalist>
              <p ref={element => { this.subjectsError = element }} className='error' hidden={true}>!Oops¡ No existe una materia con ese nombre</p>
            </div>
            <div className="spaceB">
              <img src={temas} alt=' ' className="icon"></img>
              <label className="labels">Temas: </label>
              <input autoCorrect='off' spellCheck='false' autoComplete='off' onChange={this.verifyTopic} list='temas' type='text' ref={element => { this.topics = element }} className="inputs" required></input>
              <datalist id='temas'>
                {this.state.topics}
              </datalist>
              <p ref={element => { this.topicsError = element }} className='error' hidden={true}>Sólo usa temas que estén en la lista</p>
            </div>
            <div className="spaceB">
              <img src={cantidadPersonas} alt=' ' className="icon"></img>
              <label className="labels">Cantidad de Personas: </label>
              <input onChange={this.verifyPeople} ref={element => { this.people = element }} type='number' className="inputs" min="1" max="5"></input>
              <p ref={element => { this.peopleError = element }} className='error' hidden={true}>El rango de personas debe ser entre 1 y 5</p>
            </div>
            <div className="spaceB">
              <img src={pesos} alt=' ' className="icon"></img>
              <input type='text' className="precio" disabled="disabled" placeholder='Valor'></input>
              <input type='submit' onClick={()=>{this.forceUpdate()}} value='Solicitar Monitoria' formMethod='POST' className="btnTutoria"></input>
            </div>
            <br></br>
          </form>
        </section>

        <div className='divider'>
          <Divider />
        </div>

        <section className='footerLogin'>
          <Footer classColor='black' />
        </section>
      </div>
    );
  }
}

export default SoiicitarTutoria;

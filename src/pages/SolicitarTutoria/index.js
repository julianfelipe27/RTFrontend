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

import './styles.css'

class SoiicitarTutoria extends Component {

    constructor(props){
      super(props)
      this.state={
        sub:[
          {
            name:'Calculo de una variable',
            topics:[
              'Derivadas',
              'Integrales'
            ]
          },
          {
            name:'Calculo de varias variables',
            topics:[
              'Lagranja',
              'Derivadas direccionales',
              'Integrales dobles',
              'Integrales triples'
            ]
          }
        ],
        topList:[]
  
      }
    }
    verifyPeople=()=>{
      if(this.people.value>0 && this.people.value<6 ){

        this.peopleError.hidden=true
      }
      else{

        this.peopleError.hidden=false
      }
    }
    verifySubject=()=>{
      let {sub}=this.state
      let names=sub.map(subject=>subject.name)
      if(names.includes(this.subjects.value)){
        this.getTopics()
        this.subjectsError.hidden=true
      }
      else if(!this.subjects.value){
        this.subjectsError.hidden=true
      }
      else{
        this.subjectsError.hidden=false
      }
    }
    verifyTopic=()=>{
      let top=this.state.topList.map(op=>op.props.value)
      if(top.includes(this.topics.value)){
        this.topicsError.hidden=true
      }
      else if(!this.topics.value){
        this.topicsError.hidden=true
      }
      else{
        this.topicsError.hidden=false
      }
    }
    getSubjects=()=>{
      let {sub}=this.state
      return (<datalist id='materias'>{sub.map(subject=><option value={subject.name} key={subject.name}></option>)}</datalist>)
    } 
    getTopics=()=>{
     let val=this.subjects.value
     let top=this.state.sub.filter(subject=>subject.name===val)
     let {topics}=top[0]
     let subP=this.state.sub
     let topLNew=topics.map(topic=>(<option value={topic} key={topic}></option>))
     this.setState({
       sub:subP,
       topList:topLNew
     })
    }
    changeHour=()=>{
      this.hours.textContent=this.qhours.value
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
                        <input contentEditable={false}type="time" step='1800' required className="inputs"></input>                
                     </div>
                      <div className='spaceB'>
                        <div ref={element=>{this.hours=element}}className='hours'>-</div>
                        <label className='labels'>Número de horas:</label>
                        <input onChange={this.changeHour} type='range' ref={(element)=>{this.qhours=element}} className='inputs' step={0.5} min='1' max='4'></input>
                      </div>
                      <div className="spaceB">
                        <img src={materias} alt=' ' className="icon"></img>
                        <label className="labels">Materia: </label>
                        <input autoCorrect='off' spellCheck='false' autoComplete='off' onChange={this.verifySubject} list='materias'type='text' ref={element=>{this.subjects=element}} className="inputs" required></input>
                        {this.getSubjects()}
                        <p ref={element=>{this.subjectsError=element}} className='error' hidden={true}>!Oops¡ No existe una materia con ese nombre</p>
                      </div>
                      <div className="spaceB">
                        <img src={temas} alt=' ' className="icon"></img>
                        <label className="labels">Temas: </label>
                        <input autoCorrect='off' spellCheck='false' autoComplete='off' onChange={this.verifyTopic} list='temas' type='text' ref={element=>{this.topics=element}} className="inputs" required></input>
                        <datalist id='temas'>
                          {this.state.topList}
                        </datalist>
                        <p ref={element=>{this.topicsError=element}} className='error' hidden={true}>Sólo usa temas que estén en la lista</p>
                      </div>
                      <div className="spaceB">
                        <img src={cantidadPersonas} alt=' ' className="icon"></img>
                        <label className="labels">Cantidad de Personas: </label>
                        <input onChange={this.verifyPeople} ref={element=>{this.people=element}}type='number' className="inputs" min="1" max="5"></input>
                        <p ref={element=>{this.peopleError=element}}className='error' hidden={true}>El rango de personas debe ser entre 1 y 5</p>
                      </div>
                      <div className="spaceB">
                        <img src={pesos} alt=' ' className="icon"></img>
                        <input type='text' className="precio" disabled="disabled" placeholder='Valor'></input>
                        <input type='submit' value='Solicitar Monitoria' formMethod='POST' className="btnTutoria"></input>
                      </div>
                      <br></br>
                    </form>
                </section>

                <div className='divider'>
                 <Divider />
                </div>

                <section className='footerLogin'>
                    <Footer classColor='black'/>
                </section>
            </div>
        );
    }
}

export default SoiicitarTutoria;

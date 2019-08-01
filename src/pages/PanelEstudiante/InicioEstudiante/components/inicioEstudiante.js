import React from 'react'
import Card from './card.js'
import Foto from '../../../Widgets/Foto/index.js'
import mobileApp from '../img/mobile-app.png';
import payPerClick from '../img/pay-per-click.png'
import project from '../img/project.png'
import report from '../img/report.png'

import './inicioEstudiante.css'

const InicioEstudiante = props => (
  <div>
    <Foto foto=""/>
    <p className="inicioEstudianteTitle">Bienvenido, {props.name}</p>
    <p className="inicioEstudianteLeyenda">Administre su información, privacidad y seguridad para que nuestro servicio funcione mejor para usteds</p>
    <div className="inicioEstudianteCards">
      <Card
        title="Historial de tutorías"
        paragraphe="Encuentre todos los servicios que ha pedido con nosotros. Puede que se sorprenda."
        src={mobileApp}
        link="Ver historial"
      />
      <Card
        title="¿Cómo pedir una tutoría?"
        paragraphe="Todo lo que tiene que saber para disfrutar plenamente de nuestros servicios."
        src={report}
        link="Comencemos"
      />
      <Card
        title="Gestiona tu cuenta"
        paragraphe="Administre y gestione su perfil en nuestra plataforma."
        src={project}
        link="Administrar cuenta"
      />
      <Card
        title="Gestiona tus pagos"
        paragraphe="Administre todas sus cuentas y gestione de mejor manera sus tutorías"
        src={payPerClick}
        link="Administrar pagos"
      />
    </div>
  </div>
)

export default InicioEstudiante;

import React from 'react';
import backgroundHeader from './../../img/backgroundHeader.jpg'
import backgroundHeaderSecond from './img/backgroundHeader.jpg'
//import backgroundVideo from './../../img/backgroundVideo.mp4'
import BarNavigation from './../../components/BarNavigation'
import SelectorIndex from './../../components/SelectorIndex'
import Divider from '@material-ui/core/Divider'
import { Component, useRef } from 'react'
import Footer from './../../components/Footer'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import InformationPanel from './components/InformationPanel/informationPanel.js'
import mainLogoWhite from './../../img/footer/mainLogoWhite.png'
import logo from './img/logo.png'
//Carousel images
import carrusel from './../../img/carrusel.jpg'
import carrusel2 from './../../img/carrusel2.jpg'
import carrusel3 from './img/moreUniversities.jpg'
import carrusel4 from './img/reclutamiento.jpg'

import alliance from './../../img/startup.png'
import alliance2 from './../../img/icesi.png'
import './styles.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.selector=null
        this.state = {
            classBar: 'barNavigation',
            classCircle: ''
        }
    }
    handleScroll = () => {
        if (document.documentElement.scrollTop > 0) {
            this.setState({ classBar: 'barNavigation2' });
        }
        else {
            this.setState({ classBar: 'barNavigation' });
        }
    }
    scrollWindow=()=>{
        window.scrollTo(0,this.myRef.offsetTop+40)
        console.log('scrollazo')
    }
    componentDidMount() {
        window.onscroll = () => this.handleScroll();
    }
    render() {  
       return (
            <div className='homeContent'>
                <BarNavigation className='bar' fixed='fixed' classBar={this.state.classBar} mainLogo={mainLogoWhite} />
                <div className='mainHeader'>
                <img src={logo} className='logo' alt=''></img>
                <p>Compartiendo el conocimiento</p>
                <p className='arrow' onClick={this.scrollWindow}>V</p>
                </div>
                <div  ref={ (ref) => this.myRef=ref } className='extraHeader'>
                <SelectorIndex/>
                <img  className='imgHeader'></img>
                </div>
                <section className='main'>
                    <InformationPanel />
                    <div className='divider'>
                        <Divider />
                    </div>
                    <div className='extra3'>
                    <p className='titles'>Eventos</p>
                        <div className='imgContent'>
                            <Carousel className='carouselContent' infiniteLoop={true} autoPlay={true} showStatus={false} >
                                <div>
                                    <img src={carrusel3} alt=''></img>
                                    <p className='legend'>Red tutores mas cerca de tú universidad</p>
                                </div>
                                <div>
                                    <img src={carrusel4} alt=''></img>
                                    <p className='legend'>Reclutamiento de tutores 2019-2, informate <a href='http://www.webredtutores.com.co/rtinspira/visitas/'>aquí</a></p>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div className='divider'>
                        <Divider />
                    </div>
                    <div className='extra1'>
                        <p className='titles'>RT Inspira</p>
                        <div className='imgContent'>
                            <Carousel className='carouselContent' infiniteLoop={true} autoPlay={true} showStatus={false} >
                                <div>
                                    <img src={carrusel} alt=''></img>
                                    <p className='legend'>Red Tutores se acerca a las zonas mas recónditas del mundo</p>
                                </div>
                                <div>
                                    <img src={carrusel2} alt=''></img>
                                    <p className='legend'>Red Tutores es la hostia, conoce más <a href='http://www.webredtutores.com.co/rtinspira/visitas/'>aquí</a></p>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div className='divider'>
                        <Divider />
                    </div>
                    <div className='extra2'>
                        <p className='titles'>Alianzas</p>
                        <div className='alliances'>
                            <img className='image' src={alliance} alt=''></img>
                            <img className='image icesi' src={alliance2} alt=''></img>
                        </div>
                    </div>
                    <Footer classColor='black'></Footer>
                </section>
            </div>
        )
    }
    scrollToMyRef = () => window.scrollTo(0, this.myRef.offsetTop)
}
export default Home;



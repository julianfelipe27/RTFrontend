import React from 'react';
import backgroundHeader from './../../img/backgroundHeader.jpg'
//import backgroundVideo from './../../img/backgroundVideo.mp4'
import BarNavigation from './../../components/BarNavigation'
import SelectorIndex from './../../components/SelectorIndex'
import Divider from '@material-ui/core/Divider'
import { Component } from 'react'
import Footer from './../../components/Footer'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import InformationPanel from './components/InformationPanel'
import mainLogoWhite from './../../img/footer/mainLogoWhite.png'
//Carousel images
import carrusel from './../../img/carrusel.jpg'
import carrusel2 from './../../img/carrusel2.jpg'

import alliance from './../../img/startup.png'
import alliance2 from './../../img/icesi.png'


import './styles.css'



class Home extends Component {

    constructor(props) {
        super(props);
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
    componentDidMount() {
        window.onscroll = () => this.handleScroll();
    }
    render() {

       return (
            <div>

                <BarNavigation className='bar' fixed='fixed' classBar={this.state.classBar} mainLogo={mainLogoWhite} />
                <SelectorIndex />
                <img src={backgroundHeader} alt='' className='imgHeader'></img>
                <section className='main'>
                    <InformationPanel />
                    <div className='divider'>
                        <Divider />
                    </div>
                    <div className='extra1'>
                        <p className='rtInspira'>RT Inspira</p>
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
                        <p className='rtInspira'>Alianzas</p>
                        <div className='alliances'>

                            <img className='image' src={alliance} alt=''></img>
                            <img className='image icesi' src={alliance2} alt=''></img>
                            <img className='image' alt=''></img>

                            <img className='image' alt=''></img>
                            <img className='image' alt=''></img>
                        </div>
                    </div>
                    <Footer classColor='black'></Footer>
                </section>
            </div>
        )
    }
}
export default Home;



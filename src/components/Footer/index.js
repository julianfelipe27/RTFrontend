import React from 'react'
import './styles.css'

import facebook  from './../../img/footer/facebook.png'
import  instagram  from './../../img/footer/instagram.png'
import  smartphone  from './../../img/footer/smartphone.png'
import  mainLogoWhite  from './../../img/footer/mainLogoWhite.png'
import icesi from './../../img/footer/icesi.png'

//import startup from './../../img/startup.png'


const Footer = ({classColor}) => {

    return (
        <div className={`footer ${classColor}` }>
            <div className='supportedBy'>
               <p> Apoyados por:</p>
            <div>
                        <img className='icesi' src={icesi} alt=''></img>
                </div>
            </div>

            <div className='logo'>
                <img src={mainLogoWhite} alt=''></img>
                <br></br>
                <p className='rights'>Todos los derechos reservados®</p>
            </div>

            <div className='socialNetworks'>   
                <a href='https://www.facebook.com/redtutores'>
                <img src={facebook} alt=''>
                </img>
                </a>
                <a href='https://www.instagram.com/redtutores'><img src={instagram} alt=''>
                </img>
                </a>    
                <a href='https://wa.me/573188170321'>
                <img src={smartphone} alt=''>
                </img>
                </a>
                

            </div>

          
        </div>
    )
}

export default Footer;
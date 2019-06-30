import React from 'react';
import './styles.css'



    //createElement
    //appendChild
    //setAttribute
    //parentNode
    //insertBefore
    //removeChild
    //replaceChild

    //addEventListener, removeEventListener

    //click, scroll, mouseenter
    

const BarNavigation=({classBar, mainLogo}) =>{


        return (


            <div className= {`barNavigation ${classBar}`}>    
                <div className='voidBox'></div>            
                <a className='icon' href='./index.html'>
                <img  src={mainLogo} alt=''></img>
                </a>
                <nav className='menu'>
                    <a className='uniform' href="tutorias">Tutorias</a>
                    <a className='uniform' href="trabajar">Sé tutor</a>
                    <a className='uniform' href="contenido">Contenido</a>
                    <a className='special' href="conocenos">Conócenos</a>

                </nav>
                </div>
        );
    }


export default BarNavigation;
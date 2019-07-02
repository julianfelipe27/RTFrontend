import React from 'react';
import './styles.css'
import menu from './../../img/menu.png'



    //createElement
    //appendChild
    //setAttribute
    //parentNode
    //insertBefore
    //removeChild
    //replaceChild

    //addEventListener, removeEventListener

    //click, scroll, mouseenter


 const BarNavigation=({classBar, mainLogo, fixed}) =>{
   function deployMenu() {
     var special = document.getElementsByClassName('options');
     if(special[0].style.display === "none") {
       for (let i = 0; i < special.length; i++) {
         special[i].style.display = "block";
       }
     } else {
       for (let i = 0; i < special.length; i++) {
         special[i].style.display = "none";
       }
     }
   }
        return (

            <div className= {`barNavigation ${classBar} ${(fixed==='no-fixed')?'':'fixed'}`}>
                <div className='voidBox'></div>
                  <a className='icon' href='./index.html'>
                    <img  src={mainLogo} alt=''></img>
                  </a>
                  <nav className='menu'>
                    <img  src={menu} alt='' className="menuBar" onClick={deployMenu}></img>
                    <a className='options uniform' href="tutorias">Tutorias</a>
                    <a className='options uniform' href="trabajar">Sé tutor</a>
                    <a className='options uniform' href="contenido">Contenido</a>
                    <a className='options special' href="conocenos">Conócenos</a>
                  </nav>
                </div>
        );
    }


export default BarNavigation;

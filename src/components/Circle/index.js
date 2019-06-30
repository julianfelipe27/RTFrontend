import React from 'react'
import './styles.css'

const Circle =({classCircle, srcImg})=>{

    return(
    
    <div className={classCircle}>
        <img src={srcImg} alt=''></img>
    </div>);
}

export default Circle;
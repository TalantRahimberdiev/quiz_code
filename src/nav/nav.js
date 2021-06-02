
import React from 'react'
import {navItems} from '../data/data.js'


function Nav(props) {
    
    const clickNav=(clicked)=>{
        props.setCurrentQuiz(clicked) 
    }
    return (
        <div>
            <ul>
            {navItems.map((title,index)=>{
                return(<li key={index}><a className={props.currentQuiz===index ? 'active' : ''} onClick={()=>clickNav(index)} href='#'>{title}</a></li>)
            })}
            </ul>
        </div>
    )
}
export default Nav

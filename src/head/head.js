
import React from 'react'
import {perevod} from '../data/data.js'

function Head(props) {
    return (
        <div>
            <h1>{perevod[props.currentLanguage]['begin']}
                <button id='language' onClick={()=>props.currentLanguage==='En'?props.setCurrentLanguage('Ru'):props.setCurrentLanguage('En')}>{props.currentLanguage}</button>
            </h1>     
        </div>
    )
}

export default Head

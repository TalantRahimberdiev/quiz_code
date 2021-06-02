import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Head from './head/head.js'
import Nav from './nav/nav.js'
import './nav/nav.css'
import Middle from './middle/middle.js'
import './middle/middle.css'

function Glavka() {
    const [currentQuiz,setCurrentQuiz]=useState(-1)
    const [currentLanguage,setCurrentLanguage]=useState('En')
    return (
        <div>
            <Head currentLanguage={currentLanguage}
            setCurrentLanguage={setCurrentLanguage}
            />
            <Nav setCurrentQuiz={setCurrentQuiz}
            currentQuiz={currentQuiz}
            currentLanguage={currentLanguage}

            />
            <Middle currentLanguage={currentLanguage}
            currentQuiz={currentQuiz}
            />
        </div>
    )
}
ReactDOM.render(<Glavka/>,document.getElementById('root'))

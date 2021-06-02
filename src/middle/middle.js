
import React,{useState,useEffect,useRef} from 'react'
import {quizesData} from '../data/data.js'
import {perevod} from '../data/data.js'

function Middle(props) {
    const [currentQuestion,setCurrentQuestion]=useState(0)
    const [submitted,setSubmitted]=useState([])
    const [time,setTime]=useState()
    const [additional,setAdditional]=useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            console.log(time)
          setTime(time=>(time>=-1? time - 1:clearInterval(interval)));
        }, 1000);
        return () => {
          clearInterval(interval);
        };
      },[props.currentQuiz,additional]);
    useEffect(()=>{
        setTime(15)
        setCurrentQuestion(0)
        if(props.currentQuiz!==-1){
        const s=quizesData[props.currentQuiz][props.currentLanguage].map(x=>({
            answered:undefined,
            realAnswer:x['otvet']
        }))
        setSubmitted(s)
    }
    },[props.currentQuiz,additional])

    const click=(punched)=>{
        let newSubmitted=[...submitted]
        newSubmitted[currentQuestion]={
            correct:punched===quizesData[props.currentQuiz][props.currentLanguage][currentQuestion]['otvet'],
            answered:punched,
            realAnswer:quizesData[props.currentQuiz][props.currentLanguage][currentQuestion]['otvet']
        }
        setCurrentQuestion(currentQuestion+1)
        setSubmitted(newSubmitted)
    }
    const prev=()=>{
        if(currentQuestion>0){
            setCurrentQuestion(currentQuestion-1) 
        }
    }
    const tryAgain=()=>{
        setCurrentQuestion(0)
        setTime(7);
        setSubmitted([])
        setAdditional(additional+1)
    }
    return (
        <div>
            {
                props.currentQuiz===-1?(
                    <div>
                        <h1 id='naz'>{perevod[props.currentLanguage]['nazvaniye']}</h1>
                        <h1 id='pred'>{perevod[props.currentLanguage]['predisloviye']}</h1>
                    </div>
                ):
                quizesData[props.currentQuiz][props.currentLanguage].length>currentQuestion && time>-1 ? (
                    <div>
                        <h3 id='numberOfQuestion'>{perevod[props.currentLanguage]['vopros']} {currentQuestion+1} {perevod[props.currentLanguage]['adverb']} {quizesData[props.currentQuiz][props.currentLanguage].length}<span id='time'>{perevod[props.currentLanguage]['time']}{time}</span></h3>
                        <h1 id='question'>{quizesData[props.currentQuiz][props.currentLanguage][currentQuestion]['question']}</h1>
                        {quizesData[props.currentQuiz][props.currentLanguage][currentQuestion]['variants'].map((b,index)=>{
                        return ( <button id={'b'+index} onClick={()=>click(index)} key={index}>{b}</button>)
                })}
                <hr></hr>
                {currentQuestion>0 ? <button id='prev' onClick={()=>prev()}>{perevod[props.currentLanguage]['prev']}</button>:''}

                    </div>):(
                        <div>
                            <h1 id='result'>{perevod[props.currentLanguage]['result']}: {submitted.filter(x=>x.correct).length}</h1>
                            <table>
                                <tr>
                                    <th key={1}>{perevod[props.currentLanguage]['question']}</th>
                                    <th key={2}>{perevod[props.currentLanguage]['yourAnswer']}</th>
                                    <th key={3}>{perevod[props.currentLanguage]['correctAnswer']}</th>
                                    <th key={4}>{perevod[props.currentLanguage]['score']}</th>
                                </tr>
                                {submitted.map((x,index)=>{
                                    return(
                                        <tr>
                                            <td key={5}>{quizesData[props.currentQuiz][props.currentLanguage][index]['question']}</td>
                                            <td key={6}>{quizesData[props.currentQuiz][props.currentLanguage][index]['variants'][x.answered]}</td>
                                            <td key={7}>{quizesData[props.currentQuiz][props.currentLanguage][index]['variants'][x.realAnswer]}</td>
                                            <td key={8}>{x.correct? 1:0}</td>
                                        </tr>
                                    )
                                })}
                            </table>
                            <button id='try' onClick={()=>tryAgain()}>{perevod[props.currentLanguage]['try']}</button>
                        </div>
                    )
            }        
        </div>
    )
}

export default Middle

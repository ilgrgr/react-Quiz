import React from 'react';
import './activqiz.css';
import AnswerList from './answersList/answersList';

const ActivQuiz = (props) => {

    return(
        <div className = 'app__activqiz'>
            <div className = 'activqiz__head' >
                <h2>{props.question}</h2>
                <span>{props.numberQuestion} из {props.questionsLength}</span>
            </div>
            <AnswerList 
                answers={props.answers}
                onClikHeandler = {props.onClikHeandler}
                styleAnswerClick = {props.styleAnswerClick}
                
            />
        </div>
    )
    
}

export default ActivQuiz;
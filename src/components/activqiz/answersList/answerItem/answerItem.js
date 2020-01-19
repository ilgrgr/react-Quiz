import React from 'react';
import './answerItem.css';


const AnswerItem = (props) => {
    
    const stateAnswer = ['answersList__answerItem']
    const styleAnswerSucces = 'answersList__answerItem_success'
    const styleAnswerError = 'answersList__answerItem_error'

    if(props.styleAnswerClick === 'success') {
        stateAnswer.push( styleAnswerSucces )
    }
    if(props.styleAnswerClick === 'error'){
        stateAnswer.push( styleAnswerError )
    }

    return(
    <li className={stateAnswer.join(' ')}
        onClick = { () => props.onClikHeandler(props.answer.id) }
    >
        {props.answer.text}
    </li>
    )
}

export default AnswerItem;
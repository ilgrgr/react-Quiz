import React from 'react';
import './answersList.css';
import AnswerItem from './answerItem/answerItem';

const AnswerList = (props) => {

    return(
        <ul className='activQiz__answersList'>
            
            { props.answers.map((answer, index) => {                
                return(
                    <AnswerItem 
                        key = {index + 'answer'}
                        answer ={answer}
                        onClikHeandler = {props.onClikHeandler}
                        styleAnswerClick = {props.styleAnswerClick ? props.styleAnswerClick[answer.id] : null } 
                    />
                )   
            }) }
        </ul>
    )   
}

export default AnswerList;

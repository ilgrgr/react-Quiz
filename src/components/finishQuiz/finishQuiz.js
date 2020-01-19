import React from 'react'
import './finishQuiz.css'

const FinishQuiz = (props) => {

    let countAnswer = 0;
    Object.values(props.finishResult).map((val) => {
        if( val === 'success' ) {
            countAnswer = countAnswer + 1
        } 
    })

    console.log(countAnswer)
    const percentResult = Math.round(countAnswer / props.questionsLength * 100);

    return(
        <div className='app__finishQuiz'>     
            <h2>
                Тест завершен
            </h2>
                    
            <p>Вы ответили правильно на {countAnswer} из {props.questionsLength } вопросов</p>
            <p>Ваш результат: {percentResult}%</p>
            <div>
                <button className='finishQuiz__button'>Пройти снова</button>
            </div>
        </div>

    )

}

export default FinishQuiz;
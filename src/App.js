import React, { Component } from 'react';
import './App.css';
import ActivQuiz from './components/activqiz/activqiz';
import Menu from './components/menu/menu';
import FinishQuiz from './components/finishQuiz/finishQuiz'


class App extends Component {

  state = {
    counterQuestion: 0,
    finishQuiz: false,
    finishRezult: {},
    styleAnswerClick: null,
    menuTogle: false,
    questions: [
      {
        questionId: 1,
        question: 'Какого цвета небо',
        correctAnswerId: 2,
        answers: [
          {text: 'Зеленое', id: 1},
          {text: 'Голубое', id: 2}, 
          {text: 'Красное', id: 3},
          {text: 'Желтое', id: 4},
          
        ]
      },
      {
        questionId: 2,
        question: 'Сколько ног у коровы?',
        correctAnswerId: 4,
        answers: [
          {text: 'Две', id: 1},
          {text: 'Шесть', id: 2}, 
          {text: 'Три', id: 3},
          {text: 'Четыре', id: 4},
          
        ]
      },
      {
        questionId: 3,
        question: 'Кто был другом Крокодила Гены?',
        correctAnswerId: 3,
        answers: [
          {text: 'Старуха Шапокляк', id: 1},
          {text: 'Кот Мотроскин', id: 2}, 
          {text: 'Чебурашка', id: 3},
          {text: 'Дядя Фёдор', id: 4},
          
        ]
      }  
    ]
  }

  onClickMenuHendler = (menuOnOf) => {    
      this.setState({menuTogle: !menuOnOf })
  }

  
  

  onClikHeandler = (answerID) => {
    if (this.state.styleAnswerClick) {
      const key = Object.keys(this.state.styleAnswerClick)[0] 
      if (this.state.styleAnswerClick[key]  === 'success') {
        return
      } 
    } 
    
    const succesAnswer = this.state.questions[this.state.counterQuestion].correctAnswerId
    const activQuestion = this.state.questions[this.state.counterQuestion].questionId
    const finishResult = this.state.finishRezult

    if( succesAnswer === answerID) {
      if( !finishResult[activQuestion] ) {
        finishResult[activQuestion] = 'success'
      }
      this.setState({ 
        styleAnswerClick: { [answerID]:'success'},
        finishResult: finishResult
      });
      
      setTimeout(() => {
        if(this.state.questions.length === this.state.counterQuestion + 1 ) {
          this.setState({ finishQuiz: true})
        }
        else {
          this.setState({ counterQuestion: this.state.counterQuestion + 1})
          this.setState({ styleAnswerClick: null })
        }
        
      }, 1000);
      
    }
      
    else { 
      finishResult[activQuestion] = 'error'
      this.setState({ 
        styleAnswerClick: { [answerID]:'error'},
        finishResult: finishResult 
      }) 
    }
  
  }  
  
  render() {  

    console.log(this.state.menuTogle)
    console.log(this.state.finishRezult)

    return(
      
      <div className='app__body'>
           
          <h1>Тест: Разное</h1>
          { this.state.finishQuiz === true 
          ? <FinishQuiz 
              finishResult = {this.state.finishResult}
              questionsLength = {this.state.questions.length }
            />
          : <ActivQuiz             
              numberQuestion = { this.state.counterQuestion + 1 }
              questionsLength = {this.state.questions.length }
              question = {this.state.questions[this.state.counterQuestion].question}
              answers = {this.state.questions[this.state.counterQuestion].answers}
              onClikHeandler = {this.onClikHeandler}
              styleAnswerClick = {this.state.styleAnswerClick} 
            />
          } 
        <Menu
           
          menuTogle={this.state.menuTogle}
          onClickMenuHendler= {this.onClickMenuHendler} 
        />
      </div>
      
    )
  }
}

export default App;
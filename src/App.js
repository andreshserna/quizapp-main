import React, { Component } from 'react';
import trivia from './apis/trivia';
import './App.scss';
import Header from './components/Header';
import Quiz from './components/Quiz';
import SideBar from './components/SideBar'; // Agregar esta línea

class App extends Component {
  state = {
    questions: [],
    selectedAnswer: null
  }

  onStartQuiz = async () => {
    const response = await trivia.get('/questions', {
      params: {}
    });
    this.setState({ questions: response.data });
    console.log(response.data);
  }

  onCheckedAnswer = (answer) => {
    console.log('From the App!', answer);
  }

  render() {
    return (
      <div className="quizapp">
        <SideBar /> {/* Agregar la barra lateral aquí */}
        <Header />
        <button className='quizapp_newgame' onClick={this.onStartQuiz}>Start New Quiz</button>
        <Quiz questions={this.state.questions} onCheckedAnswer={this.onCheckedAnswer} />
      </div>
    );
  }
}

export default App;

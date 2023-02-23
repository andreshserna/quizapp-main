import React, { Component } from 'react';
import trivia from './apis/trivia';
import './App.scss';
import Header from './components/Header';
import Quiz from './components/Quiz';

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

  // video object we get from YT api
  onCheckedAnswer = (answer) => {
    console.log('From the App!', answer);
  }


  render() {
    return (
      <div className="quizapp">
        <Header />
        <button className='quizapp_newgame' onClick={this.onStartQuiz}>Start New Quiz</button>
        <Quiz questions={this.state.questions} onCheckedAnswer={this.onCheckedAnswer} />
      </div>
    );
  }

}

export default App;

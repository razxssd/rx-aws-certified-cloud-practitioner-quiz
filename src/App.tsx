import React from 'react';
import awsImg from './aws.png';
import './App.css';
import {quiz} from './quiz';
// @ts-ignore
import Quiz from 'react-quiz-component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className={'rx-container-app'}>
          <img src={awsImg} className="App-logo" alt="logo"/>
          <div className={'rx-quiz-container'}>
            <div className={'rx-quiz-box'}>
              <Quiz
                class={'rx-question-wrapper'}
                quiz={quiz}
                shuffle={true}
                allowNavigation={true}
                showInstantFeedback={true}
              />
            </div>
          </div>
        </div>
      </header>

      <footer>
        <div className={'rx-footer-container'}>
          <span>Made by <a href={'www.eduardcapanu.com'}>Eduard Capanu</a></span>
          <span style={{textAlign: 'left'}}>All the questions are from <a
            href={'https://www.examtopics.com/exams/amazon/aws-certified-cloud-practitioner/view/'}>www.examtopics.com</a></span>
        </div>

      </footer>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import { Question } from './components';

const category = '';
const TRIVIA_API = `https://opentdb.com/api.php?amount=1&category=${category}&difficulty=easy`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { question: null, guessed: false, guess: null };
    this.handleGuess = this.handleGuess.bind(this);
  }

  componentDidMount() {
    fetch(TRIVIA_API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ question: data.results[0] });
      })
      .catch((error) => console.log(error));
  }

  handleGuess(answer) {
    this.setState({ guessed: true, guess: answer });
  }

  render() {
    const { question, guessed, guess } = this.state;

    return (
      <div className='container l:w-50 p-5'>
        <h1 className='display-1'>Trivia</h1>
        <h2 className='fw-lighter fs-5 mb-4'>
          (we couldn&lsquo;t think of a better name,{' '}
          <span className='fw-bolder'>sorry</span>)
        </h2>
        <hr />
        <div>
          {question && (
            <Question
              question={question}
              handleGuess={this.handleGuess}
            />
          )}
          {guessed && (
            <div>
              {guess === question.correct_answer ? (
                <p>Correct!</p>
              ) : (
                <p>
                  Incorrect! The correct answer is{' '}
                  {question.correct_answer}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export { App };

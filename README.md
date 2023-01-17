![logo](https://user-images.githubusercontent.com/44912347/203095957-f44de644-0971-44c0-ac2d-92fdebb262d2.jpg)

# Trivia

**GOAL**: You will be building a Trivia app that will fetch data inside a componentDidMount, pass props to children components, and initialize and update state via this.setState. Together we’ll build the Trivia app to have just 1 question with a random category, but there will be plenty of additional features you can add on your own time!

## Setup

- Fork this repo, clone to your desktop, and install dependencies:
  ```sh
  npm install
  ```
- Start the server, and navigate to `localhost:1234`
  ```sh
  npm run start
  ```
- Lint the JavaScript
  ```sh
  npm run lint
  ```

## Directions
1. In `App.js`, fetch a trivia question from the provided API
    - Use the `TRIVIA_API` constant. `console.log()` the response from the API to see the structure of the response.
    - Store the response question in state. You’ll have to initialize state for this as well. Since the response from the API will be a complex object, initialize `state.question` as `null`, so we can check if a question is present or not.
2. Use the `Question` component that’s imported into `App` and conditionally render it and pass the question on state to it.
    - **Note**: We’ll have to conditionally render the `<Question />` component. If the data from the API has not yet returned and `this.state.question` is still `null`, we don’t want to render the component yet.
    ```jsx
    {this.state.question && <Question question={this.state.question}} />}
    ```
3. You’ll notice that `Question` is already rendering an `AnswerButton` component, but clicking on an answer button doesn’t do anything yet. We need to pass `this.handleGuess` to `AnswerButton`.
    - Notice that `handleGuess` expects a single argument of answer to be passed to it. Figure out how we should pass answer into `handleGuess`!
4. Now that we have the question rendering, answer buttons rendering, and an ability to guess an answer, we need to tell the user if they answered correctly or not!
    - In `Question` below the answers, dynamically render some content!
    - If `this.state.guessed` is truthy, render a `div`
5. Inside the `div`, if `this.state.guess === this.props.question.correct_answer` then this means the user answered correctly! 
    - Let them know they are correct by rendering a helpful `“Correct!”` message. 
    - If they answered incorrectly, we’ll say `Incorrect! The correct answer is _____`

> Made with ♥️ at [Multiverse](https://www.multiverse.io/en-US)

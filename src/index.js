import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Editor from './editor';
import Preview from './preview';
import * as serviceWorker from './serviceWorker';




class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // state components
      content: '# Sample Markdown Heading\n\nEdit or replace this\n-----------\n\n### Another deeper heading\n\n Heres some code, `<div></div>`, between 2 backticks \n\nParagraphs are separated by a blank line.\n\nLeave 2 spaces at the end of a line to do a  line break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nUnordered list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n---\n\n#### There is also [links](https://www.freecodecamp.com)\n\n ![React Logo w/ Text](https://goo.gl/Umyytc)'
    }
  }

  handleChange = (event) => {
    this.setState({ content: event.target.value });
  }


  render() {
    return (
      <React.Fragment>
        <div class="container-fluid fill">
          <h1 class="text-center">Markdown Previewer</h1>
          <div class="row fill">
            <div class="col">
              <Editor
              content = {this.state.content}
              handleChange={this.handleChange}
              />
            </div>
            <div class="col">
              
              <Preview content = {this.state.content} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

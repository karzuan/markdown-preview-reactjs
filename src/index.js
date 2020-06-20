import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Editor from './editor';
import Preview from './preview';
import * as serviceWorker from './serviceWorker';
var marked = require('marked');

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // state components
      content: "# React Markdown Previewer     ## This is a sub-heading...   ### And here's some other cool stuff:   Heres some code, `<div></div>`, between 2 backticks."
    }
  }

  handleChange = (event) => {
    this.setState({ content: event.target.value });
  }

  handleMarkdown = (content) => {
    return marked(content);
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
              <Preview 
              content={this.handleMarkdown(this.state.content)}
              />
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

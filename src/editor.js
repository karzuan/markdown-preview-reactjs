import React from 'react';
import './styles.css';

class Editor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: this.props.content
    }
  }
  render(){
  return (
      <React.Fragment>
      <label for="editor">Editor</label>
      <textarea class="form-control" id="editor" onChange={this.props.handleChange}>{this.state.content}</textarea>
      </React.Fragment>
    );
  }
}

export default Editor;

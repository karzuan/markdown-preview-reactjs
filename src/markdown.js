import React from 'react';
//var marked = require('marked');
import marked from 'marked';


class Markdown extends React.Component {
    getMarkdownText(content) {
      var rawMarkup = marked(content, {sanitize: true});
      return { __html: rawMarkup };
    }
    render() {
      return <div dangerouslySetInnerHTML={this.getMarkdownText(this.props.content)} id="preview" />
    }
  }

  export default Markdown;
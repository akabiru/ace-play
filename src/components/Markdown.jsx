import React, { Component } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import hljs from 'highlight.js'

class Markdown extends Component {
  componentWillMount() {
    marked.setOptions({
      highlight: function(code) {
        return hljs.highlightAuto(code).value
      }
    })
  }

  componentDidMount() {
    hljs.initHighlightingOnLoad()
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{
        __html: marked(this.props.text)
      }}></div>
    )
  }
}

Markdown.propTypes = {
  text: PropTypes.string
}

Markdown.defaultProps = {
  text: ''
}

export default Markdown

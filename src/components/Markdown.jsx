import React, { Component } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import highlightJs from 'highlight.js'

class Markdown extends Component {
  constructor(props) {
    super(props)


    marked.setOptions({
      highlight: function(code) {
        return highlightJs.highlightAuto(code).value
      }
    })
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

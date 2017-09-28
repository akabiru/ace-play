import React, { Component } from 'react';
import marked from 'marked';
import PropTypes from 'prop-types';
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

class Editor extends Component {
  handleEdit({target}) {
    const val = target.value;
    this.props.onEdit(val);
  }

  render() {
    return (
      <textarea onInput={this.handleEdit}>
      </textarea>
    )
  }
}

Editor.PropTypes = {
  onEdit: PropTypes.func.isRequired
}

class MarkdownEditor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  onEdit = (text) => {
    this.setState({ text })
  }

  render() {
    return (
      <main>
        <section>
          <label>Markdown</label>
          <hr />
          <Editor onEdit={this.onEdit} />
        </section>
        <section>
          <label>Preview</label>
          <hr />
          <Markdown text={this.state.text} />
        </section>
      </main>
    )
  }
}

export default MarkdownEditor

import React, { Component } from 'react'
import Editor from './Editor'
import Markdown from './Markdown'

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

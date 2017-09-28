import React, { PropTypes } from 'react';
import marked from 'marked';

const Markdown = React.createClass({
  propTypes: {
    text: React.PropTypes.string
  },
  getDefaultProps() {
    return { text: '' };
  },
  render() {
    return (
      <div dangerouslySetInnerHTML={{
        __html: marked(this.props.text)
      }}></div>
    );
  }
});

const Editor = React.createClass({
  propTypes: {
    onEdit: React.PropTypes.func.isRequired
  },
  handleEdit({target}) {
    const val = target.value;
    this.props.onEdit(val);
  },
  render() {
    return (
      <textarea onInput={this.handleEdit}>
      </textarea>
    );
  }
});

const MarkdownEditor = React.createClass({
  getInitialState() {
    return { text: '' };
  },
  onEdit(text) {
    this.setState({ text });
  },
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
    );
  }
});

export default MarkdownEditor

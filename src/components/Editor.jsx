import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Editor extends Component {
  handleEdit = ({target}) => {
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

export default Editor

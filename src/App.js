import React, { Component } from 'react';
import { render } from 'react-dom';
import AceEditor from 'react-ace';

import 'brace/theme/monokai';
import 'brace/mode/markdown';


const defaultValue =
`function onLoad(editor) {
  console.log(\"i\'ve loaded\");
}`;

class App extends Component {
  onLoad() {
    console.log('i\'ve loaded');
  }

  onChange(newValue) {
    console.log('change', newValue);
    this.setState({
      value: newValue
    })
  }

  onSelectionChange(newValue, event) {
    console.log('select-change', newValue);
    console.log('select-change-event', event);
  }

  onValidate(annotations) {
    console.log('onValidate', annotations);
  }

  setBoolean(name, value) {
    this.setState({
      [name]: value
    })
  }

  constructor(props) {
    super(props);

    this.state = {
      value: defaultValue,
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      fontSize: 14,
      showGutter: true,
      showPrintMargin: true,
      highlightActiveLine: true,
      enableSnippets: false,
      showLineNumbers: true,
    };

    this.onChange = this.onChange.bind(this);
    this.setBoolean = this.setBoolean.bind(this);
  }

  render() {
    return (
      <div className="columns">
        <div className="examples column">
          <h2>Editor</h2>
          <AceEditor
            mode='markdown'
            theme='monokai'
            name="blah2"
            onLoad={this.onLoad}
            onChange={this.onChange}
            onSelectionChange={this.onSelectionChange}
            onValidate={this.onValidate}
            value={this.state.value}
            fontSize={16}
            showPrintMargin={false}
            showGutter={false}
            highlightActiveLine={true}
            setOptions={{
              enableBasicAutocompletion: false,
              enableLiveAutocompletion: false,
              enableSnippets: false,
              showLineNumbers: false,
              tabSize: 2,
          }}/>
      </div>
    </div>
    );
  }
}

export default App;

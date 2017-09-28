import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import MarkdownEditor from './components/MarkdownEditor'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MarkdownEditor />, document.getElementById('root'));
registerServiceWorker();

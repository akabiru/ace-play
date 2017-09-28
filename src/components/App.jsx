import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MarkdownEditor from './MarkdownEditor'

const App = props => (
  <Router>
      <div>
        <Route
          path='/'
          component={MarkdownEditor}
        />
      </div>
  </Router>
)

export default App

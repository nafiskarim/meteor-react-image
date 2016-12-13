import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list.js'

const App = () => {
  return (
    <div>
      <ImageList />
    </div>
  )
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('container'))
})

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './store'
import Articles from './components/Article/Articles'
import Sources from './components/Source/Sources'
class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <div className="App">
          <div className = "container">
            <Sources/>
            <Articles/>
          </div>
        </div>
      </Provider>
    )
  }
}

export default App

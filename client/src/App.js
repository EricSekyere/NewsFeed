import React, { Component } from 'react'
import { Provider } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import store from './store'
import Articles from './components/Article/Articles'
import Sources from './components/Source/Sources'
class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <div className="App">
          {/*<header className="App-header">
            <img src={ logo } className="App-logo" alt="logo"/>
            <h1 className="App-title">NewsFeed Starter</h1>
    </header>*/}
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

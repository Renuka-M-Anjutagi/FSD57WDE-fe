import React from 'react';
import { Component } from 'react';
import Counter from './components/Counter';
import Card from './components/Card';

class App extends Component {
    constructor(props) {
        super(props); // to call the constructor of the parent class
    
        // define the state
        this.state = {
          counter: 0
        }
      }
    handleIncrement = () => {
        // update teh state (data) of the component: counter
        this.setState({
          // provide a new state
          counter: this.state.counter - 1
        })
      }
    render() {
        console.log(`rendering...${this.state.counter}`)
        return (
          <div>
            <Counter counter={ this.state.counter } />
            <button onClick={this.handleIncrement}>Decrement</button>
            <Card />
          </div>
        )
      }
   
}

export default App

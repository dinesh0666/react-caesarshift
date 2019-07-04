import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: 'React',
      decrytText :''
    };
  }


//The fromCharCode() method converts Unicode values into characters.
//Return the Unicode of the first character in a string (the Unicode value for "H"):
  caesarShift = (str, key) =>{
  return str.toUpperCase().replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0)-65+key)%26+65))
}


  onChange =(e) =>{
    this.setState({
        text:e.target.value
    },()=>{
      this.setState({
        decrytText:this.caesarShift(this.state.text,1)
      })
    })
  }

  render() {
    return (
      <div>
      <label>
      Enter the Text to Encryt :
      </label>
      <input type = "text"  onChange={this.onChange}/>
      <div>
      Encrypted Text:{this.state.decrytText}
      </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);

        this.state={
            username: '',
            password: '',
            errusername: '',
            errpassword: ''
        }
    }

    change(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onsubmit=(e)=>{
        e.preventDefault();
        if(this.state.username === "")
        {
            //alert("Fill the username.");
            this.setState({
                errusername: "*** Fill the username. ***"
            });
        }
        if(this.state.password === "")
        {
            this.setState({
                errpassword: "*** Fill the password. ***"
            })
        }
        if(this.state.username !== "" && this.state.password !== ""){
            alert("Form Submitted");
        }
    }
    ;

  render() {
    return (
      <div className="App">
        <form method={"post"}>
            <input name={"username"} placeholder={"Username"} value={this.state.username} onChange={e=>this.change(e)}/>
            <input name={"password"} placeholder={"Password"} value={this.state.password} onChange={e=>this.change(e)}/>
            <button onClick={e=>this.onsubmit(e)}>Login</button>
            <h5 className={"err"}>{this.state.errusername}</h5>
            <h5 className={"err"}>{this.state.errpassword}</h5>
        </form>
      </div>
    );
  }
}

export default App;

import React, { useState } from 'react';
import "./App.css";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailerr: '',
      passworderr: ''
    }
  }


  valid = () => {
   
     if(!this.state.email.match('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')){
      this.setState({ emailerr: "invalid email" })
  }
  else if(this.state.password.length <5 ){
      this.setState({passworderr:"invalid password"})
  }
    else { return true; }


  }

  submit = () => {
    this.setState(
      { emailerr: "", passworderr: "" })
    if (this.valid()) {
      alert("submitted");
    }
  }



  render() {

    return (
      <React.Fragment>
        <div className="container" >
          <div className="main-div">

            <div className="heading">
              <h1>Login</h1>

            </div>
            <div className="email">
              <label>Email :</label>

              <input type="text"
                placeholder="Enter your Email"
                onChange={(event) => {
                  this.setState({ email: event.target.value })
                }}
              />

            </div>
            <br></br>
            <p style={{ color: "red", fontSize: 10 }}>{this.state.emailerr}</p>
            <br />
            <div className="password">
              <label>Password :</label>

              <input
                type="text"

                placeholder="Enter your Password"
                onChange={(event)=>{this.setState({password : event.target.value})}}


              />

            </div>
            <br />
            <p style={{ color: "red", fontSize: 10 }}>{this.state.passworderr}</p>
            <br />
            <div className="button-div">
              <button onClick={() => this.submit()}>submit</button>
              <p className="resister">
                if you are not resistered please
                    <b ><a href="./register.jsx" target="_blank"> Resister</a></b>
              </p>
            </div>
            <p>data</p><br />


          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default App;
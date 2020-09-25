import React from 'react';
import ReactDOM from 'react-dom';
import './register.css';



class Register extends React.Component {

    constructor() {
        super();
        this.state = {
          fname:'' ,
          lname:'',         
          email: '',
          password: '',
          fnameerr:'',
          lnameerr:'',
          emailerr: '',
          passworderr: ''
        }
      }
    
    
      valid = () => {
        // if (!this.state.email.includes("@") && this.state.password.length < 4) {
        //   this.setState(
        //     { emailerr: "invalid email", passworderr: "password lenth is short" })
    
        // }
        if(this.state.fname.length < 2){
            this.setState({fnameerr: "invalid name"})
           
        }
        else if(this.state.lname.length < 2){
            this.setState({lnameerr: "invalid name"})
            
        }
        else if(!this.state.email.match('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')){
            this.setState({ emailerr: "invalid email" })
        }
        else if(this.state.password.length <5 ){
            this.setState({passworderr:"invalid password"})
        }

        //  else if (!this.state.email.includes("@")) {
        //   this.setState({ emailerr: "invalid email" })
    
        // }
        // else if (this.state.password.length < 4) {
        //   this.setState({ passworderr: "password lenth is short" })
    
        // }
        else { return true; }
    
    
      }
    
      submit = () => {
        this.setState(
          { emailerr: "", passworderr: "",fnameerr:"", lnameerr:'' })
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
              <h1>Registeration </h1>
            </div>
            <div className="fname">
              <label>First Name :</label>

              <input type="text"
                placeholder="Enter your first name"
                onChange={(event) => {
                  this.setState({ fname: event.target.value })
                }}
              />

            </div>
            <p style={{ color: "red", fontSize: 10 }}>{this.state.fnameerr}</p>
            
            <div className="lname">
              <label>Last Name :</label>

              <input type="text"
                placeholder="Enter your last name"
                onChange={(event) => {
                  this.setState({ lname: event.target.value })
                }}
              />

            </div>
            <p style={{ color: "red", fontSize: 10 }}>{this.state.lnameerr}</p>
            
            <div className="email">
              <label>Email :</label>

              <input type="text"
                placeholder="Enter your Email"
                onChange={(event) => {
                  this.setState({ email: event.target.value })
                }}
              />

            </div>
           
            <p style={{ color: "red", fontSize: 10 }}>{this.state.emailerr}</p>
           
            <div className="password">
              <label>Password :</label>

              <input
                type="text"

                placeholder="Enter your Password"
                onChange={(event)=>{this.setState({password: event.target.value})} }


              />

            </div>
           
            <p style={{ color: "red", fontSize: 10 }}>{this.state.passworderr}</p>
            <br />
            <div className="button-div">
              <button onClick={() => this.submit()}>submit</button>
              <p className="resister">
                if you have already resistered please
                    <b ><a href="./register.jsx" target="_blank"> Login</a></b>
              </p>
            </div>
            <p>data</p><br />


          </div>
        </div>

      </React.Fragment>
        )
    }

}



export default Register;
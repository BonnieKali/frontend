import React, { Component } from "react";
import props from 'prop-types';
import axios from "axios";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    
    handleSubmit = async (e) => {
        e.preventDefault()
        console.log(this.state)
        alert('A name was submitted: ' + this.state.username);
        // const instance_axios = axios.create({
        //     baseURL: 'http://localhost:5000/api/',
        //     timeout: 1000,
        //     headers: {'X-Custom-Header': 'foobar'}
        //   });
        const res = await axios.post('auth/register',
            this.state
        );
        console.log(res)
    }        
    render() {
        
        // const {username, password} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="username" className="form-control" placeholder="Enter email" value={this.state.username} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handleChange}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" >Sign Up</button>
                
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>

            </form>
        );
    }
}
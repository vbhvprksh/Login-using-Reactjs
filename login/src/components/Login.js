import React from 'react';
class Login extends React.Component{
    
    state={
        email:'',
        password:''
    }
    handleChange = (e) => {
        const{name,value}=e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) => {
        alert ("Login Successful " + this.state.email );
    }

    render(){
        return(
            <div>
                <h1>Login Page for Telaverge</h1>

                <form onSubmit={this.handleSubmit} >
                    <input name="email" type="email" placeholder="Enter password..." required onChange={this.handleChange}></input>
                    <input name="password" type="password" placeholder="Enter password..." required onChange={this.handleChange}></input>
                    <button onSubmit={this.handleSubmit}>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login;
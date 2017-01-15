import React from 'react';
import $ from 'jquery';
import QuickQuote from './QuickQuote.jsx';

class Login extends React.Component {
	constructor() {
		super();

		this.state = {
			login: "",
			password: "",
			isLogged: false
		};

		this.updateLoginState = this.updateLoginState.bind(this);
		this.updatePasswordState = this.updatePasswordState.bind(this);
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}

	login(e) {
		$.post('http://localhost:5000/api/user/login', { email: this.state.login, password: this.state.password })
		.then(function(data) {
			if (!data.length) throw new Error('login failed');

			this.setState({
				isLogged: true
			});
			console.log(data);
		}.bind(this)).catch(function(error) {
			console.log(error);
		});
		this.clearFields();
	}

	logout(e) {
		this.setState({
			isLogged: false
		});
		this.clearFields();
	}

	clearFields() {
		this.setState({
			login: "",
			password: ""
		});
	}

	updateLoginState(e) {
      this.setState({login: e.target.value});
   	}

   	updatePasswordState(e) {
      this.setState({password: e.target.value});
   	}

   	render() {
   		let form = null;
   		if (!this.state.isLogged) {
   			form = 	(<div>
   						<input className="form-control" type="text" placeholder="log-in" 
   							value={this.state.login} onChange={this.updateLoginState} required/>
	            		<input className="form-control" type="password" placeholder="password" 
	            			value={this.state.password} onChange={this.updatePasswordState} required/>
	            		<button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.login}>Log in</button>
	            	</div>);
   		} else {
   			form = (<div>
   					<button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.logout}>Log out</button>
   					</div>);
   		}

   		let quickQuote = this.state.isLogged ? <QuickQuote/> : null;

      	return (
         	<div className="container login">
            	{form}
            	{quickQuote}
         	</div>
      	);
   	}
}

export default Login;
import React,{Component} from "react";
import GoogleLogin from 'react-google-login';
export default class Login extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
		this.loginSuccess = this.loginSuccess.bind(this);
		this.loginFailure = this.loginFailure.bind(this);
	}
	componentWillReceiveProps(NextProps){
	    console.log("component will receive props....",NextProps);
	    if(NextProps.login === true){
	    	this.props.history.push("/dashboard");
	    }
   }
	loginSuccess(){
		//this.props.history.push("/dashboard");
		this.props.loginSuccess(true);
	}
	loginFailure(){
		this.props.loginFailure(false);
	}
	render(){
		return (<GoogleLogin
		    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
		    buttonText="Login"
		    onSuccess={this.loginSuccess}
		    onFailure={this.loginFailure}
		  />)
	}
}  
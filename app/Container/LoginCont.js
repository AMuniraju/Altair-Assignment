import {connect} from "react-redux";
import {loginSuccess,loginFailed} from ".././actions"
import Login from ".././Components/Login";
const mapStateToProps = (state) => ({
	login:state.login
})

const mapDispatcherToProps = (dispatch) =>{
  return({
    loginSuccess(value){
    	dispatch(loginSuccess(value));
    },
    loginFailed(value){
    	dispatch(loginFailed(value));
    }})
}
export default connect(mapStateToProps,mapDispatcherToProps)(Login);

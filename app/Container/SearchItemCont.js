import React from "react"
import {connect} from "react-redux";
import {loginSuccess,loginFailed} from ".././actions"
import SearchItem from ".././Components/SearchItem";
import {withRouter} from "react-router-dom";
const mapStateToProps = (state) => {
	const getItems=() =>{
		let {cardetails} = state;
		let {name,value} = state.filterBy;
		if(name){
			return cardetails.filter((item) =>(item[name] == value));
		}else{
			return cardetails;
		}
		
	}	
	return {
		items:getItems()
	}
}

const mapDispatcherToProps = (dispatch) =>{
  return({})
}
const com = connect(mapStateToProps,mapDispatcherToProps)(SearchItem);
export default withRouter(com);
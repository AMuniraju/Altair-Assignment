import React from "react"
import {connect} from "react-redux";
import {setFilterValue,removeFilter} from ".././actions"
import SearchPage from ".././Components/SearchPage";
const mapStateToProps = (state) => {
	const brands = ()=> {
		var {cardetails} = state;
		return cardetails.map((value) => value.manufacturer)
	}
	const price = ()=>{
		var {cardetails} = state;
		return cardetails.map((value) => value.price)	
	}
	return {
		brands:brands(),
		price:price()
	}
}

const mapDispatcherToProps = (dispatch) =>{
  return({
    selectFilter(value){
    		dispatch(setFilterValue(value))
    },
    cancel(){
  		dispatch(removeFilter());
  	}
})
}
export default connect(mapStateToProps,mapDispatcherToProps)(SearchPage);

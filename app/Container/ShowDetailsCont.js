import React from "react"
import {connect} from "react-redux";
import {addItemToCart,removeFilter} from ".././actions"
import ShowDetails from ".././Components/ShowDetails";


const mapStateToProps = (state,props) => {
	const getDetails = ()=> {
		var id = props.match.params.id;
		return state.cardetails.filter((value)=>(value.id==id))[0];
	}
	return {
		details:getDetails(),
		cart:state.cart
	}
}

const mapDispatcherToProps = (dispatch) =>{
  return({
    addItem(value){
    		dispatch(addItemToCart(value))
    },
    cancel(){
  		dispatch(removeFilter());
  	}
})
}
export default connect(mapStateToProps,mapDispatcherToProps)(ShowDetails);

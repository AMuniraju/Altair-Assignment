import React from "react"
import {connect} from "react-redux";
import {removeFilter} from ".././actions"
import CartPage from ".././Components/CartPage";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state,props) => {
	const getCartDetails= () => {
		return state.cart.reduce((acc,item)=>{
			var arr = acc.filter((value)=>(value.id==item.id));
				if(arr.length > 0){
					item.count++;
				}else{
					item.count = 1;
					acc.push(item)
				}
				return acc;
		},[])
	}
	return {
		cartItems:getCartDetails()
	}
}

const mapDispatcherToProps = (dispatch) =>{
  return({
  	cancel(){
  		dispatch(removeFilter());
  	}
  })
}
export default withRouter(connect(mapStateToProps,mapDispatcherToProps)(CartPage));

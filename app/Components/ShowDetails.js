import React from "react";

export default class ShowDetails extends React.Component{
	constructor(props){
		super(props);
		this.state = {

		}
		this.cancel = this.cancel.bind(this);
		this.addToCart = this.addToCart.bind(this);
	}
	cancel(){
		this.props.cancel();
		this.props.history.push("/dashboard");
	}
	addToCart(){
		var {details,addItem} = this.props;
		addItem(details);
		this.props.history.push("/cart");	
	}
	render(){
		var {details} = this.props;
		return (<div className="show-details">
				<p className="product-details-header">Products Details</p>
				<div><img src={details.img}/></div>
				<div><span className="name">Manufacturer:</span><span className="value">{details.manufacturer}</span></div>
				<div><span className="name">Model:</span><span className="value">{details.model}</span></div>
				<div><span className="name">Price:</span><span className="value">${details.price}</span></div>
				<div><span className="value">${details.Description}</span></div>
				<div>
					<button onClick={this.addToCart}>Add To Cart</button>
					<button onClick={this.cancel}>Cancel</button>
				</div>
			</div>)
	}
}
import React,{Component}from "react";
class SearchPage extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
		this.addMoreItems = this.addMoreItems.bind(this);
		this.processCart = this.processCart.bind(this);
		this.removeCartItem = this.removeCartItem.bind(this);
		this.removeCart = this.removeCart.bind(this);
	}
	addMoreItems(){
		this.props.cancel();
		this.props.history.push("/dashboard");
	}
	processCart(event){
		
	}
	removeCartItem(event){
		
	}
	removeCart(event){
		
	}
	render(){
		let {cartItems} = this.props;
		let total =0;
		let cartItemsContent = cartItems.map((value,index)=>{
			let price = value.price*value.count;
			total += price;
			return <div className="cart-page">
				<span className="index">{++index}</span>
				<img  src={value.img}/>
				<span className="model">{value.model}</span>
				<span className="count">{value.count}</span>
				<span className="price">{value.price*value.count}</span>
			</div>
		});
		return (<div className="cart-detail-page">
			<p className="cart-details-header">Cart Details</p>
			{cartItemsContent}
			{cartItemsContent.length > 0 ? <p className="total"><span>Total - </span><span>${total}</span></p> : ""}
			<button onClick={this.addMoreItems}>Add More Items</button>
		</div>);
	}
}

export default SearchPage;
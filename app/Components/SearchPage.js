import React,{Component}from "react";
class SearchPage extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
		this.brandChange = this.brandChange.bind(this);
		this.priceChange = this.priceChange.bind(this);
		this.removeFilter = this.removeFilter.bind(this);
	}
	brandChange(event){
		var value  = event.target.value;
		if(value){
			this.refs.priceFilter.value = "";
			this.props.selectFilter({name:"manufacturer",value:value});
		}
	}
	priceChange(event){
		var value  = event.target.value
		if(value){
			this.refs.brandFilter.value = "";
			this.props.selectFilter({name:"price",value:value});
		}
	}
	removeFilter(){
		this.refs.brandFilter.value = "";
		this.refs.priceFilter.value = "";
		this.props.cancel();
	}
	render(){
		let {brands,price} = this.props;
		let brandsContent = brands.map((value,index)=>(<option value={value} key={index}>{value}</option>));
		let priceContent = price.map((value,index)=>(<option value={value}  key={index}>{value}</option>));	
		if(brandsContent){
			brandsContent.unshift(<option value="" key="-1">Select Brand</option>);
		}
		if(priceContent){
			priceContent.unshift(<option value="" key="-1">Select Price</option>);
		}
		return (<div className="search-page">
			<select onChange={this.brandChange} ref="brandFilter">{brandsContent}</select>
			<select onChange={this.priceChange}  ref="priceFilter">{priceContent}</select>
			<button onClick={this.removeFilter}>Remove Filter</button>
		</div>);
	}
}

export default SearchPage;
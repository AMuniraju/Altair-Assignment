import React,{Component}from "react";
class SearchItem extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
		this.selectItem = this.selectItem.bind(this);
	}
	selectItem(event){
		var id = event.target.id;
		if(id){
			this.props.history.push("/showDetails/"+id);
		}
	}
	render(){
		let {items} = this.props;
		let itemsContent = items.map((value,index)=>{
			return <div key={index} className="searchItem">
						<p>{value.manufacturer} - {value.model}</p>
						<img src={value.img} id={value.id} onClick={this.selectItem}/>
					</div>
		});
		
		return (<div className="searchItems">
			{itemsContent}
		</div>);
	}
}

export default SearchItem;
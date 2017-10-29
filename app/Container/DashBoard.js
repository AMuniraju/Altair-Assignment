import React,{Component} from "react";
import SearchPageCont from ".././Container/SearchPageCont.js"
import SearchItemCont from ".././Container/SearchItemCont.js"
class DashBoard extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}
	render(){
		return(<div className="dashboard">
				<SearchPageCont />
				<SearchItemCont />
			</div>)
	}
} 


export default DashBoard;

import React from "react";
import {HashRouter as Router,Switch,Route} from "react-router-dom";
import Login from ".././Container/LoginCont";
import Header from ".././Components/Header.js";
import Whoops404 from ".././Components/Whoops404.js";
import DashBoard from ".././Container/DashBoard.js";
import ShowDetails from ".././Container/ShowDetailsCont";
import CartPageCont from ".././Container/CartPageCont";
const AppRouters = (<div>
		<Header/>
		<Router>
			<Switch>
			  <Route exact path="/" component={Login}/>
			  <Route path="/dashboard" component={DashBoard}/>
			  <Route path="/showDetails/:id" component={ShowDetails}/>
			  <Route path="/cart" component={CartPageCont}/>
			  <Route component={Whoops404}/>
			</Switch>
		</Router>
	</div>)

export default AppRouters;

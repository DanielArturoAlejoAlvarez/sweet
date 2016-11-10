//console.log("It works!");

import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";


class App extends React.Component {

	constructor() {
		super();
		this.state = {
			homeLink: "shopping cart",
			homeMounted: true
		};
	}

	onGreet() {
		alert("Hello");
	}

	onChangeLinkName(newName) {
		this.setState({
			homeLink: newName
		});
	}

	onChangeHomeMounted() {
		this.setState({
			homeMounted: !this.state.homeMounted
		});
	}

	render() {
		// var user = {
		// 	"name": "Anna",
		// 	"hobbies": ["Sports", "Reading"]
		// };

		let homeCmp = "";
		if(this.state.homeMounted) {
			homeCmp = (
				<Home
					name={"Mark Zuckerberg"}
					InitialAge={32} 
					greet={this.onGreet}
					changeLink={this.onChangeLinkName.bind(this)}
					initialLinkName={this.state.homeLink}
				/>
			);
		}

		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header homeLink={this.state.homeLink}/>
					</div>
				</div><br />
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						{ homeCmp }
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1"><br />
						<button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-danger btn-lg btn-block">(Un) Mount Home Component</button>
					</div>
				</div>				
			</div>

		);
	}
}

render(<App/>, window.document.getElementById("app"));
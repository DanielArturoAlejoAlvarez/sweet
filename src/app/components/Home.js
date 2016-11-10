import React from "react";


export class Home extends React.Component {

	constructor(props) {
		super();
		//this.age = props.age;
		this.state = {
			age: props.InitialAge,
			status: 0,
			//homeLink: "Change Link"
			homeLink: props.initialLinkName
		};
		setTimeout(() => {
			this.setState({
				status: 1
			});
		}, 3000);
		console.log("Constructor");
	}
	/*************/
	componentWillMount() {
		console.log("Component will mount");
	}

	componentDidMount() {
		console.log("Component did mount");
	}

	componentWillReceiveProps(nextProps) {
		console.log("Component will receive mount", nextProps);
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("Should Component update", nextProps, nextState);
		// if(nextState.status===1) {
		// 	return false;
		// }
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
		console.log("Component will update", nextProps, nextState);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("Component did update", prevProps, prevState);
	}

	componentWillUnmount() {
		console.log("Component will unmount");
	}


	/*************/

	onMakeOlder() {
		//this.age += 3;
		//console.log(this.age);
		this.setState({
			age: this.state.age + 3
		});
	}

	onChangeLink() {
		this.props.changeLink(this.state.homeLink);
	}

	onHandleChange(event) {
		this.setState({
			homeLink: event.target.value
		}); 
	}

	render() {

		//console.log(this.props);

		// let content = "";
		// if(true) {
		// 	content = <p>Hello!</p>;
		// }
		//let britny = 5;
		//var text = "Something!";

		
		return(			
			<div>
				<h1>Sweet(UI/UX)</h1><br />				
				<p>Your name is <strong>{this.props.name}</strong>, your age is <span className="age">{this.state.age}</span></p><br />
				<p>Status: <span className="status">{this.state.status}</span></p><br />
				<button onClick={() => this.onMakeOlder()} className="btn btn-success btn-lg btn-block">Make me older</button>
				<hr/>
				<button onClick={this.props.greet} className="btn btn-primary btn-lg btn-block">Greet</button>
				<hr/>
				<input type="text" value={this.state.homeLink}
				 onChange={(event) => this.onHandleChange(event)} className="form-control"/>

				<button onClick={this.onChangeLink.bind(this)} className="btn btn-warning btn-lg">Change Header Link</button>
			</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string,
	InitialAge: React.PropTypes.number,
	greet: React.PropTypes.func, 
	initialLinkName: React.PropTypes.string
	
};
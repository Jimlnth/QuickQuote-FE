import React from 'react';

class QuickQuote extends React.Component {
	constructor() {
		super();

		this.state = {
			familyName: "",
			value: "",
			price: 0
		};

		this.updateFamilyNameState = this.updateFamilyNameState.bind(this);
		this.updateValueState = this.updateValueState.bind(this);
		this.getPrice = this.getPrice.bind(this);
	}

	getPrice(e) {
		this.setState({price: 50});
	}

	updateFamilyNameState(e) {
      this.setState({familyName: e.target.value});
   	}

   	updateValueState(e) {
      this.setState({value: e.target.value});
   	}

	render() {
		let price = this.state.price ? <p className="well">{this.state.price} €</p> : null;

		return (
			<div className="container quickQuote">
	            	<input className="form-control" type="text" placeholder="Family Name" 
   							value={this.state.familyName} onChange={this.updateFamilyNameState} required/>
   					<select className="form-control">
   						<option value="Audi">Audi</option>
   						<option value="BMW">BMW</option>
   						<option value="Porsche">Porsche</option>
   					</select>
   					<input className="form-control" type="number" placeholder="Value" 
   							value={this.state.value} onChange={this.updateValueState} required/>
   					<button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.getPrice}>Get price</button>
   					{price}
         	</div>
		);
	}
}

export default QuickQuote;
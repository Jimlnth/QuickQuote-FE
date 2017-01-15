import React from 'react';

class QuickQuote extends React.Component {
	constructor() {
		super();

		this.state = {
			familyName: '',
			make: 'Audi',
			value: '',
			price: 0,
			error: '',
		};

		this.updateFamilyNameState = this.updateFamilyNameState.bind(this);
		this.updateMakeState = this.updateMakeState.bind(this);
		this.updateValueState = this.updateValueState.bind(this);
		this.getPrice = this.getPrice.bind(this);
	}

	getPrice(e) {
		if (!this.state.familyName || !this.state.make || !this.state.value) return this.setState({error: 'Please fill the fields'});
		if (this.state.value < 5000 || this.state.value > 75000) return this.setState({error: 'Incorrect value : must be between 5000 € and 75000 €'});
		
		let price = 0;

		switch(this.state.make) {
			case 'Audi':
				price = 250 + 0.3 * this.state.value;
				break;
			case 'BMW':
				price = 150 + 0.4 * this.state.value;
				break;
			case 'Porsche':
				price = 500 + 0.7 * this.state.value;
				break;
			default:
				price = 'Incorrect make';
		}
		this.setState({	price: price, error: '' });
	}

	updateFamilyNameState(e) {
      this.setState({ familyName: e.target.value });
   	}

   	updateMakeState(e) {
      this.setState({ make: e.target.value });
   	}

   	updateValueState(e) {
      this.setState({ value: e.target.value });
   	}

	render() {
		let price = this.state.price ? <p className="well">{this.state.price} €</p> : null;
		let error = this.state.error ? <p className="alert alert-danger">{this.state.error}</p> : null;

		return (
			<div className="container quickQuote">
	            	<input className="form-control" type="text" placeholder="Family Name" 
   							value={this.state.familyName} onChange={this.updateFamilyNameState} required/>
   					<select className="form-control" value={this.state.make} onChange={this.updateMakeState}>
   						<option value="Audi">Audi</option>
   						<option value="BMW">BMW</option>
   						<option value="Porsche">Porsche</option>
   					</select>
   					<input className="form-control" type="number" placeholder="Value" 
   							value={this.state.value} onChange={this.updateValueState} required/>
   					<button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.getPrice}>Get price</button>
   					{price}
   					{error}
         	</div>
		);
	}
}

export default QuickQuote;
import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	//like try, catch block
	componentDidCatch(error, info) { //if error, run this lifecycle hook
		this.setState({ hasError:true })
	}

	render() {
		if (this.state.hasError) {
			return <h1>Ueeepa. Isso nao eh baum</h1>
		}

		return this.props.children
	}
}

export default ErrorBoundary;
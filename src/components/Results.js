import React, {Component} from 'react';
import Result from './Result';

class Results extends Component {
	render() {
		console.log("hello")
		let gif = this.props.results.map((gif) => {
			return (
				<Result 
					key={gif.id} 
					img={gif.images.fixed_height.url} 
				/>
			)
		})

		// console.log("results:" + this.props.results)
		
		return (
			<div>
				{gif}
			</div>
		)
	}
}

export default Results;
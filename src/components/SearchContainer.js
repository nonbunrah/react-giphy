import React, {Component} from 'react';
import Search from './Search.js'
import Results from './Results'

class SearchContainer extends Component {
	render () {
		console.log('rj is awesome!');
		return (
			<div>
				<Search 
					searchFcn={this.props.searchFunction}
					handler={this.props.handleSearch}
					/>
				</div>
		)
	}
}

export default SearchContainer;
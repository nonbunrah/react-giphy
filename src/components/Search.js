import React, {Component} from 'react';

class Search extends Component {

	render() {
		return (
			<div className="Search">
				<form 
					onSubmit={this.props.handler}
				>
					<input 
						type="text" 
						placeholder="Type here!"
						onInput={this.props.searchFcn}
					/>
					<button>Search</button>
				</form>
			</div>
		)
	}
}

export default Search;
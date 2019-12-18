import React, {Component} from 'react';
import HomeComponent from './components/HomeComp.js'
import HelloWorld from './components/HelloWorld.js'
import SearchContainer from './components/SearchContainer.js'
import Results from './components/Results.js'
import './App.css'


class Home extends Component {
	state = {
		search: "",
		results: [],
	}

	// componentDidMount() {
	// 	this.getInitialState();
	// }

	// getInitialState = () => {
	// 	this.handleSearch()
	// }

	searchFunction = (event) => {
		this.setState({search: event.target.value})
		console.log(this.state.search)
	}

	handleSearch = (event) => {
		event.preventDefault();
		fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=oJoGZi67RDIG0tW07r1vgBRtIu7fKaDU&limit=5`)
			.then(res => res.json())
			.then(json =>{
				this.setState({
					results: json.data
				})
			})
		console.log(this.state.results)
		console.log(this.state.search)
	}

  render() {
    return (
      <div className="Home">
        <HomeComponent />
        <SearchContainer 
        	searchFunction={this.searchFunction}
        	handleSearch={this.handleSearch}
        />
        
        { this.state.results.length 
        	? <Results 
		        	results={ this.state.results }
    		    />	
        	: "Loading..."
      	}
      </div>
    )
  }
}

export default Home;

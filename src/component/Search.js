import React, {Component} from 'react';
import { SearchBar } from 'react-native-elements'

class Search extends Component {
	render() {
		 return (
			<SearchBar
				round
				noIcon
				placeholder='Type Here...' />
		 );
	}
}

export default Search;
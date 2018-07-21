import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Header, Title, Body} from 'native-base';

class AppHeader extends Component {
	render() {
		return (
			<Header style={styles.header}>
				<Body>
					<Title>Muser - Simple Music Search</Title>
				</Body>
			</Header>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#333",
		height: 80
	},
});

export default AppHeader;

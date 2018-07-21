import React, {Component} from 'react';
import { Container, Content, Footer, FooterTab, Button, Text } from 'native-base';
import Expo from "expo";
import AppHeader from './src/layout/AppHeader';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <AppHeader />
        <Content>
          <Text>
            Search and download music for free!
          </Text>
        </Content>
      </Container>
    );
  }
}

export default App;

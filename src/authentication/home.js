import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      input: ' ',
    };
  }
  onChangeText() {}

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Welcomeuser</Text>
        </View>
      </SafeAreaView>
    );
  }
  componentDidMount() {}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3DFDE',
    flex: 1,
  },
  child: {
    //height: 100,
    width: '100%',
    flex: 1,
  },
});

export default Home;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      headerTag: ' ',
    };
  }
  splitString(headerTag) {
    var temp = headerTag.split(' ');
    this.state.headerTag = temp[1];
  }
  signINcheck() {
    const {username, password} = this.state;
    const {navigation} = this.props;

    if (this.state) {
      fetch(
        'https://admin-stage.priskoll.occdev.axfood.se/axfood/axfood-security/login',
        {
          method: 'POST',
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        },
      ).then(response => {
        this.splitString(response.headers.map.authorization);
        console.log(this.state.headerTag);
        if (!(response.status === 200)) {
          Alert.alert('wrong credentials');
        } else {
          response.json();
          navigation.navigate('HomeScreen', {headerTag: this.state.headerTag});
        }
      });
    }
  }
  onChangeText(input) {}
  render() {
    const {navigation} = this.props;
    const {username, password} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.usernameView}>Username</Text>
          <TextInput
            style={styles.TextInputView}
            onChangeText={txt => this.setState({username: txt})}
          />
        </View>
        <View>
          <Text style={styles.usernameView}>password</Text>
          <TextInput
            style={styles.TextInputView}
            onChangeText={txt => this.setState({password: txt})}
          />
        </View>
        <TouchableOpacity
          style={styles.touchableView}
          onPress={() => this.signINcheck()}>
          <Text style={styles.usernameView}>press to login</Text>
        </TouchableOpacity>
        <Text>input username is : {username}</Text>
        <Text> input password is : {password}</Text>
      </SafeAreaView>
    );
  }
  componentDidMount() {}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3DFDE',
    flex: 1,
    alignItems: 'center',
  },
  usernameView: {
    fontSize: 20,
  },
  TextInputView: {
    height: 40,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: 'white',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  touchableView: {
    width: 200,
    height: 30,
    backgroundColor: 'green',
    alignItems: 'center',
    marginBottom: 40,
  },
});

export default Login;

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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      authData: [],
    };
  }
  signINcheck() {
    const {authData, username, password} = this.state;
    const {navigation} = this.props;

    if (this.state) {
      fetch(
        'https://admin-stage-temp.priskoll.occdev.axfood.se/axfood/axfood-security/login',
        {
          method: 'POST',
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        },
      )
        .then(response => response.json())
        .then(responseData => {
          this.setState({
            authData: responseData,
          });
          if (responseData.success == 'true') {
            navigation.navigate('HomeScreen');
          } else {
            Alert.alert('wrong credentials');
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

export default Home;

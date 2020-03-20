import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
class Account extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text> Account </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3DFDE',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEdit: {
    fontSize: 25,
    paddingTop: 50,
    paddingLeft: 20,
    color: '#fff',
  },
});

export default Account;

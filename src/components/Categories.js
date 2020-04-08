import React from 'react';
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';

function Item({title}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    };
  }

  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.Activity}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => {
            return (
              <View style={styles.flatViewStyling}>
                <Text style={{fontSize: 24, margin: 5}}>{item.userId}</Text>
                <View style={styles.itemStyling}>
                  <Text style={{fontSize: 15}}>{item.id}</Text>
                  <View>
                    <Text style={styles.textStyling}>{item.title}</Text>
                    <Text style={{fontSize: 15}}> Volume: {item.body}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',

    marginHorizontal: 16,
  },
  Activity:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  flatViewStyling: {
    backgroundColor: 'cyan',
    margin: 6,
    borderRadius: 5,
  },

  itemStyling: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },

  textStyling: {
    fontSize: 15,
  },
});

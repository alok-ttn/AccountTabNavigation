import React from 'react';
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';

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
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={styles.flatViewStyling}>
                <View style={styles.useridview}>
                  <Text style={styles.userIdText}>{item.userId}</Text>
                  <Text style={styles.itemIdText}>{item.id}</Text>
                </View>
                <View style={styles.itemStyling}>
                  <Text style={styles.textTitleStyling}>{item.title}</Text>
                  <Text style={styles.itembodyText}> Volume: {item.body}</Text>
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
    backgroundColor: '#f2f2f2',
    marginHorizontal: 10,
  },
  itembodyText: {fontSize: 15, marginBottom: 2, marginTop: 5},
  itemIdText: {fontSize: 28, textAlign: 'center', marginTop: 20},
  userIdText: {fontSize: 15, margin: 5},
  useridview: {flex: 0.2, backgroundColor: '#a4d5f6'},
  Activity: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  flatViewStyling: {
    backgroundColor: '#b8c198',
    margin: 6,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  itemStyling: {
    flex: 0.8,
    margin: 5,
  },

  textTitleStyling: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
});

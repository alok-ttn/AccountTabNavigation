import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ' ',
      input: ' ',
      data: '',
      storeData: [],
      isModalVisible: false,
    };
  }
  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  storeApi() {
    const {data} = this.state;
    const {navigation, route} = this.props;
    fetch(
      'https://admin-stage.priskoll.occdev.axfood.se/axfood/axfood-product-scan/stores',
      {
        method: 'GET',
        headers: {
          Authorization: data,
        },
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({storeData: responseJson});
        this.toggleModal();
        // navigation.navigate('StoreList', {storeData: this.state.storeData});
      });
  }
  render() {
    const {navigation, route} = this.props;
    const headerTag = route.params.headerTag;
    this.state.data = headerTag;
    return (
      <SafeAreaView style={styles.container}>
        <Text>{this.state.data}</Text>
        <TouchableOpacity onPress={() => this.storeApi()}>
          <View style={styles.button}>
            <Text>press to login</Text>
          </View>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          animationInTiming={1000}
          hasBackdrop={true}
          visible={this.state.isModalVisible}
          onBackdropPress={this.toggleModal}>
          <View style={styles.ModalMainVIew}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              scrollEnabled={true}
              data={this.state.storeData}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity activeOpacity={0.5}>
                    <View style={styles.ModalFlatItemsVIew}>
                      <View style={styles.ModalFlatInnerItemsView}>
                        <Text style={styles.ModalTextView}>{item.storeId}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={item => item.storeId}
            />
          </View>
        </Modal>
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
  child: {
    width: '100%',
    flex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    height: 50,
    width: 300,
    marginTop: 100,
  },
  ModalFlatItemsVIew: {
    height: 70,
    width: '100%',
    justifyContent: 'center',
  },
  ModalMainVIew: {
    flex: 0.7,
    backgroundColor: '#f2f2f2',
    marginTop: 50,
  },
  ModalTextView: {
    marginLeft: 30,
    fontSize: 20,
    fontWeight: '600',
    justifyContent: 'center',
  },
  ModalImagesView: {height: 40, width: 40},
  ModalFlatInnerItemsView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});

export default Home;

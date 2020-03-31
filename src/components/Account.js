import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  FlatList,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleImagepath: require('../assets/titleImage.png'),
      imagesGallery: [
        {
          picture: require('../assets/track.png'),
          textList: 'Track Order',
        },
        {
          picture: require('../assets/sizeChart.png'),
          textList: 'Size Chart',
        },
        {
          picture: require('../assets/notification.png'),
          textList: 'Notification',
        },
        {
          picture: require('../assets/store.png'),
          textList: 'Store Locator',
        },
        {
          picture: require('../assets/country.png'),
          textList: 'Country',
        },
      ],
      isModalVisible: false,
      upperList: [
        {
          picture: require('../assets/track.png'),
          textList: 'Track Order',
          seperate: '1',
        },
        {
          picture: require('../assets/sizeChart.png'),
          textList: 'Size Chart',
          seperate: '1',
        },
        {
          picture: require('../assets/notification.png'),
          textList: 'Notification',
          seperate: '1',
        },
        {
          picture: require('../assets/store.png'),
          textList: 'Store Locator',
        },
        {
          insertview: '',
        },
        {
          Bpicture: require('../assets/country.png'),
          BtextList: 'Country',
          Bflag: require('../assets/flag.png'),
          Bname: 'AED',
          seperate: '1',
        },
        {
          Bpicture: require('../assets/language.png'),
          BtextList: 'Language',
          Bflag: require('../assets/blank.png'),
          Bname: 'ENG',
          seperate: '1',
        },
        {
          Bpicture: require('../assets/about.png'),
          BtextList: 'About',
          Bflag: require('../assets/blank.png'),
          Bname: '',
          seperate: '1',
        },
        {
          Bpicture: require('../assets/faq.png'),
          BtextList: 'FAQ',
          Bflag: require('../assets/blank.png'),
          Bname: '',
          seperate: '1',
        },
        {
          Bpicture: require('../assets/shipping.png'),
          BtextList: 'Shipping & Returns',
          Bflag: require('../assets/blank.png'),
          Bname: '',
        },
      ],
    };
  }

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  renderSeparator = () => {
    return <View style={styles.seperator} />;
  };
  renderItem = ({item}) => {
    if ('picture' in item && 'seperate' in item) {
      return (
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.FlatListView}>
            <View style={styles.FlatListView}>
              <Image source={item.picture} style={styles.FlatIcons} />
              <Text style={styles.FlatText}>{item.textList}</Text>
            </View>
            <Image
              source={require('../assets/arrow.png')}
              style={styles.arrowStyle}
            />
          </View>
          <View>{this.renderSeparator()}</View>
        </TouchableOpacity>
      );
    } else if ('picture' in item && !('seperate' in item)) {
      return (
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.FlatListView}>
            <View style={styles.FlatListView}>
              <Image source={item.picture} style={styles.FlatIcons} />
              <Text style={styles.FlatText}>{item.textList}</Text>
            </View>
            <Image
              source={require('../assets/arrow.png')}
              style={styles.arrowStyle}
            />
          </View>
        </TouchableOpacity>
      );
    } else if ('insertview' in item) {
      return (
        <View style={styles.viewStrip}>
          <View style={styles.BottomFlatListSeparator} />
        </View>
      );
    } else if ('Bpicture' in item && 'seperate' in item) {
      return (
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.BottomFlatListView}>
            <View style={styles.FlatListView}>
              <Image source={item.Bpicture} style={styles.FlatIcons} />
              <Text style={styles.FlatText}>{item.BtextList}</Text>
            </View>
            <View style={styles.FlatListView}>
              <Image source={item.Bflag} style={styles.FlatIcons} />
              <Text style={styles.FlatTextAgain}>{item.Bname}</Text>
              <Image
                source={require('../assets/arrow.png')}
                style={styles.arrowStyle}
              />
            </View>
          </View>
          <View>{this.renderSeparator()}</View>
        </TouchableOpacity>
      );
    } else if ('Bpicture' in item && !('seperate' in item)) {
      return (
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.BottomFlatListView}>
            <View style={styles.FlatListView}>
              <Image source={item.Bpicture} style={styles.FlatIcons} />
              <Text style={styles.FlatText}>{item.BtextList}</Text>
            </View>
            <View style={styles.FlatListView}>
              <Image source={item.Bflag} style={styles.FlatIcons} />
              <Text style={styles.FlatTextAgain}>{item.Bname}</Text>
              <Image
                source={require('../assets/arrow.png')}
                style={styles.arrowStyle}
              />
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  };

  render() {
    const {upperList, imagesGallery, titleImagepath} = this.state;
    var imageXml = <Image style={styles.imageStyle} source={titleImagepath} />;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.viewTitle}>
          <View style={styles.TitleInner}>
            <View style={styles.welcomText}>
              <Text style={styles.TextWelcomeStyling}>Welcome!</Text>
            </View>
            <View style={styles.TitleInnerLower}>
              <View style={styles.signupView}>
                <TouchableOpacity>
                  <Text style={styles.signupText}>SIGN IN</Text>
                </TouchableOpacity>
                <Text style={styles.signupTextSeperator}>|</Text>
                <TouchableOpacity>
                  <Text style={styles.signupTextJoin}>JOIN</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.TitleImage}>
            <TouchableOpacity
              onPress={() => {
                this.toggleModal(!this.state.modalVisible);
              }}>
              {imageXml}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.viewStrip} />

        {/* here starts the middle component having a flatlist */}
        <View style={styles.viewMiddle}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            data={upperList}
            renderItem={this.renderItem}
            keyExtractor={item => item.textList}
          />
        </View>
        <Modal
          visible={this.state.isModalVisible}
          animationIn="slideInDown"
          animationInTiming={500}
          hasBackdrop={true}
          onBackdropPress={this.toggleModal}>
          <View style={styles.ModalMainVIew}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              scrollEnabled={true}
              data={imagesGallery}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                      this.setState({titleImagepath: item.picture});
                    }}>
                    <View style={styles.ModalFlatItemsVIew}>
                      <View style={styles.ModalFlatInnerItemsView}>
                        <Image
                          source={item.picture}
                          style={styles.ModalImagesView}
                        />
                        <Text style={styles.ModalTextView}>
                          {item.textList}
                        </Text>
                      </View>
                    </View>
                    <View>{this.renderSeparator()}</View>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={item => item.textList}
            />
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  TitleInner: {
    flex: 0.5,
    backgroundColor: '#fff',
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
  ModalFlatItemsVIew: {
    height: 70,
    width: '100%',
    justifyContent: 'center',
  },
  ModalMainVIew: {
    flex: 0.7,
    backgroundColor: '#f00',
    marginTop: 50,
  },
  signupView: {
    flexDirection: 'row',
    backgroundColor: '#FEFCEE',
    height: 30,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginTop: 10,
  },
  TextWelcomeStyling: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  TitleInnerLower: {
    flex: 0.5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 5,
  },
  FlatListView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 68,
  },
  BottomFlatListView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 68,
  },
  BottomFlatListSeparator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 12,
    marginLeft: -15,
  },
  signupText: {
    fontSize: 15,
    marginRight: 15,
  },
  welcomText: {
    flex: 0.5,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },
  signupTextSeperator: {
    fontSize: 20,
    marginRight: 8,
    fontWeight: 'bold',
  },
  signupTextJoin: {
    marginLeft: 6,
    fontSize: 15,
    marginRight: 10,
  },
  TitleImage: {
    flex: 0.5,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  textEdit: {
    fontSize: 25,
    paddingTop: 50,
    paddingLeft: 20,
    color: '#fff',
  },
  viewTitle: {
    backgroundColor: 'red',
    flex: 0.2,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 10,
  },
  viewMiddle: {
    backgroundColor: '#fff',
    flex: 1,
  },
  FlatIcons: {
    height: 30,
    width: 30,
    marginRight: 30,
    marginLeft: 20,
  },
  arrowStyle: {
    height: 20,
    width: 20,
    marginRight: 15,
  },
  FlatText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  FlatTextAgain: {
    marginRight: 20,
    fontWeight: '500',
    fontSize: 18,
  },
  viewBottom: {
    backgroundColor: '#fff',
    flex: 0.5,
    marginLeft: 20,
    marginRight: 10,
  },
  viewStrip: {
    backgroundColor: '#f2f2f2',
    flex: 0.02,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  seperator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CED0CE',
  },
});

export default Account;

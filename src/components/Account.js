import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upperList: [
        {
          picture: '/Users/alokmishra/Desktop/Asessment/src/assets/track.png',
          textList: 'Track Order',
        },
        {
          picture:
            '/Users/alokmishra/Desktop/Asessment/src/assets/sizeChart.png',
          textList: 'Size Chart',
        },
        {
          picture:
            '/Users/alokmishra/Desktop/Asessment/src/assets/notification.png',
          textList: 'Notification',
        },
        {
          picture: '/Users/alokmishra/Desktop/Asessment/src/assets/store.png',
          textList: 'Store Locator',
        },
        {
          insertview: '',
        },
        {
          Bpicture:
            '/Users/alokmishra/Desktop/Asessment/src/assets/country.png',
          BtextList: 'Country',
          Bflag: '/Users/alokmishra/Desktop/Asessment/src/assets/flag.png',
          Bname: 'AED',
        },
        {
          Bpicture:
            '/Users/alokmishra/Desktop/Asessment/src/assets/language.png',
          BtextList: 'Language',
          Bflag: '/Users/alokmishra/Desktop/Asessment/src/assets/blank.png',
          Bname: 'ENG',
        },
        {
          Bpicture: '/Users/alokmishra/Desktop/Asessment/src/assets/about.png',
          BtextList: 'About',
          Bflag: '/Users/alokmishra/Desktop/Asessment/src/assets/blank.png',
          Bname: '',
        },
        {
          Bpicture: '/Users/alokmishra/Desktop/Asessment/src/assets/faq.png',
          BtextList: 'FAQ',
          Bflag: '/Users/alokmishra/Desktop/Asessment/src/assets/blank.png',
          Bname: '',
        },
        {
          Bpicture:
            '/Users/alokmishra/Desktop/Asessment/src/assets/shipping.png',
          BtextList: 'Shipping & Returns',
          Bflag: '/Users/alokmishra/Desktop/Asessment/src/assets/blank.png',
          Bname: '',
        },
      ],
    };
  }
  renderSeparator = () => {
    return <View style={styles.seperator} />;
  };

  renderItem = ({item}) => {
    if ('picture' in item) {
      return (
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.FlatListView}>
            <View style={styles.FlatListView}>
              <Image source={{uri: item.picture}} style={styles.FlatIcons} />
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
    } else if ('Bpicture' in item) {
      return (
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.BottomFlatListView}>
            <View style={styles.FlatListView}>
              <Image source={{uri: item.Bpicture}} style={styles.FlatIcons} />
              <Text style={styles.FlatText}>{item.BtextList}</Text>
            </View>
            <View style={styles.FlatListView}>
              <Image source={{uri: item.Bflag}} style={styles.FlatIcons} />
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
    const {upperList} = this.state;
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
            <Image
              style={styles.imageStyle}
              source={require('../assets/titleImage.png')}
            />
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
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  TitleInner: {
    flex: 0.5,
    backgroundColor: '#fff',
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
    height: 65,
  },
  BottomFlatListView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 67,
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
    backgroundColor: 'white',
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
  },
  arrowStyle: {
    height: 20,
    width: 20,
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
    // f2f2f2
    flex: 0.02,
  },
  imageStyle: {
    width: 100,
    height: 100,
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

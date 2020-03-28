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
import {Dropdown} from 'react-native-material-dropdown';
class MyCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: '1',
      data: [
        {
          value: 'Banana',
        },
        {
          value: 'Mango',
        },
        {
          value: 'Pear',
        },
      ],
      itemList: [
        {
          itempic: '/Users/alokmishra/Desktop/Asessment/src/assets/shirt.png',
          itemname: 'Tasso Elba',
          itemdes: 'Mens pallo Cardigan Sweter, Ether',
          itemprice: 'AED 52',
          viewone: '1',
        },
        {
          viewtwo: '2',
        },
        {
          viewthree: '3',
        },
        {
          viewtwo: '2',
        },
        {
          icon: '/Users/alokmishra/Desktop/Asessment/src/assets/shipping.png',
          caption: 'FREE SHIPPING',
          description: 'On all orders above AED 250',
          viewfour: '4',
        },
        {
          icon: '/Users/alokmishra/Desktop/Asessment/src/assets/bag.png',
          caption: 'SHOP & COLLECT',
          description: 'FREE Collect On all rders above AED 100',
          viewfour: '4',
        },
        {
          icon: '/Users/alokmishra/Desktop/Asessment/src/assets/cash.png',
          caption: 'CASH ON DELIVERY',
          description: 'Find your easiest way to make payment',
          viewfour: '4',
        },
      ],
      Total: 'AED 65',
    };
  }
  renderItem = ({item}) => {
    if('viewone' in item){
      return(
          <View style={{height:215,backgroundColor:'red'}}>
          </View>
      );
    } else if('viewtwo' in item){
        return(
          <View style={{height:10,backgroundColor:'green'}}></View>
        );
    } else if('viewthree' in item){
      return(
        <View style={{height:40,backgroundColor:'yellow'}}></View>
      );
  }else if('viewfour' in item){
    return(
      <View style={{height:55,backgroundColor:'red'}}></View>
    );
};
  };
  render() {
    const {itemList} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleCart}>
          <Text style={styles.MyCartTextStyle}>My Cart</Text>
          <Text style={styles.NumberofItemsText}>
            {this.state.cartCount} item
          </Text>
        </View>
        <View style={styles.FreeShipping}>
          <Image
            style={styles.ShippingVanImage}
            source={require('../assets/shippingVan.png')}
          />
          <View style={styles.FreeShipInnerView}>
            <Text style={styles.FreeSTD}>
              FREE STANDARD DELIVERY ON ORDERS ABOVE AED 250
            </Text>
            <View style={styles.FreeSTDLine} />
            <Text style={styles.FreeSTD}>
              SHOP & COLLECT FOR FREE ON ORDERS ABOVE AED 100
            </Text>
          </View>
        </View>
        {/* <Dropdown label="Favorite Fruit" data={this.state.data} /> */}
        <View style={styles.MainView}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
            data={itemList}
            renderItem={this.renderItem}
            keyExtractor={item => item.textList}
          />
        </View>
        <View style={styles.LowerView}>
          <View style={styles.checkOutView}>
            <Text style={styles.deliveryTextView}>Delivery</Text>
          </View>

          <View style={styles.TotalView}>
            <View style={styles.InnerTotalView}>
              <Text style={styles.TotalTextView}>Total : </Text>
              <Text style={styles.TotalPriceText}>{this.state.Total}</Text>
              <Text style={styles.inclusiveTax}> Incl. of VAT</Text>
            </View>

            <View>
              <Text style={styles.includedDelivery}>
                (incliuded delivery charges)
              </Text>
            </View>
          </View>
          <View style={styles.checkoutAppleView}>
            <TouchableOpacity style={styles.checkoutTouch} activeOpacity={0.5}>
              <Text style={styles.checkoutText}>CHECKOUT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.applepayView} activeOpacity={0.5}>
              <Text style={styles.applepaytext}>APPLE PAY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  applepaytext: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  applepayView: {
    flex: 0.5,
    backgroundColor: '#000',
    marginLeft: 5,
    marginRight: 10,
    marginTop: 3,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  checkoutTouch: {
    flex: 0.5,
    backgroundColor: '#f2cd35',
    marginLeft: 10,
    marginRight: 5,
    marginBottom: 7,
    marginTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  includedDelivery: {
    fontSize: 10,
    fontWeight: '300',
    color: '#2e2e2e',
  },
  inclusiveTax: {
    fontSize: 11,
    fontWeight: '300',
    marginTop: 3,
  },
  TotalPriceText: {
    fontSize: 14,
    fontWeight: '500',
  },
  TotalTextView: {
    fontSize: 12.5,
    fontWeight: '400',
    color: '#2e2e2e',
    marginTop: 2,
  },
  InnerTotalView: {
    flexDirection: 'row',
  },
  checkoutAppleView: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  deliveryTextView: {
    marginLeft: 20,
    color: '#6e6e6e',
    fontWeight: '600',
  },
  TotalView: {
    flex: 0.62,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 13,
    marginRight: 15,
  },
  checkOutView: {
    flex: 0.78,
    backgroundColor: 'white',
    borderBottomWidth: 0.7,
    borderBottomColor: '#949494',
    justifyContent: 'center',
  },
  LowerView: {
    flex: 2.5,
    backgroundColor: 'white',
  },
  MainView: {
    flex: 7,
    backgroundColor: '#e3e3e3',
  },
  FreeSTD: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  FreeSTDLine: {
    backgroundColor: '#949494',
    height: 1.3,
    width: 150,
    margin: 10,
  },
  FreeShipInnerView: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  ShippingVanImage: {
    height: 30,
    width: 30,
    marginRight: 13,
  },
  FreeShipping: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomWidth: 1.2,
    borderTopWidth: 1.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MyCartTextStyle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
  },
  NumberofItemsText: {
    fontSize: 10,
    padding: 10,
  },
  titleCart: {
    backgroundColor: '#fff',
    flex: 1.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyCart;

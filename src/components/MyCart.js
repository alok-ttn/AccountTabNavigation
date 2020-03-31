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
    this.onChangeText = this.onChangeText.bind(this);

    this.codeRef = this.updateRef.bind(this, 'code');

    this.state = {
      cartCount: '1',
      itemList: [
        {
          itempic: require('../assets/shirt.png'),
          itemname: 'Tasso Elba',
          itemdes: 'Mens Pallo Cardigan Sweter, Ether',
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
          viewfour: '4',
        },
      ],
      Total: 'AED 65',
      qtyvalue: '1',
      code: '1',
      size: 'XL',
    };
  }
  onChangeText(text) {
    ['name', 'code', 'sample', 'typography']
      .map(name => ({name, ref: this[name]}))
      .filter(({ref}) => ref && ref.isFocused())
      .forEach(({name, ref}) => {
        this.setState({[name]: text});
      });
  }
  updateRef(name, ref) {
    this[name] = ref;
  }
  renderItem = ({item}) => {
    const {code, size} = this.state;
    if ('viewone' in item) {
      return (
        <View style={styles.itemMainView}>
          <View style={styles.itemMainUpperView}>
            <View style={styles.itemImageView}>
              <Image source={item.itempic} style={styles.itemImageStyle} />
            </View>
            <View style={styles.itemRightToImageFullView}>
              <View style={styles.ItemNameView}>
                <Text style={styles.textItemName}>{item.itemname}</Text>
                <Text style={styles.textItemDes}>{item.itemdes}</Text>
              </View>
              <View style={styles.itemPriceView}>
                <Text style={styles.textItemPrice}>{item.itemprice}</Text>
              </View>
              <View style={styles.qtySizeView}>
                <View style={styles.qtyHalfView}>
                  <View>
                    <Text style={styles.textQty}>QTY :</Text>
                  </View>
                  <View style={styles.NumberQtyDropView}>
                    <Dropdown
                      ref={this.codeRef}
                      value={code}
                      onChangeText={this.onChangeText}
                      data={qtydata}
                      propsExtractor={({props}) => props}
                    />
                  </View>
                </View>
                <View style={styles.qtySizeSeperatorView} />
                <View style={styles.SizeHalfView}>
                  <View>
                    <Text style={styles.textSize}>SIZE :</Text>
                  </View>
                  <View style={styles.sizeDropView}>
                    <Dropdown
                      ref={this.codeRef}
                      value={size}
                      onChangeText={this.onChangeText}
                      data={sizedata}
                      propsExtractor={({props}) => props}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.lowerItemViewWithButtons}>
            <TouchableOpacity style={styles.SaveForLaterTouchView}>
              <Text style={styles.textSaveforlater} activeOpacity={0.5}>
                SAVE FOR LATER
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.RemoveTouchView}>
              <Text style={styles.textRemove}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if ('viewtwo' in item) {
      return <View style={styles.FlatListSeperatorView} />;
    } else if ('viewthree' in item) {
      return (
        <View style={styles.loyaltyPointView}>
          <TouchableOpacity>
            <Text style={styles.textSignIn}>Sign In</Text>
          </TouchableOpacity>
          <Text style={styles.textSignInLoyalty}>to earn loyalty points.</Text>
        </View>
      );
    } else if ('viewfour' in item) {
      return (
        <View style={styles.servicesVIew}>
          <View style={styles.servicesGrid}>
            <View style={styles.servicesIconView}>
              <Image
                source={require('../assets/shipping.png')}
                style={styles.servicesIconImage}
              />
            </View>
            <Text style={styles.servicesCaption}>FREE SHIPPING</Text>
            <Text style={styles.servicesDescription}>
              On all orders above AED 250
            </Text>
          </View>
          <View style={styles.servicesGrid}>
            <View style={styles.servicesIconView}>
              <Image
                source={require('../assets/bag.png')}
                style={styles.servicesIconImage}
              />
            </View>
            <Text style={styles.servicesCaption}>SHOP & COLLECT</Text>
            <Text style={styles.servicesDescription}>
              FREE Collect On all orders above AED 100
            </Text>
          </View>
          <View style={styles.servicesGrid}>
            <View style={styles.servicesIconView}>
              <Image
                source={require('../assets/cash.png')}
                style={styles.servicesIconImage}
              />
            </View>
            <Text style={styles.servicesCaption}>CASH ON DELIVERY</Text>
            <Text style={styles.servicesDescription}>
              Find your easiest way to make payment
            </Text>
          </View>
        </View>
      );
    }
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
            scrollEnabled={false}
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
  servicesCaption: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 12,
    fontWeight: '600',
  },
  servicesDescription: {
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '300',
    marginHorizontal: 8,
  },
  servicesIconView: {
    borderRadius: 35,
    borderColor: '#000',
    borderWidth: 1,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 30,
    marginBottom: 15,
    padding: 5,
    marginHorizontal: 53,
  },
  servicesIconImage: {height: 20, width: 20},
  servicesGrid: {flex: 1, alignItems: 'center'},
  servicesVIew: {
    height: 165,
    borderTopColor: '#6e6e6e',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#6e6e6e',
    flexDirection: 'row',
  },
  textSignIn: {
    fontSize: 14,
    fontWeight: '500',
    marginRight: 3,
  },
  textSignInLoyalty: {
    fontSize: 14,
    fontWeight: '300',
  },
  loyaltyPointView: {
    height: 45,
    backgroundColor: '#FEEFA6',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  FlatListSeperatorView: {
    height: 10,
    backgroundColor: '#F3F3F3',
  },
  textRemove: {
    fontSize: 11,
    color: '#f00',
    fontWeight: '600',
  },
  RemoveTouchView: {
    width: 100,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  SaveForLaterTouchView: {
    width: 150,
    height: 38,
    borderWidth: 0.75,
    borderColor: '#000',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 1,
    elevation: 1,
    marginLeft: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  textSaveforlater: {
    fontSize: 13,
    fontWeight: '600',
  },
  lowerItemViewWithButtons: {
    flex: 0.25,
    backgroundColor: '#fff',
    borderTopColor: '#949494',
    borderTopWidth: 0.3,
    flexDirection: 'row',
  },
  sizeDropView: {
    marginTop: -35,
    marginLeft: 10,
    width: 60,
    height: 10,
  },
  textSize: {
    marginLeft: 12,
    fontSize: 13,
    fontWeight: '600',
    marginTop: 2,
    color: '#6e6e6e',
  },
  SizeHalfView: {
    flex: 0.4,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  qtySizeSeperatorView: {
    flex: 0.0017,
    backgroundColor: '#6e6e6e',
    height: 15,
    marginTop: 5,
    marginLeft: 5,
  },
  NumberQtyDropView: {marginTop: -35, marginLeft: 10, width: 35},
  textQty: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 2,
    color: '#6e6e6e',
  },
  qtyHalfView: {
    flex: 0.3,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  itemPriceView: {
    height: 50,
    backgroundColor: 'white',
    marginBottom: 13,
  },
  qtySizeView: {
    height: 43,
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginBottom: 10,
  },
  textItemPrice: {marginTop: 30, fontWeight: '500'},
  textItemDes: {fontSize: 12, color: '#6e6e6e', fontWeight: '400'},
  textItemName: {
    marginTop: 20,
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
  },
  itemRightToImageFullView: {backgroundColor: '#fff', flex: 0.72},
  itemImageStyle: {
    height: 120,
    width: 60,
  },
  ItemNameView: {height: 76, backgroundColor: '#fff'},
  itemImageView: {
    flex: 0.28,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemMainUpperView: {
    flex: 0.75,
    flexDirection: 'row',
  },
  itemMainView: {
    height: 218,
    backgroundColor: '#fff',
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
    marginTop: 8,
    marginBottom: 14,
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
    marginBottom: 13,
    marginTop: 8,
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
    flex: 1.2,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  deliveryTextView: {
    marginLeft: 20,
    color: '#6e6e6e',
    fontWeight: '600',
  },
  TotalView: {
    flex: 0.6,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 13,
    marginRight: 15,
  },
  checkOutView: {
    flex: 0.75,
    backgroundColor: 'white',
    borderBottomWidth: 0.7,
    borderTopWidth: 0.7,
    borderTopColor: '#949494',
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
    fontSize: 9,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  FreeSTDLine: {
    backgroundColor: '#949494',
    height: 1,
    width: 160,
  },
  FreeShipInnerView: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  ShippingVanImage: {
    height: 23,
    width: 23,
    marginRight: 13,
  },
  FreeShipping: {
    flex: 0.79,
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
const qtydata = [
  {value: '1', props: {disabled: true}},
  {value: '2'},
  {value: '3'},
  {value: '4'},
  {value: '5'},
];
const sizedata = [
  {value: 'XL', props: {disabled: true}},
  {value: 'XXL'},
  {value: 'M'},
  {value: 'S'},
  {value: 'XS'},
];
export default MyCart;

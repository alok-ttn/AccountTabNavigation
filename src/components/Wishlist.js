import React, {Fragment, Component} from 'react';
import ImagePicker from 'react-native-image-picker';
// import CheckBox from '@react-native-community/checkbox';
//import { CheckBox } from 'react-native-elements'
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

var radio_props = [
  {label: 'Male       ', value: 0},
  {label: 'Female', value: 1},
];

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
      pass: true,
      value: 0,

      JoinPass: true,
    };
  }
  render() {
    const {toggle, pass, JoinPass} = this.state;

    return (
      <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
        <View style={{flex: 0.13}}>
          <View style={{flex: 1}}>
            <View style={{height: 40}} />
            <View style={{alignItems: 'flex-end'}}>
              <Image
                source={require('../assets/about.png')}
                style={{
                  marginRight: 20,
                  height: 25,
                  width: 25,
                  resizeMode: 'contain',
                }}
              />
            </View>

            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <View style={{flex: 1, borderBottomWidth: 1}}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({toggle: true});
                  }}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontSize: 24,
                      paddingBottom: 20,
                      paddingHorizontal: 10,

                      borderColor: 'orange',
                    }}>
                    Sign In
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({toggle: false});
                  }}>
                  {console.log(toggle)}

                  <Text style={{fontSize: 24, alignSelf: 'center'}}>Join</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={{flex: 0.87}}>
          {toggle ? (
            <View style={{flex: 1}}>
              <View style={{height: 30}} />
              <TextInput
                style={{...style.textInputFields, marginRight: 15}}
                placeholder={'Your Email Address'}
                keyboardType={'email-address'}
              />

              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={{
                    ...style.textInputFields,
                    flex: 0.8,
                    borderRightWidth: 0,
                  }}
                  placeholder={'password'}
                  secureTextEntry={pass}
                />

                <View
                  style={{
                    flex: 0.2,
                    height: 50,
                    borderLeftWidth: 0,
                    marginRight: 15,
                    borderColor: '#e3dddc',
                    borderWidth: 1,
                    paddingLeft: 10,
                    marginVertical: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({pass: !pass});
                    }}>
                    <Text style={{fontSize: 16}}>{pass ? 'Show' : 'Hide'}</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity>
                <Text style={style.forPass}>Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={{height: 20}} />
                <View
                  style={{
                    ...style.textInputFields,
                    backgroundColor: '#000',
                    justifyContent: 'center',
                    marginRight: 15,
                  }}>
                  <Text
                    style={{fontSize: 20, color: '#fff', alignSelf: 'center'}}>
                    Sign In
                  </Text>
                </View>
              </TouchableOpacity>

              <View style={{height: 50}} />

              <Text
                style={{alignSelf: 'center', fontSize: 13, color: '#484d4c'}}>
                or Sign In via
              </Text>

              <View style={{flex: 1}}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: 3,
                    flex: 0.8,
                    marginHorizontal: 15,
                  }}>
                  <TouchableOpacity style={{flex: 1}}>
                    <View
                      style={{
                        height: 50,
                        marginVertical: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: '2f3030',
                        marginRight: 8,
                      }}>
                      <View style={{flex: 4}}>
                        <Image
                          source={require('../assets/about.png')}
                          style={{
                            height: 50,
                            resizeMode: 'contain',
                            alignSelf: 'center',
                          }}
                        />
                      </View>
                      <Text style={{flex: 7, fontSize: 18}}> Facebook</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={{flex: 1}}>
                    <View
                      style={{
                        height: 50,
                        marginVertical: 10,
                        marginLeft: 8,
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: '2f3030',
                      }}>
                      <Image
                        source={require('../assets/about.png')}
                        style={{
                          flex: 6,
                          alignSelf: 'center',
                          resizeMode: 'contain',
                          height: 25,
                        }}
                      />
                      <Text style={{flex: 7, fontSize: 18}}> Google</Text>
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{backgroundColor: '#f2ede9', flex: 0.19}}>
                  <TextInput
                    style={{
                      borderColor: '#cfccc8',
                      borderWidth: 0.6,
                      height: 1,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      alignSelf: 'center',
                      marginVertical: 22,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#6b6967',
                        marginHorizontal: 10,
                      }}>
                      Don't have an account?
                    </Text>
                    <Text style={{fontSize: 15, marginHorizontal: 10}}>
                      {' '}
                      Join
                    </Text>
                  </View>

                  <TextInput
                    style={{
                      borderColor: '#cfccc8',
                      borderWidth: 0.7,
                      height: 1,
                    }}
                  />
                </View>
              </View>
            </View>
          ) : (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
              <View>
                <View style={{height: 30}} />
                <TextInput
                  style={{...style.textInputFields, marginRight: 15}}
                  placeholder={'First Name'}
                  keyboardType={'email-address'}
                />
                <TextInput
                  style={{...style.textInputFields, marginRight: 15}}
                  placeholder={'Last Name'}
                />
                <TextInput
                  style={{...style.textInputFields, marginRight: 15}}
                  placeholder={'Your Email '}
                  keyboardType={'email-address'}
                />
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    style={{
                      ...style.textInputFields,
                      flex: 0.8,
                      borderRightWidth: 0,
                    }}
                    placeholder={'password'}
                    secureTextEntry={JoinPass}
                  />

                  <View
                    style={{
                      flex: 0.2,
                      height: 50,
                      borderLeftWidth: 0,
                      marginRight: 15,
                      borderColor: '#e3dddc',
                      borderWidth: 1,
                      paddingLeft: 10,
                      marginVertical: 8,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({JoinPass: !JoinPass});
                      }}>
                      <Text style={{fontSize: 16}}>
                        {JoinPass ? 'Show' : 'Hide'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={{marginLeft: 15}}>
                  <RadioForm
                    radio_props={radio_props}
                    onPress={value => this.setState({value: value})}
                    formHorizontal={true}
                    buttonColor={'#f2a668'}
                    borderWidth={0}
                    buttonSize={15}
                  />
                </View>
                <View style={{margin: 15}}>
                  <Text style={{padding: 2}}>
                    Be the first to know about new arrivals, sales & promos by{' '}
                  </Text>
                  <Text style={{padding: 2}}>
                    submitting your email. You can opt out at any time. Privacy
                  </Text>
                  <Text style={{padding: 2}}>Policy</Text>
                </View>

                <TouchableOpacity>
                  <View style={{height: 20}} />
                  <View
                    style={{
                      ...style.textInputFields,
                      backgroundColor: '#000',
                      justifyContent: 'center',
                      marginRight: 15,
                      marginVertical: 20,
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: '#fff',
                        alignSelf: 'center',
                      }}>
                      Join Now
                    </Text>
                  </View>
                </TouchableOpacity>

                <View style={{marginVertical: 20}}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontSize: 13,
                      color: '#484d4c',
                    }}>
                    or Join via
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: 15,
                    marginVertical: 3,
                  }}>
                  <TouchableOpacity style={{flex: 1}}>
                    <View
                      style={{
                        height: 50,
                        marginRight: 8,
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: '2f3030',
                      }}>
                      <View style={{flex: 4}}>
                        <Image
                          source={require('../assets/about.png')}
                          style={{
                            height: 50,
                            resizeMode: 'contain',
                            alignSelf: 'center',
                          }}
                        />
                      </View>
                      <Text style={{flex: 7, fontSize: 20}}> Facebook</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={{flex: 1}}>
                    <View
                      style={{
                        height: 50,
                        marginLeft: 8,
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: '2f3030',
                      }}>
                      <Image
                        source={require('../assets/about.png')}
                        style={{
                          flex: 6,
                          alignSelf: 'center',
                          resizeMode: 'contain',
                          height: 25,
                        }}
                      />
                      <Text style={{flex: 7, fontSize: 20}}> Google</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </SafeAreaView>
          )}
        </View>
      </SafeAreaView>
    );
  }
}
const style = StyleSheet.create({
  textInputFields: {
    height: 50,
    marginLeft: 15,
    borderColor: '#e3dddc',
    borderWidth: 1,
    paddingLeft: 10,
    marginVertical: 8,
  },

  forPass: {
    fontSize: 13,
    fontWeight: '400',
    alignSelf: 'center',
    marginVertical: 14,
  },
});

export default SignIn;

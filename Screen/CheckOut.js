import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Animated,
  Image,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

const CheckOut = ({navigation}) => {
  const Separator = () => <View style={styles.separator} />;
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor="#e22217" />

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#e22217',
            marginTop: 27,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo
              name="chevron-left"
              color="white"
              size={25}
              style={{margin: 10}}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '900',
              margin: 10,
              color: 'white',
            }}>
            Check Out
          </Text>
        </View>

        <ScrollView>
          <View
            style={{
              padding: 7,
              //   marginRight: 10,
              //   marginLeft: 10,
            }}>
            <View
              style={{
                backgroundColor: '#ffff',
                marginTop: 5,
                padding: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 17,
                    color: 'red',
                    fontWeight: '600',
                  }}>
                  Golden Glow Ayurvedic Massage Men To Men
                </Text>
                <Text>
                  289, 30th St, Kambar Colony, I Block, Anna Nagar, Chennai,
                  Tamil Nadu, India
                </Text>
              </View>
              <View>
                <Text style={{paddingTop: 5, paddingBottom: 3}}>
                  <AntDesign name="star" size={15} color="red" />{' '}
                  5&nbsp;&nbsp;(9)
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    paddingTop: 5,
                    paddingBottom: 3,
                    color: '#212121',
                    fontWeight: '600',
                    fontSize: 17,
                  }}>
                  Full body Massage(60 min)+ Welcome Drinks (10 min)+ Steam (20
                  min)
                </Text>
                <View>
                  <Text
                    style={{
                      paddingTop: 5,
                      paddingBottom: 3,
                      color: '#212121',
                      fontWeight: '600',
                      fontSize: 14,
                    }}>
                    <Entypo name="stopwatch" size={18} /> : 9.00 AM-10.00AM
                  </Text>
                  <Text
                    style={{
                      paddingTop: 5,
                      paddingBottom: 3,
                      color: '#212121',
                      fontWeight: '600',
                      fontSize: 14,
                    }}>
                    <Fontisto name="date" size={18} /> : 23-09-2023
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 5,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../assets/girl.webp')}
                      resizeMode="stretch"
                      style={{
                        height: 50,
                        width: 50,
                        borderRadius: 50,
                      }}
                    />
                    <View
                      style={{
                        paddingLeft: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          color: '#212121',
                        }}>
                        Diya Rani
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: 400,
                          color: '#212121',
                        }}>
                        Massage
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View>
          <View
            style={{
              backgroundColor: '#ffff',
              marginTop: 5,
              padding: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 10,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#212121',
                }}>
                Price
              </Text>
              <Text>2000</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 10,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#212121',
                }}>
                GST
              </Text>
              <Text>360</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 10,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#212121',
                }}>
                Service Tax
              </Text>
              <Text>200</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 10,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#212121',
                }}>
                Discount
              </Text>
              <Text>2000</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 10,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#212121',
                }}>
                Online Payment Discount
              </Text>
              <Text>100</Text>
            </View>
            <Separator />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 10,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#212121',
                }}>
                Total Amount
              </Text>
              <Text>2560</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 10,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#212121',
                }}>
                Total Discount
              </Text>
              <Text>200</Text>
            </View>
            <Separator />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 10,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#212121',
                }}>
                Payable Amount
              </Text>
              <Text>2260</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CheckOut');
              }}>
              <Animated.View style={[styles.button]}>
                <Text style={styles.buttonText}>Book Now</Text>
              </Animated.View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  separator: {
    width: '99%',
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 1,
  },
  button: {
    backgroundColor: '#e22217', // Replace with your desired button color
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 22,
    marginRight: 22,
    borderWidth: 1,
    borderColor: '#e22217', // Replace with your desired button color
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // Replace with your desired text color
    fontSize: 17,
    fontWeight: '500',
  },
});

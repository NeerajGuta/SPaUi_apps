import React, {useMemo, useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
  ScrollView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  Dimensions,
  FlatList,
  Image,
  Animated,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Waterdrop from '../Waterdropds';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import RadioGroup from 'react-native-radio-buttons-group';
import Modal from 'react-native-modal';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function Bookslot({navigation}) {
  const [Mobileno, setMobileno] = useState();
  function phonenumber(inputtxt) {
    var phoneno = /^[5-9]\d{9}$/;
    if (inputtxt.match(phoneno)) {
      return true;
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'You have entered an invalid mobile number!',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      return false;
    }
  }

  const {width} = Dimensions.get('window');
  const buttonWidth = width * 1;

  const {height} = Dimensions.get('window');
  const componentHeight = height * 0.65; // 50% o
  const [open, setOpen] = useState(false);
  const [Date1, setDate1] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeChange = (event, time) => {
    if (event.type === 'set') {
      setSelectedTime(time);
    }

    hideTimePicker();
  };
  const [selectedTime1, setSelectedTime1] = useState(new Date());
  const [isTimePickerVisible1, setTimePickerVisibility1] = useState(false);

  const showTimePicker1 = () => {
    setTimePickerVisibility1(true);
  };

  const hideTimePicker1 = () => {
    setTimePickerVisibility1(false);
  };

  const handleTimeChange1 = (event, time) => {
    if (event.type === 'set') {
      setSelectedTime1(time);
    }

    hideTimePicker1();
  };
  const Separator = () => <View style={styles.separator} />;

  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: (
          <Text style={{color: '#212121', fontSize: 15, fontWeight: '500'}}>
            Pay At Spa
          </Text>
        ),
        value: 'payatspa',
        color: 'red',
      },
      {
        id: '2',
        label: (
          <Text style={{color: '#212121', fontSize: 15, fontWeight: '500'}}>
            Pay Now
          </Text>
        ),
        value: 'paynow',
        color: 'red',
      },
      {
        id: '3',
        label: (
          <Text style={{color: '#212121', fontSize: 15, fontWeight: '500'}}>
            {'Pay 20%'}
          </Text>
        ),
        value: 'pay20%',
        color: 'red',
      },
    ],
    [],
  );

  const [selectedId, setSelectedId] = useState();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
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
            fontSize: 15,
            fontWeight: '900',
            margin: 10,
            color: 'white',
          }}>
          Booking Slot
        </Text>
      </View>
      <ScrollView>
        <View
          style={{
            width: '100%',
            padding: 10,
          }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '600',
              margin: 8,
              color: 'black',
            }}>
            Modify Your Booking
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#e22217a3',
              backgroundColor: '#e22217a3',
              padding: 5,
              borderRadius: 3,
            }}>
            <Text
              style={{
                fontSize: 14,
                textAlign: 'center',
                // marginLeft: 10,
                color: '#ffff',
              }}>
              Yay! you just saved ₹ 200 on this booking!
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#ffff',
              marginTop: 7,
              marginBottom: 5,
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
                paddingBottom: 8,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#212121',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}>
                Service Name
              </Text>
              <Text
                style={{
                  color: 'black',
                }}>
                Basic Massage
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 8,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#212121',
                }}>
                Valid For
              </Text>
              <Text
                style={{
                  color: 'black',
                }}>
                Men
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 8,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#212121',
                }}>
                {' '}
                Select Date
              </Text>
              <DatePicker
                modal
                open={open}
                date={Date1}
                mode="date"
                onConfirm={Date1 => {
                  setOpen(false);
                  setDate1(Date1);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
              <TouchableOpacity onPress={() => setOpen(true)}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 14,
                    }}>
                    {moment(Date1).format('DD/MM/YYYY')}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 8,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#212121',
                }}>
                {' '}
                Start Time
              </Text>
              <TouchableOpacity onPress={showTimePicker}>
                <Text style={styles.selectedTimeText}>
                  {selectedTime.toLocaleTimeString()}
                </Text>
              </TouchableOpacity>

              {isTimePickerVisible && (
                <DateTimePicker
                  value={selectedTime}
                  mode="time"
                  is24Hour={true}
                  display={Platform.OS === 'ios' ? 'spinner' : 'clock'}
                  onChange={handleTimeChange}
                  style={{backgroundColor: 'pink'}}
                />
              )}
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 8,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#212121',
                }}>
                {' '}
                End Time
              </Text>
              <TouchableOpacity onPress={showTimePicker1}>
                <Text style={styles.selectedTimeText}>
                  {selectedTime1.toLocaleTimeString()}
                </Text>
              </TouchableOpacity>

              {isTimePickerVisible1 && (
                <DateTimePicker
                  value={selectedTime1}
                  mode="time"
                  is24Hour={true}
                  display={Platform.OS === 'ios' ? 'spinner' : 'clock'}
                  onChange={handleTimeChange1}
                  style={{backgroundColor: 'pink'}}
                />
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 8,
                paddingBottom: 8,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#212121',
                }}>
                Select Therapist
              </Text>

              <TouchableOpacity onPress={toggleModal}>
                <Text>----</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#ffff',
            marginTop: 7,
            marginBottom: 5,
            padding: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            height: '100%',
          }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '400',
              color: 'black',
              paddingBottom: 10,
            }}>
            Choose Payment Method To Pay
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#e22217a3',
              backgroundColor: '#e22217a3',
              padding: 5,
              borderRadius: 3,
              marginBottom: 8,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: '#ffff',
                textAlign: 'center',
              }}>
              100% Safe and Secure Payments
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#e22217a3',
              backgroundColor: '#e22217a3',
              padding: 5,
              borderRadius: 3,
              marginBottom: 8,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: '#ffff',
                textAlign: 'center',
              }}>
              Pay online to get 5% Extra discount
            </Text>
          </View>

          {/* Button */}
          <View>
            <View
              style={{
                flexDirection: 'row',

                paddingBottom: 10,
                paddingTop: 20,
              }}>
              <RadioGroup
                radioButtons={radioButtons}
                onPress={setSelectedId}
                selectedId={selectedId}
                layout="row"
              />
              {/* <TouchableOpacity>
                <Animated.View style={[styles.button]}>
                  <Text style={styles.buttonText}>Pay At Pay</Text>
                </Animated.View>
              </TouchableOpacity>
              <TouchableOpacity>
                <Animated.View style={[styles.button]}>
                  <Text style={styles.buttonText}>Pay Now</Text>
                </Animated.View>
              </TouchableOpacity>
              <TouchableOpacity>
                <Animated.View style={[styles.button]}>
                  <Text style={styles.buttonText}>Pay 20%</Text>
                </Animated.View>
              </TouchableOpacity> */}
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  paddingBottom: 8,
                }}>
                <AntDesign name="star" color="yellow" size={20} />
                <Text
                  style={{
                    color: '#212121',
                  }}>
                  No Payment Needed Today
                </Text>
              </View>
              <View style={{paddingBottom: 8}}>
                <Text
                  style={{
                    color: '#212121',
                    textAlign: 'center',
                  }}>
                  We will confirm your Booking without any charge. Pay directly
                  at the Spa during your Service.
                </Text>
              </View>
              <View
                style={{
                  marginTop: 70,
                }}>
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
        </View>

        {/* <Text
          style={{
            fontSize: 15,
            fontWeight: '900',
            margin: 20,
            color: 'black',
          }}>
          {' '}
          Body Raaga Wellness Spa
        </Text> */}

        {/* <Text
          style={{
            fontSize: 15,
            fontWeight: '900',
            margin: 10,
            color: 'black',
            textAlign: 'right',
          }}>
          {' '}
          Rs.2000
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '900',
              margin: 5,
              color: 'black',
            }}>
            Sub Total
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '900',
              margin: 5,
              color: 'black',
            }}>
            Rs.2200
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '900',
              margin: 5,
              color: 'black',
            }}>
            Discount
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '900',
              margin: 5,
              color: 'black',
            }}>
            -Rs.200
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '900',
              margin: 5,
              color: 'black',
            }}>
            Total
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '900',
              margin: 5,
              color: 'black',
            }}>
            Rs.2000
          </Text>
        </View> */}
      </ScrollView>

      {/* Modal */}
      <Modal isVisible={isModalVisible}>
        <View style={{backgroundColor: '#ffff', height: 500}}>
          <View
            style={{
              backgroundColor: 'red',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#ffff',
                fontSize: 18,
                padding: 6,
                fontWeight: '600',
              }}>
              Select Staff
            </Text>
            <TouchableOpacity onPress={toggleModal}>
              <AntDesign
                name="closecircle"
                color="white"
                size={25}
                style={{margin: 10}}
              />
            </TouchableOpacity>
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
              <FontAwesome5
                name="users"
                size={40}
                style={{
                  height: 50,
                  width: 50,
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
                  No Preference
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 400,
                    color: '#212121',
                  }}>
                  Maximum Availability
                </Text>
              </View>
            </View>
            <Text>
              {' '}
              <MaterialIcons
                name="keyboard-arrow-right"
                size={20}
                color="#212121"
              />
            </Text>
          </View>
          <Separator />
          <ScrollView>
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
              <Text>
                {' '}
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={20}
                  color="#212121"
                />
              </Text>
            </View>
            <Separator />
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
              <Text>
                {' '}
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={20}
                  color="#212121"
                />
              </Text>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

export default Bookslot;
const styles = StyleSheet.create({
  mnb: {
    backgroundColor: 'black',
    margin: 10,
    padding: 5,
    borderRadius: 20,
    flexDirection: 'row',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '400',
    // paddingLeft: 30,
    color: 'black',
    width: 200,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 10,
  },
  inputView: {
    width: '90%',
    height: 100,
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 2,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    height: 50,
    marginBottom: 30,
    justifyContent: 'center',
    padding: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginLeft: 20,
    marginTop: 10,
  },
  input: {
    height: 50,
    color: 'gray',
    fontWeight: '400',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#e22217', // Replace with your desired button color
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 30,
    alignItems: 'center',
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
  selectedDaysText: {
    marginTop: 5,
    fontSize: 15,
    color: '#e22217',
    fontWeight: '600',
  },
  selectedTimeText: {
    fontSize: 15,
    color: 'black',

    textAlign: 'center',
  },
  separator: {
    width: '99%',
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 1,
  },
});

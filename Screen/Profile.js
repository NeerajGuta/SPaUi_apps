import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
  ScrollView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Animated,
  TextInput,
  Image,
  Alert,
  Button,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';
import {getCountry} from 'react-native-localize';

function Profile() {
  const navigation = useNavigation();
  // ++++++++++++++++++
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);

  useEffect(() => {
    // Get the user's country code using react-native-localize
    const userCountry = getCountry();
    setCountryCode(userCountry);
  }, []);

  const onSelectCountry = country => {
    setCountryCode(country.cca2);
    setSelectedCountry(country);
    setCountryPickerVisible(false);
  };

  const toggleCountryPicker = () => {
    setCountryPickerVisible(!countryPickerVisible);
  };

  const initialCountryCode = 'IN';
  // ++++++++++++++++++++===
  const {width} = Dimensions.get('window');
  const buttonWidth = width * 0.5;

  const {height} = Dimensions.get('window');
  const componentHeight = height * 0.7; // 50% of the screen

  const [user, setuser] = useState({});

  useEffect(() => {
    getuser();
  }, []);
  const getuser = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        setuser(JSON.parse(value));
      }
    } catch (error) {}
  };
  const logout = async () => {
    try {
      const value = await AsyncStorage.removeItem('user');
      ToastAndroid.showWithGravityAndOffset(
        'Sucessfully Logout !',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );

      navigation.navigate('Login');
      if (value !== null) {
        // setuser1(JSON.parse(value));
      }
      if (value1 !== null) {
        // setuser1(JSON.parse(value));
      }
    } catch (error) {}
  };

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const [acc, setacc] = useState(false);
  const [acc1, setacc1] = useState(false);
  const [acc2, setacc2] = useState(true);
  const [acc3, setacc3] = useState(false);
  const [acc4, setacc4] = useState(true);
  const [acc5, setacc5] = useState(false);

  const input = {
    borderWidth: 0,
  };
  const inputstyle = {
    ...input,
    borderWidth: 2,
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="#e22217" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignContent: 'center',
          backgroundColor: '#e22217',
          marginTop: 27,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="arrowleft"
            size={20}
            style={{margin: 15}}
            color="#ffffff"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 15,

              color: 'white',
              margin: 10,
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          padding: 10,
        }}>
        <View
          style={{
            paddingBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '800',
              color: '#212121',
            }}>
            Profile
          </Text>
        </View>
        <View
          style={{
            paddingBottom: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              color: '#212121',
            }}>
            Personal Details
          </Text>
        </View>
        <View style={styles.container}>
          <View
            style={[
              styles.inputContainer,
              isFocused && styles.focusedInputContainer,
            ]}>
            <TextInput
              placeholder="Raghavendra"
              placeholderTextColor="black"
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={styles.input}
            />
          </View>
          <Text
            style={[
              styles.label,
              isFocused ? styles.focusedLabel : styles.blurredLabel,
            ]}>
            Full name
          </Text>
        </View>
        <View style={styles.container}>
          <View
            style={[
              styles.inputContainer,
              isFocused && styles.focusedInputContainer,
            ]}>
            <TextInput
              placeholder="raghavendra@gmail.com"
              placeholderTextColor="black"
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={styles.input}
            />
          </View>
          <Text
            style={[
              styles.label,
              isFocused ? styles.focusedLabel : styles.blurredLabel,
            ]}>
            Email address
          </Text>
        </View>
        <View style={styles.container}>
          <View>
            <PhoneInput
              value={phoneNumber}
              onChangePhoneNumber={number => setPhoneNumber(number)}
              onPressFlag={toggleCountryPicker}
              style={[styles.phoneInput, styles.inputContainer, styles.input]}
              initialCountry={initialCountryCode} // Set the initial country code
              flagStyle={styles.flag}
            />
          </View>
          <Text
            style={[
              styles.label,
              isFocused ? styles.focusedLabel : styles.blurredLabel,
            ]}>
            Mobile number
          </Text>
          {countryPickerVisible && (
            <CountryPicker
              withFilter={true}
              withFlagButton={false}
              withCountryNameButton={false}
              onSelect={onSelectCountry}
              onClose={() => setCountryPickerVisible(false)}
              visible={countryPickerVisible}
              containerButtonStyle={styles.countryPickerButton}
              closeButtonImageStyle={styles.countryPickerCloseButton}
            />
          )}
        </View>
        <View style={[styles.container, {marginVertical: 12}]}>
          <View>
            <Text>GENDER</Text>
          </View>
          <View
            style={{
              backgroundColor: '#b5a9a97a',
              flexDirection: 'row',
              height: 35,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'space-around',
              borderRadius: 40,
              // marginLeft: 26,
              // marginRight: 26,
            }}>
            <TouchableOpacity
              onPress={() => {
                setacc(true);
                setacc1(false);
                setacc2(false);
              }}>
              <Text
                style={{
                  color: 'black',
                  borderWidth: acc ? 2 : 0,
                  padding: 8,
                  paddingLeft: 30,
                  paddingRight: 30,
                  borderRadius: 40,
                  backgroundColor: acc ? 'white' : '#b5a9a900',
                }}>
                Male
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setacc(false);
                setacc1(true);
                setacc2(false);
              }}>
              <Text
                style={{
                  color: 'black',
                  borderWidth: acc1 ? 2 : 0,
                  padding: 8,
                  paddingLeft: 30,
                  paddingRight: 30,
                  borderRadius: 40,
                  backgroundColor: acc1 ? 'white' : '#b5a9a900',
                }}>
                Female
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setacc(false);
                setacc1(false);
                setacc2(true);
              }}>
              <Text
                style={{
                  color: 'black',
                  borderWidth: acc2 ? 2 : 0,
                  padding: 8,
                  borderRadius: 40,
                  paddingLeft: 30,
                  paddingRight: 30,
                  backgroundColor: acc2 ? 'white' : '#b5a9a900',
                }}>
                Undisclosed
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.container]}>
          <View>
            <Text>MARITAL STATUS</Text>
          </View>
          <View
            style={{
              backgroundColor: '#b5a9a97a',
              flexDirection: 'row',
              height: 35,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'space-around',
              borderRadius: 40,
              // marginLeft: 26,
              // marginRight: 26,
            }}>
            <TouchableOpacity
              onPress={() => {
                setacc3(true);
                setacc4(false);
                setacc5(false);
              }}>
              <Text
                style={{
                  color: 'black',
                  borderWidth: acc3 ? 2 : 0,
                  padding: 8,
                  paddingLeft: 30,
                  paddingRight: 30,
                  borderRadius: 40,
                  backgroundColor: acc3 ? 'white' : '#b5a9a900',
                }}>
                Married
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setacc3(false);
                setacc4(true);
                setacc5(false);
              }}>
              <Text
                style={{
                  color: 'black',
                  borderWidth: acc4 ? 2 : 0,
                  padding: 8,
                  paddingLeft: 30,
                  paddingRight: 30,
                  borderRadius: 40,
                  backgroundColor: acc4 ? 'white' : '#b5a9a900',
                }}>
                Unmarried
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setacc3(false);
                setacc4(false);
                setacc5(true);
              }}>
              <Text
                style={{
                  color: 'black',
                  borderWidth: acc5 ? 2 : 0,
                  padding: 8,
                  borderRadius: 40,
                  paddingLeft: 30,
                  paddingRight: 30,
                  backgroundColor: acc5 ? 'white' : '#b5a9a900',
                }}>
                Undisclosed
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    marginBottom: 20,
    width: '100%',
  },

  container: {
    marginVertical: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  focusedInputContainer: {
    borderColor: 'black', // Change the border color when focused
    borderWidth: 2,
  },
  input: {
    height: 40,
    fontSize: 16,
    backgroundColor: '#ffff',
    borderRadius: 10,
    paddingLeft: 12,
  },
  label: {
    position: 'absolute',
    marginLeft: 10,
    marginTop: -8, // Adjust the label position when focused
    backgroundColor: 'white', // Match the input background color
    paddingHorizontal: 5,
    fontSize: 14,
    color: 'gray',
  },
  focusedLabel: {
    fontSize: 13, // Adjust the label font size when focused
    color: 'black', // Change the label color when focused
  },
  blurredLabel: {
    fontSize: 14,
    color: 'gray',
  },

  phoneInput: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    // borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  flag: {
    width: 20,
    height: 20,
    borderRadius: 50,
  },

  countryPickerButton: {
    borderRadius: 5,
    // backgroundColor: '#fff',
    marginBottom: 10,
  },
  countryPickerCloseButton: {
    width: 20,
    height: 20,
  },
});

import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TextInput,
  Animated,
  TouchableOpacity,
  Pressable,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import Waterdrop from '../Waterdropds';
import RNBounceable from '@freakycoder/react-native-bounceable';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({navigation}) => {
  const buttonScale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(buttonScale, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(buttonScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
    // Add your action for when the button is released here
  };
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [secureTextEntry1, setsecureTextEntry1] = useState(true);
  const {width} = Dimensions.get('window');
  const buttonWidth = width * 1;

  const {height} = Dimensions.get('window');
  const componentHeight = height * 0.65; // 50% o

  const [backgroundColor, setBackgroundColor] = useState(new Animated.Value(0));

  useEffect(() => {
    const intervalId = setInterval(() => {
      animateBackgroundColor();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const animateBackgroundColor = () => {
    Animated.timing(backgroundColor, {
      toValue: Math.random(),
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: false, // We are using color animation which doesn't support the native driver
    }).start();
  };

  const interpolatedColor = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(239, 235, 216)', 'rgb(248, 248, 255)'],
  });

  // const Login = async () => {
  //   if (!email) {
  //     ToastAndroid.showWithGravityAndOffset(
  //       'Email is missing !',
  //       ToastAndroid.LONG,
  //       ToastAndroid.BOTTOM,
  //       25,
  //       50,
  //     );
  //   }
  //   if (!password) {
  //     ToastAndroid.showWithGravityAndOffset(
  //       'Password is missing !',
  //       ToastAndroid.LONG,
  //       ToastAndroid.BOTTOM,
  //       25,
  //       50,
  //     );
  //   } else {
  //     try {
  //       const config = {
  //         url: '/customer/Signin',
  //         method: 'post',
  //         baseURL: 'http://192.168.1.19:8000/api',
  //         headers: {'content-type': 'application/json'},
  //         data: {
  //           email: email,
  //           password: password,
  //         },
  //       };

  //       let res = await axios(config);
  //       if (res.status === 200) {
  //         ToastAndroid.showWithGravityAndOffset(
  //           'Successfully Login !',
  //           ToastAndroid.LONG,
  //           ToastAndroid.BOTTOM,
  //           25,
  //           50,
  //         );
  //         navigation.navigate('Tabs');
  //         await AsyncStorage.setItem('user', JSON.stringify(res.data.user));
  //       }
  //     } catch (error) {
  //       if (error.response) {
  //         ToastAndroid.showWithGravityAndOffset(
  //           error.response.data.error,
  //           ToastAndroid.LONG,
  //           ToastAndroid.BOTTOM,
  //           25,
  //           50,
  //         );
  //       }
  //     }
  //   }
  // };

  const images = [
    require('../assets/massage.jpg'),
    require('../assets/slider3.webp'),
    require('../assets/clear.jpg'),
    require('../assets/pinkreg.jpg'),
  ];

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        style={{width: buttonWidth, height: '100%'}}
        resizeMode={'cover'}
        source={images[imageIndex]}>
        <View
          style={{
            marginTop: 150,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '800',
              color: 'white',
              // marginTop: '70%',
            }}>
            Let's get you Login!
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 15,
              fontWeight: '500',
              color: 'white',
            }}>
            Enter your information below
          </Text>

          <View
            style={{
              margin: 22,

              borderRadius: 10,
              padding: 10,
            }}>
            <View style={styles.inputView}>
              <TextInput
                value={email}
                keyboardType="email-address"
                // onChangeText={email => setemail(email)}
                placeholder="Email Address*"
                placeholderTextColor="black"
                style={styles.input}
              />
            </View>
            <View style={styles.inputView}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TextInput
                  value={password}
                  // onChangeText={password => setpassword(password)}
                  placeholder="Password *"
                  placeholderTextColor="black"
                  style={styles.input}
                  secureTextEntry={secureTextEntry1}
                />
                {secureTextEntry1 ? (
                  <TouchableOpacity
                  //  onPress={() => setsecureTextEntry1(false)}
                  >
                    <Entypo
                      name="eye-with-line"
                      size={20}
                      style={{marginTop: 15}}
                      color="black"
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                  //  onPress={() => setsecureTextEntry1(true)}
                  >
                    <Entypo
                      name="eye"
                      size={20}
                      style={{margin: 15}}
                      color="black"
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <RNBounceable>
              <RNBounceable
                onPress={() => navigation.navigate('Forgotpassword')}>
                <Text
                  style={{
                    color: '#212121',
                    fontSize: 15,
                    textAlign: 'right',
                    fontWeight: '600',
                    marginRight: 22,
                  }}>
                  Forgot Password?
                </Text>
              </RNBounceable>
            </RNBounceable>
            <View>
              <TouchableOpacity
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                activeOpacity={1}
                onPress={() => {
                  navigation.navigate('Tabs');
                }}>
                <Animated.View
                  style={[styles.button, {transform: [{scale: buttonScale}]}]}>
                  <Text style={styles.buttonText}>Sign in</Text>
                </Animated.View>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                textAlign: 'right',
                fontWeight: '600',
                marginRight: 22,
                marginTop: 20,
                marginBottom: 20,
              }}>
              Don't have an account?
              <RNBounceable onPress={() => navigation.navigate('Register')}>
                <Text style={{color: '#212121', fontWeight: '600'}}>
                  {' '}
                  Register Now
                </Text>
              </RNBounceable>{' '}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

export default Login;
const styles = StyleSheet.create({
  inputView: {
    width: '88%',
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 2,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginLeft: 20,
    marginTop: 10,
  },
  input: {
    height: 50,
    color: 'black',
    fontWeight: '400',
    fontSize: 15,
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
  },
  buttonText: {
    color: 'white', // Replace with your desired text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

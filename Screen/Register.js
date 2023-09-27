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
  const [Name, setName] = useState('');
  const [Mobileno, setMobileno] = useState('');
  const [Password, setPassword] = useState('');
  const [Confirmpassword, setConfirmpassword] = useState('');
  const [secureTextEntry1, setsecureTextEntry1] = useState(true);
  const [secureTextEntry12, setsecureTextEntry12] = useState(true);
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

  function validatename(inputtxt) {
    var phoneno = /^[a-zA-Z  ]{3,30}$/;
    if (inputtxt.match(phoneno)) {
      return true;
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'You have entered an invalid firstname! && it should be greaterthan 3 characters',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      return false;
    }
  }

  function phonenumbe1(inputtxt) {
    var phoneno = /^[6-9]\d{9}$/;
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

  function CheckPassword(inputtxt) {
    var decimal =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    if (inputtxt.match(decimal)) {
      return true;
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character!,and it should be 8 digits',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );

      return false;
    }
  }
  const Register = async () => {
    if (!Name) {
      ToastAndroid.showWithGravityAndOffset(
        'Name is missing !',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } else if (!email) {
      ToastAndroid.showWithGravityAndOffset(
        'Email is missing !',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } else if (!Mobileno) {
      ToastAndroid.showWithGravityAndOffset(
        'Mobile Number is missing !',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } else if (!Password) {
      ToastAndroid.showWithGravityAndOffset(
        'Password is missing !',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } else if (!Confirmpassword) {
      ToastAndroid.showWithGravityAndOffset(
        'Confirmpassword is missing !',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } else if (Password != Confirmpassword) {
      ToastAndroid.showWithGravityAndOffset(
        'Password & Confirmpassword should be same !',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } else {
      try {
        if (
          validatename(Name) &&
          phonenumbe1(Mobileno) &&
          CheckPassword(Password)
        ) {
          const config = {
            url: '/customer/signup',
            method: 'post',
            baseURL: 'http://192.168.1.19:8000/api',
            headers: {'content-type': 'application/json'},
            data: {
              name: Name,
              email: email,
              phoneNumber: Mobileno,
              password: Password,
              cpassword: Confirmpassword,
              role: 'Customer',
            },
          };

          let res = await axios(config);
          if (res.status === 200) {
            ToastAndroid.showWithGravityAndOffset(
              'Successfully Registered !',
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50,
            );
            navigation.navigate('Login');
          }
        }
      } catch (error) {
        if (error.response) {
          ToastAndroid.showWithGravityAndOffset(
            error.response.data.error,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
        }
      }
    }
  };

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
        backgroundColor: interpolatedColor,
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo
            name="chevron-left"
            color="white"
            size={25}
            style={{marginTop: 36}}
          />
        </TouchableOpacity>
        <ScrollView>
          <View
            style={{
              marginTop: -70,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: '800',
                color: 'white',
                marginTop: '50%',
              }}>
              Let's get you Register!
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
                backgroundColor: 'white ',

                borderRadius: 10,
                padding: 10,
              }}>
              <View style={styles.inputView}>
                <TextInput
                  value={Name}
                  keyboardType="email-address"
                  onChangeText={Name => setName(Name)}
                  placeholder="Name *"
                  placeholderTextColor="black"
                  style={styles.input}
                />
              </View>
              <View style={styles.inputView}>
                <TextInput
                  value={Mobileno}
                  keyboardType="number-pad"
                  onChangeText={Mobileno => setMobileno(Mobileno)}
                  placeholder="Mobileno *"
                  placeholderTextColor="black"
                  maxLength={10}
                  style={styles.input}
                />
              </View>
              <View style={styles.inputView}>
                <TextInput
                  value={email}
                  keyboardType="email-address"
                  onChangeText={email => setemail(email)}
                  placeholder="Email Address *"
                  placeholderTextColor="black"
                  style={styles.input}
                />
              </View>

              <View style={styles.inputView}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextInput
                    value={Password}
                    onChangeText={Password => setPassword(Password)}
                    placeholder="Password *"
                    placeholderTextColor="black"
                    style={styles.input}
                    secureTextEntry={secureTextEntry1}
                  />
                  {secureTextEntry1 ? (
                    <TouchableOpacity
                      onPress={() => setsecureTextEntry1(false)}>
                      <Entypo
                        name="eye-with-line"
                        size={20}
                        style={{margin: 15}}
                        color="black"
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={() => setsecureTextEntry1(true)}>
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
              <View style={styles.inputView}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextInput
                    value={Confirmpassword}
                    onChangeText={Confirmpassword =>
                      setConfirmpassword(Confirmpassword)
                    }
                    placeholder="Confirmpassword *"
                    placeholderTextColor="black"
                    style={styles.input}
                    secureTextEntry={secureTextEntry12}
                  />
                  {secureTextEntry12 ? (
                    <TouchableOpacity
                      onPress={() => setsecureTextEntry12(false)}>
                      <Entypo
                        name="eye-with-line"
                        size={20}
                        style={{margin: 15}}
                        color="black"
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => setsecureTextEntry12(true)}>
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
              <View>
                <Pressable
                  onPressIn={handlePressIn}
                  onPressOut={handlePressOut}
                  activeOpacity={1}
                  onPress={() => Register()}>
                  <Animated.View
                    style={[
                      styles.button,
                      {transform: [{scale: buttonScale}]},
                    ]}>
                    <Text style={styles.buttonText}>Sign up</Text>
                  </Animated.View>
                </Pressable>
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
                Already have an account?
                <RNBounceable onPress={() => navigation.navigate('Login')}>
                  <Text style={{color: '#e22217'}}> Login Now</Text>
                </RNBounceable>
              </Text>
            </View>
          </View>
        </ScrollView>
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
    marginBottom: 10,
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

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
import AsyncStorage from '@react-native-async-storage/async-storage';
import Waterdrop from '../Waterdropds';
import RNBounceable from '@freakycoder/react-native-bounceable';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
const Editprofile = ({navigation, route}) => {
  const {user} = route.params;
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
  const [email, setemail] = useState(user.email);
  const [Name, setName] = useState(user.name);
  const [Mobileno, setMobileno] = useState(user.phoneNumber);
  const [Password, setPassword] = useState('');
  const {width} = Dimensions.get('window');
  const buttonWidth = width * 1;

  const {height} = Dimensions.get('window');
  const componentHeight = height * 0.65; // 50% o

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

  const Update = async () => {
    try {
      const config = {
        url: '/customer/updateCustomer',
        method: 'put',
        baseURL: 'http://192.168.1.19:8000/api',
        headers: {'content-type': 'application/json'},
        data: {
          email: email ? email : user?.email,
          name: Name ? Name : user?.name,
          phoneNumber: Mobileno ? Mobileno : user?.phoneNumber,
          customerid: user._id,
        },
      };

      let res = await axios(config);
      if (res.status === 200) {
        ToastAndroid.showWithGravityAndOffset(
          'Successfully Login !',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
        await AsyncStorage.setItem('user', JSON.stringify(res.data.Customer));
        navigation.navigate('Profile');
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
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f0f0f0'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <ImageBackground
          style={{width: buttonWidth, height: componentHeight}}
          resizeMode={'stretch'}
          source={images[imageIndex]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo
              name="chevron-left"
              color="white"
              size={25}
              style={{marginTop: 50}}
            />
          </TouchableOpacity>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '800',
              color: 'white',
              marginTop: '50%',
            }}>
            Let's get you Details update!
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
        </ImageBackground>
        <View
          style={{margin: 22, marginTop: -150, borderRadius: 10, padding: 10}}>
          <View style={styles.inputView}>
            <TextInput
              value={Name}
              keyboardType="email-address"
              onChangeText={Name => setName(Name)}
              placeholder={user?.name}
              placeholderTextColor="black"
              style={styles.input}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              value={Mobileno}
              keyboardType="number-pad"
              onChangeText={Mobileno => setMobileno(Mobileno)}
              placeholder={(user?.phoneNumber).toString()}
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
              placeholder={user?.email}
              placeholderTextColor="black"
              style={styles.input}
            />
          </View>

          <View>
            <Pressable
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              activeOpacity={1}
              onPress={() => Update()}>
              <Animated.View
                style={[styles.button, {transform: [{scale: buttonScale}]}]}>
                <Text style={styles.buttonText}>Update User</Text>
              </Animated.View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Editprofile;
const styles = StyleSheet.create({
  inputView: {
    width: '88%',
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 2,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    height: 50,
    marginBottom: 30,
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

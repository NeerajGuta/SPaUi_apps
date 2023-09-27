import React, {useState,useEffect} from 'react';
import {Text, TextInput, TouchableOpacity, View,ScrollView,StyleSheet, StatusBar, Animated} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import Entypo from 'react-native-vector-icons/Entypo';
import Waterdrop from '../Waterdropds';
function Changepassword({navigation,route}) {
 
  const [password, setpassword] = useState('');
  const [confmpassword, setconfmpassword] = useState('');
  const [secureTextEntry1, setsecureTextEntry1] = useState(true);
  const [secureTextEntry12, setsecureTextEntry12] = useState(true);

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
  outputRange: ['rgb(239, 235, 216)', 'rgb(248, 248, 255)']
});
  return (
    <Animated.View  style={{flex:1,backgroundColor:interpolatedColor}}>
        <StatusBar backgroundColor="#e22217" />
      <View style={{flexDirection: 'row', backgroundColor: '#e22217',marginTop:"10%"}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo
            name="chevron-left"
            color="white"
            size={30}
            style={{margin: 10}}
          />
        </TouchableOpacity>
      </View>
      <Svg height="140" width="100%">
      <Path
          d="M0 100
             H 200
             V 100
             Q 100 100,
               100 50
             T 400 70
             V 0
             H 0
             Z "
          fill="#e22217"
        />
      </Svg>
      <View style={{justifyContent:"flex-end",margin:10}}>
        <Waterdrop size={30} color="#e22217" />
        </View>
        <View style={{flexDirection:"row",marginLeft:100}}>
        <Waterdrop size={30} color="#e22217" />
        <View style={{marginLeft:100}}>
        <Waterdrop size={30} color="#e22217" />
        </View>
       
        </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: '20%',
          marginLeft: 20,
          marginRight: 20,
        }}>
        <Text style={{color: '#e22217', fontWeight: 'bold', fontSize: 20}}>
          Enter New Password
        </Text>
        <Text style={{fontWeight: '500', fontSize: 18, textAlign: 'center',color:"black"}}>
          Your new password must be different from previously used password
        </Text>
        <View style={styles.inputView}>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <TextInput
            value={password}
            onChangeText={password => setpassword(password)}
            placeholder="Password *"
            placeholderTextColor="#e22217"
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
                          color="#e22217"
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => setsecureTextEntry1(true)}>
                        <Entypo
                          name="eye"
                          size={20}
                          style={{margin: 15}}
                          color="#e22217"
                        />
                      </TouchableOpacity>
                    )}
            </View>
          
        </View>
        <View style={styles.inputView}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <TextInput
            value={confmpassword}
            onChangeText={confmpassword => setconfmpassword(confmpassword)}
            placeholder="Confmpassword *"
            placeholderTextColor="#e22217"
            secureTextEntry={secureTextEntry12}
            style={styles.input}
          />
          {secureTextEntry12? (
                      <TouchableOpacity
                        onPress={() => setsecureTextEntry12(false)}>
                        <Entypo
                          name="eye-with-line"
                          size={20}
                          style={{margin: 15}}
                          color="#e22217"
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => setsecureTextEntry12(true)}>
                        <Entypo
                          name="eye"
                          size={20}
                          style={{margin: 15}}
                          color="#e22217"
                        />
                      </TouchableOpacity>
                    )}
                    </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#e22217',
            marginTop: 30,
            padding: 10,
            paddingLeft: 70,
            paddingRight: 70,
            borderRadius:30
          }}
          onPress={()=>navigation.navigate("Login")}
          >
          <View>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
              Reset Password
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View >
  );
}

export default Changepassword;
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
        color: '#e22217',
        fontWeight: '400',
        fontSize: 15,
      },
})
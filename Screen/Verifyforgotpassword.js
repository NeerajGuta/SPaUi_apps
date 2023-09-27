import React, {useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,ScrollView, StatusBar, Animated
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useFocusEffect} from '@react-navigation/native';
import Waterdrop from '../Waterdropds';
const CELL_COUNT = 6;
function Verifyforgotpassword({navigation,route}) {
   
  const [enableMask, setEnableMask] = useState(true);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const toggleMask = () => setEnableMask(f => !f);
  const renderCell = ({index, symbol, isFocused}) => {
    let textChild = null;

    if (symbol) {
      textChild = enableMask ? '•' : symbol;
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <Text
        key={index}
        style={[style.cell, isFocused && style.focusCell]}
        onLayout={getCellOnLayoutHandler(index)}>
        {textChild}
      </Text>
    );
  };

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
    <>
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
            Get Your Code
          </Text>
          <Text style={{fontWeight: '500', fontSize: 18, textAlign: 'center',color:"black"}}>
            Please enter the 6 digit code that send to your Mobile Number
          </Text>
          <View style={style.fieldRow}>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={renderCell}
            />
            <Text style={style.toggle} onPress={toggleMask}>
              {/* {enableMask ? '🙈' : '🐵'} */}
              {enableMask ? (
                <Entypo name="eye" color="#e22217" size={30} />
              ) : (
                <Entypo name="eye-with-line" color="#e22217" size={30} />
              )}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#e22217',
              marginTop: 30,
              padding: 10,
              paddingLeft: 60,
              paddingRight: 60,
              borderRadius:30
            }}
            onPress={()=>navigation.navigate("Changepassword")}
            >
            <View onPress={()=>navigation.navigate("Changepassword")}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                Verify Otp
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View >
    </>
  );
}

export default Verifyforgotpassword;

const style = StyleSheet.create({
  focusCell: {borderColor: '#e22217'},
  fieldRow: {
    marginTop: 40,
    flexDirection: 'row',
    marginLeft: 8,
    justifyContent: 'center',
  },
  toggle: {
    width: 45,
    height: 45,
    lineHeight: 33,
    fontSize: 30,
    textAlign: 'center',
  },
  cell: {
    width: 36,
    height: 36,
    lineHeight: 32,
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    marginLeft: 8,
    borderRadius: 6,
    borderColor: '#e22217',
    borderWidth: 1,
    color: '#e22217',
  },
});
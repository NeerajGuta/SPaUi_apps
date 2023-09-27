import React, {useState, useEffect} from 'react';
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
  Animated,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Search({navigation}) {
  const {width} = Dimensions.get('window');
  const buttonWidth = width * 1;

  const {height} = Dimensions.get('window');
  const componentHeight = height * 0.65; // 50% o

  const [Search, setSearch] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: '#fffff'}}>
      <StatusBar backgroundColor="#e22217" />
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#e22217',
          marginTop: '10%',
        }}></View>

      <View style={{flexDirection: 'row'}}>
        <View style={styles.inputView}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <AntDesign
                name="arrowleft"
                size={20}
                style={{margin: 15}}
                color="#808080"
              />
            </TouchableOpacity>
            <TextInput
              value={Search}
              keyboardType="name-phone-pad"
              onChangeText={Search => setSearch(Search)}
              placeholder="Search For City, Location "
              placeholderTextColor="#808080"
              style={styles.input}
            />
          </View>
        </View>
      </View>
      {/* <TouchableOpacity>
        <Animated.View style={[styles.button]}>
          <Text style={styles.buttonText}>Search</Text>
        </Animated.View>
      </TouchableOpacity> */}
    </View>
  );
}

export default Search;
const styles = StyleSheet.create({
  inputView: {
    width: '94%',
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    paddingLeft: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#808080',

    // margin: 10,
  },
  input: {
    color: '#808080',
    fontWeight: '600',
    fontSize: 15,
  },
  button: {
    backgroundColor: '#e22217', // Replace with your desired button color
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginLeft: 22,
    marginRight: 22,
    marginTop: '10%',
  },
  buttonText: {
    color: 'white', // Replace with your desired text color
    fontSize: 13,
    fontWeight: 'bold',
  },
});

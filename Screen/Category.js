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
  FlatList,
  Image,
  Animated,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Waterdrop from '../Waterdropds';
function Category({navigation}) {
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
  const data3 = [
    {
      name: 'Fully Body Massage',
      image: require('../assets/cat1.webp'),
    },

    {
      name: 'Couple Massage',
      image: require('../assets/cat2.webp'),
    },
    {
      name: 'Ayurvedic Massage',
      image: require('../assets/cat3.webp'),
    },
    {
      name: 'Thai Body Massage ',
      image: require('../assets/spa4.webp'),
    },
    {
      name: 'All Massage Deals ',
      image: require('../assets/spa5.webp'),
    },
  ];
  const {width} = Dimensions.get('window');
  const buttonWidth = width * 1;

  const {height} = Dimensions.get('window');
  const componentHeight = height * 0.65; // 50% o

  const [Search, setSearch] = useState('');

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
          Category{' '}
        </Text>
      </View>
      <View>
        <FlatList
          data={data3}
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: 10,
          }}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          numColumns={1}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Allproducts')}>
                <View style={styles.mnb}>
                  <Image
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 10,
                      alignSelf: 'center',
                      marginLeft: 20,
                    }}
                    source={item.image}
                  />
                  <Text style={styles.cardTitle}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}

export default Category;
const styles = StyleSheet.create({
  mnb: {
    backgroundColor: 'white',
    margin: 10,
    padding: 5,
    borderRadius: 20,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 5,
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
});

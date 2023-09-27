import React, {useState, useRef, useEffect} from 'react';
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
  Image,
  FlatList,
  Animated,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Waterdrop from '../Waterdropds';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import StarRating from 'react-native-star-rating';
function Home({navigation}) {
  const datas = [
    {
      name: 'Spa',
      image: require('../assets/cat1.webp'),
    },

    {
      name: 'Hair Salon',
      image: require('../assets/cat2.webp'),
    },
    {
      name: 'Salon Products',
      image: require('../assets/cat3.webp'),
    },
    {
      name: 'Spa',
      image: require('../assets/cat1.webp'),
    },

    {
      name: 'Hair Salon',
      image: require('../assets/cat2.webp'),
    },
    {
      name: 'Salon Products',
      image: require('../assets/cat3.webp'),
    },
  ];
  const datas1 = [
    {
      name: 'Bangalore',
      image: require('../assets/bangalore.jpg'),
    },

    {
      name: 'Mysore',
      image: require('../assets/mysore.jpg'),
    },
    {
      name: 'Chennai',
      image: require('../assets/chennai.jpg'),
    },
    {
      name: 'Dehli',
      image: require('../assets/dehli.jpg'),
    },

    {
      name: 'Gurgaon',
      image: require('../assets/gurgaon.jpg'),
    },
    {
      name: 'HyderaBad',
      image: require('../assets/Hyderabad.jpg'),
    },
    {
      name: 'Kolkata',
      image: require('../assets/Kolkata.jpg'),
    },
    {
      name: 'Mumbai',
      image: require('../assets/mumbai.jpg'),
    },
    {
      name: 'Noida',
      image: require('../assets/noida.jpg'),
    },
    {
      name: 'Pune',
      image: require('../assets/pune.jpg'),
    },
  ];

  const data5 = [
    {
      id: '1',
      rating: '3.4',
      title: 'Golden Glow Ayurvedic Massage Men To Men',
      loaction:
        '289, 30th St, Kambar Colony, I Block, Anna Nagar, Chennai, Tamil Nadu, India',
      price: 2340,
      orignalprice: 2640,
      offer: 23,
      // name: 'Under 500',
      // person: 'One Person',
      image: require('../assets/slider3.webp'),
    },

    {
      id: '1',
      rating: '3.4',
      title: 'Golden Glow Ayurvedic Massage Men To Men',
      loaction:
        '289, 30th St, Kambar Colony, I Block, Anna Nagar, Chennai, Tamil Nadu, India',
      price: 2340,
      orignalprice: 2640,
      offer: 23,
      // name: 'Under 500',
      // person: 'One Person',
      image: require('../assets/slider3.webp'),
    },
    {
      id: '1',
      rating: '3.4',
      title: 'Golden Glow Ayurvedic Massage Men To Men',
      loaction:
        '289, 30th St, Kambar Colony, I Block, Anna Nagar, Chennai, Tamil Nadu, India',
      price: 2340,
      orignalprice: 2640,
      offer: 23,
      // name: 'Under 500',
      // person: 'One Person',
      image: require('../assets/slider3.webp'),
    },
    {
      id: '1',
      rating: '3.4',
      title: 'Golden Glow Ayurvedic Massage Men To Men',
      loaction:
        '289, 30th St, Kambar Colony, I Block, Anna Nagar, Chennai, Tamil Nadu, India',
      price: 2340,
      orignalprice: 2640,
      offer: 23,
      // name: 'Under 500',
      // person: 'One Person',
      image: require('../assets/slider3.webp'),
    },
    {
      id: '1',
      rating: '3.4',
      title: 'Golden Glow Ayurvedic Massage Men To Men',
      loaction:
        '289, 30th St, Kambar Colony, I Block, Anna Nagar, Chennai, Tamil Nadu, India',
      price: 2340,
      orignalprice: 2640,
      offer: 23,
      // name: 'Under 500',
      // person: 'One Person',
      image: require('../assets/slider3.webp'),
    },
    {
      id: '1',
      rating: '3.4',
      title: 'Golden Glow Ayurvedic Massage Men To Men',
      loaction:
        '289, 30th St, Kambar Colony, I Block, Anna Nagar, Chennai, Tamil Nadu, India',
      price: 2340,
      orignalprice: 2640,
      offer: 23,
      // name: 'Under 500',
      // person: 'One Person',
      image: require('../assets/slider3.webp'),
    },
  ];

  const datas4 = [
    {
      name: 'Basic Massage',
      image: require('../assets/massage.jpg'),
    },

    {
      name: 'Hair Wash',
      image: require('../assets/massage1.jpeg'),
    },
    {
      name: 'Salon Products',
      image: require('../assets/massage2.jpg'),
    },
    {
      name: 'Full Body Massage',
      image: require('../assets/massage3.jpg'),
    },
    {
      name: 'Basic Massage',
      image: require('../assets/massage.jpg'),
    },

    {
      name: 'Hair Wash',
      image: require('../assets/massage1.jpeg'),
    },
  ];

  const scrollX = useRef(new Animated.Value(0))?.current;
  const scrollViewRef = useRef(null);
  const containerWidth = Dimensions?.get('window').width;
  const numItems = 3; // Adjust this based on the number of items in the ScrollView

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      const nextScrollX =
        (scrollX?._value + containerWidth) % (containerWidth * numItems);
      scrollViewRef?.current?.scrollTo({x: nextScrollX, animated: true});
    }, 2000);

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  const [allBanner, setallBanner] = useState([]);
  const getAllbaner = async () => {
    try {
      let res = await axios.get(
        'http://192.168.1.19:8000/api/admin/getBanner1',
      );
      if (res.status == 200) {
        setallBanner(res.data.bannerList);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getAllbaner();
  }, []);
  const [allBanner1, setallBanner1] = useState([]);
  const getAllbaner1 = async () => {
    try {
      let res = await axios.get('http://192.168.1.19:8000/api/admin/getBanner');
      if (res.status == 200) {
        setallBanner1(res.data.bannerList);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getAllbaner1();
  }, []);
  const [category, setcategory] = useState([]);

  useEffect(() => {
    getallCategory();
  }, []);

  const getallCategory = () => {
    axios
      .get('http://192.168.1.19:8000/api/admin/getcategory')
      .then(function (response) {
        console.log(response.data);
        setcategory(response.data.category);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const [vendors, setvendors] = useState([]);
  useEffect(() => {
    getallVendor();
  }, []);

  const getallVendor = () => {
    axios
      .get('http://192.168.1.19:8000/api/vendor/allVendors')
      .then(function (response) {
        // console.log(response.data);
        setvendors(
          response.data.allVendors?.filter(
            item => item.approved === 'Approved',
          ),
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [Service, setService] = useState([]);
  useEffect(() => {
    getallservices();
  }, []);

  const getallservices = () => {
    axios
      .get('http://192.168.1.19:8000/api/vendor/getService')
      .then(function (response) {
        console.log(response.data);
        setService(response.data.Service);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [data, setdata] = useState([]);

  useEffect(() => {
    getallBanners();
  }, []);

  const getallBanners = () => {
    axios
      .get('http://192.168.1.19:8000/api/admin/getBanner2')
      .then(function (response) {
        console.log(response.data);
        setdata(response.data.bannerList);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <View style={{flex: 1, backgroundColor: '#ffff'}}>
      <StatusBar
        translucent
        backgroundColor="#e22217"
        barStyle="light-content"
      />
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          marginTop: 20,
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <ImageBackground
          style={{width: 120, height: 45, marginTop: 10}}
          resizeMode={'stretch'}
          source={require('../assets/logo.jpg')}
        />
        <TouchableOpacity
          style={styles.inputView}
          onPress={() => navigation.navigate('Search')}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: 5,
              }}>
              <Text style={styles.input}> Search </Text>
              <FontAwesome
                name="search"
                size={20}
                // style={{margin: 10}}
                color="#e22217"
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={{paddingTop: 10, paddingBottom: 10}}>
            <FlatList
              data={datas1}
              contentContainerStyle={{
                flexDirection: 'row',
                flexGrow: 1,
                paddingTop: 2,
              }}
              showsVerticalScrollIndicator={false}
              // numColumns={5}
              horizontal={false}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <View style={[styles.mnb, {paddingBottom: 20}]}>
                      <Image
                        style={{
                          height: 60,
                          width: 60,
                          borderRadius: 100,
                          alignSelf: 'center',

                          // borderWidth: 1,
                          // borderColor: '#212121',
                        }}
                        source={item.image}
                        resizeMode="cover"
                      />
                      <View>
                        <Text style={styles.cardTitle}>{item.name}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </ScrollView>
        <Text
          style={[
            styles.input,
            {fontSize: 17, fontWeight: '700', color: '#212121', marginLeft: 5},
          ]}>
          Popular Categories
        </Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={{paddingTop: 10, paddingBottom: 20}}>
            <FlatList
              data={datas}
              contentContainerStyle={{
                flexDirection: 'row',
                flexGrow: 1,
                paddingTop: 8,
              }}
              showsVerticalScrollIndicator={false}
              // numColumns={5}
              horizontal={false}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('')}
                    style={[
                      styles.mnb,
                      {
                        alignContent: 'center',
                        alignItems: 'center',
                      },
                    ]}>
                    <View
                      style={[
                        styles.mnb,
                        {
                          borderWidth: 1,
                          borderColor: '#808080',
                          borderRadius: 100,
                          height: 65,
                          width: 65,
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignContent: 'center',
                          alignItems: 'center',
                        },
                      ]}>
                      <Image
                        style={{
                          height: 50,
                          width: 50,

                          alignSelf: 'center',
                        }}
                        source={item.image}
                        resizeMode="contain"
                      />
                    </View>
                    <View>
                      <Text style={styles.cardTitle}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </ScrollView>

        {/* Massage Type===== */}
        <View style={{paddingTop: 10, paddingBottom: 20}}>
          <Text
            style={[
              styles.input,
              {
                fontSize: 17,
                fontWeight: '700',
                color: '#212121',
                marginLeft: 5,
              },
            ]}>
            Massage Type
          </Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={{paddingTop: 10, paddingBottom: 10}}>
              <FlatList
                data={datas4}
                contentContainerStyle={{
                  flexDirection: 'row',
                  flexGrow: 1,
                  paddingTop: 8,
                }}
                showsVerticalScrollIndicator={false}
                // numColumns={5}
                horizontal={false}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                      <View style={[styles.mnb, {padding: 5}]}>
                        <Image
                          style={{
                            height: 135,
                            width: 120,
                            alignSelf: 'center',
                            borderRadius: 6,
                          }}
                          source={item.image}
                          resizeMode="cover"
                        />
                        <View style={{paddingTop: 4}}>
                          <Text style={styles.cardTitle}>{item.name}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </ScrollView>
        </View>

        {/* Product Type===== */}
        <View style={{paddingTop: 10, paddingBottom: 20, width: '100%'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingRight: 10,
              paddingBottom: 10,
            }}>
            <Text
              style={[
                styles.input,
                {
                  fontSize: 17,
                  fontWeight: '700',
                  color: '#212121',
                  marginLeft: 5,
                },
              ]}>
              Top Rated Spa
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Allproducts')}>
              <Text
                style={[
                  styles.input,
                  {
                    fontSize: 12,
                    fontWeight: '500',
                    color: '#212121',
                    marginLeft: 5,
                  },
                ]}>
                {' '}
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '100%',

              flexDirection: 'column',
              // flexWrap: 'wrap',
            }}>
            {data5?.map(item => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Productdescription');
                  }}>
                  <View style={styles.productb}>
                    <Image
                      source={item.image}
                      resizeMode="cover"
                      style={styles.dpimage}
                    />
                    <View
                      style={{
                        position: 'absolute',
                        top: 5,
                        right: 10,
                        backgroundColor: '#ffff',
                        // height: 30,
                        // width: 30,
                        padding: 5,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        borderRadius: 50,
                      }}>
                      <Text>
                        <AntDesign name="hearto" size={20} />
                      </Text>
                    </View>
                    <View>
                      <Text style={{paddingTop: 5, paddingBottom: 3}}>
                        <AntDesign name="star" size={15} color="red" /> &nbsp;
                        {item.rating}&nbsp;&nbsp;(9)
                      </Text>
                      <Text style={styles.spatitle1}>{item.title}</Text>
                      <Text style={styles.spatitle2}>{item.loaction}</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'baseline',
                      }}>
                      <Text style={styles.spatitle3}>₹{item.price}</Text>
                      <Text style={styles.spatitle4}>₹{item.orignalprice}</Text>
                      <Text style={styles.spatitle5}>
                        {item.offer}%&nbsp;OFF
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={16}
          pagingEnabled
          style={{marginTop: 10}}>
          {allBanner1?.map(item => {
            return (
              <View style={{borderRadius: 10}}>
                <Image
                  style={{
                    width: Dimensions.get('window').width,
                    height: 180,
                    backgroundColor: '#f0f0f0',
                  }}
                  src={'http://192.168.1.19:8000/Banner/' + item?.bannerimg}
                  resizeMode="stretch"
                />
              </View>
            );
          })}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

export default Home;
const styles = StyleSheet.create({
  inputView: {
    width: '65%',
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    padding: 10,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    margin: 10,
  },
  input: {
    color: '#5a0d09',
    fontWeight: '400',
    fontSize: 15,
  },

  productb: {
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 20,
  },
  mnb1: {
    // backgroundColor:'white',
    margin: 15,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '400',
    // paddingLeft: 30,
    color: '#212121',
    width: 100,
    textAlign: 'center',
  },
  ratingContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  starRatingContainer: {
    marginTop: 5,
  },
  spatitle1: {
    fontSize: 16,
    color: '#212121',
    fontWeight: '300',
  },
  spatitle2: {
    fontSize: 14,
    fontWeight: '400',
  },
  spatitle3: {
    fontSize: 18,
    fontWeight: '800',
    color: '#212121',
    paddingTop: 5,
  },
  spatitle4: {
    paddingLeft: 10,
    textDecorationLine: 'line-through',
    color: '#2121212',
    paddingTop: 5,
    paddingBottom: 3,
  },
  spatitle5: {
    paddingLeft: 10,
    color: 'red',
    paddingTop: 5,
    paddingBottom: 3,
  },
  dpimage: {
    height: 251,
    width: '100%',
    borderRadius: 12,
  },
});

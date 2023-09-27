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

  const data5 = [
    {
      id: '1',
      rating: '3.4',
      title: 'SPOT ON SPA',
      loaction: 'Bangalore Rajaji Nagar',
      price: 234,
      orignalprice: 597,
      offer: 23,
      // name: 'Under 500',
      // person: 'One Person',
      image: require('../assets/slider3.webp'),
    },

    {
      id: '1',
      rating: '3.4',
      title: 'SPOT ON SPA',
      loaction: 'Bangalore Rajaji Nagar',
      price: 234,
      orignalprice: 597,
      offer: 23,
      // name: 'Under 500',
      // person: 'One Person',
      image: require('../assets/slider3.webp'),
    },
    {
      id: '1',
      rating: '3.4',
      title: 'SPOT ON SPA',
      loaction: 'Bangalore Rajaji Nagar',
      price: 234,
      orignalprice: 597,
      offer: 23,
      // name: 'Under 500',
      // person: 'One Person',
      image: require('../assets/slider3.webp'),
    },
    {
      id: '1',
      rating: '3.4',
      title: 'SPOT ON SPA',
      loaction: 'Bangalore Rajaji Nagar',
      price: 234,
      orignalprice: 597,
      offer: 23,
      // name: 'Under 500',
      // person: 'One Person',
      image: require('../assets/slider3.webp'),
    },
    {
      id: '1',
      rating: '3.4',
      title: 'SPOT ON SPA',
      loaction: 'Bangalore Rajaji Nagar',
      price: 234,
      orignalprice: 597,
      offer: 23,
      // name: 'Under 500',
      // person: 'One Person',
      image: require('../assets/slider3.webp'),
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

  const topdiscount = vendors.filter(item => item.mindiscount >= 50);
  const trending = vendors?.sort((a, b) => b.orders?.length - a.orders?.length);

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
    <Animated.View style={{flex: 1, backgroundColor: interpolatedColor}}>
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
          source={require('../assets/logogrey.jpg')}
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
        <Text
          style={[
            styles.input,
            {fontSize: 17, fontWeight: '700', color: '#5a0d09', marginLeft: 5},
          ]}>
          Popular Categories
        </Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={{paddingTop: 10, paddingBottom: 10}}>
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
                  <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <View style={styles.mnb}>
                      <Image
                        style={{
                          height: 60,
                          width: 60,
                          borderRadius: 100,
                          alignSelf: 'center',
                          borderWidth: 1,
                          borderColor: '#ffff',
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

        {/* Massage Type===== */}
        <View style={{paddingTop: 10, paddingBottom: 10}}>
          <Text
            style={[
              styles.input,
              {
                fontSize: 17,
                fontWeight: '700',
                color: '#5a0d09',
                marginLeft: 5,
              },
            ]}>
            Massage Type
          </Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={{paddingTop: 10, paddingBottom: 10}}>
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
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                      <View style={styles.mnb}>
                        <Image
                          style={{
                            height: 60,
                            width: 60,
                            borderRadius: 100,
                            alignSelf: 'center',
                            borderWidth: 1,
                            borderColor: '#ffff',
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
        </View>
        {/* <Text
          style={[
            styles.input,
            {fontSize: 20, fontWeight: '900', marginTop: 20, color: '#5a0d09'},
          ]}>
          {' '}
          Popular Spa Categories{' '}
        </Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View>
            <FlatList
              data={category}
              contentContainerStyle={{
                flexGrow: 1,
                paddingTop: 10,
              }}
              showsHorizontalScrollIndicator={false}
              horizontal={false}
              numColumns={4}
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
                        }}
                        source={{
                          uri: `http://192.168.1.19:8000/Category/${item?.catimage}`,
                        }}
                      />
                    </View>
                    <View>
                      <Text style={styles.cardTitle}>{item?.catname}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </ScrollView> */}
        {/* <ScrollView
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
                    height: 200,
                    backgroundColor: '#f0f0f0',
                  }}
                  src={'http://192.168.1.19:8000/Banner/' + item?.bannerimg}
                  resizeMode="stretch"
                />
              </View>
            );
          })}
        </ScrollView> */}
        {/* <Text
          style={[
            styles.input,
            {
              fontSize: 20,
              fontWeight: '900',
              marginTop: 20,
              color: '#5a0d09',
              marginLeft: 5,
            },
          ]}>
          Massage In Your Budget
        </Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View>
            <FlatList
              data={data5}
              contentContainerStyle={{
                flexGrow: 1,
                paddingTop: 10,
                alignSelf: 'center',
              }}
              showsVerticalScrollIndicator={false}
              horizontal={false}
              // numColumns={2}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Allproducts')}>
                    <View style={styles.mnb1}>
                      <View>
                        <ImageBackground
                          style={{
                            height: 100,
                            width: 130,
                            alignSelf: 'center',
                          }}
                          imageStyle={{borderRadius: 10}}
                          source={item.image}
                          resizeMode="stretch">
                          <Text
                            style={[
                              styles.cardTitle,
                              {
                                fontSize: 20,
                                color: 'black',
                                textAlign: 'center',
                                marginTop: '25%',
                              },
                            ]}>
                            {item.name}
                          </Text>
                          <Text
                            style={[
                              styles.cardTitle,
                              {color: 'black', textAlign: 'center'},
                            ]}>
                            ({item.person})
                          </Text>
                        </ImageBackground>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </ScrollView> */}

        {/* Product Type===== */}
        <View style={{paddingTop: 10, paddingBottom: 10, width: '100%'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingRight: 10,
            }}>
            <Text
              style={[
                styles.input,
                {
                  fontSize: 17,
                  fontWeight: '700',
                  color: '#5a0d09',
                  marginLeft: 5,
                },
              ]}>
              Top Rated Spa
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Productdescription')}>
              <Text
                style={[
                  styles.input,
                  {
                    fontSize: 12,
                    fontWeight: '500',
                    color: '#5a0d09',
                    marginLeft: 5,
                  },
                ]}>
                {' '}
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View
              style={{
                paddingTop: 10,
                paddingBottom: 10,
                width: '100%',
                paddingLeft: 10,
              }}>
              <FlatList
                data={data5}
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
                      onPress={() => navigation.navigate('Productdescription')}>
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
                            <AntDesign name="star" size={15} color="red" />{' '}
                            &nbsp;&nbsp;
                            {item.rating}
                          </Text>
                          <Text style={styles.spatitle1}>{item.title}</Text>
                          <Text style={styles.spatitle2}>{item.loaction}</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text style={styles.spatitle3}>
                            ₹&nbsp;{item.price}
                          </Text>
                          <Text style={styles.spatitle4}>
                            ₹&nbsp;{item.orignalprice}
                          </Text>
                          <Text style={styles.spatitle5}>
                            {item.offer}%&nbsp;OFF
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </ScrollView>
        </View>
        {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={[
              styles.input,
              {
                fontSize: 15,
                fontWeight: '900',
                marginTop: 20,
                color: '#5a0d09',
                marginLeft: 5,
              },
            ]}>
            Top Rated Spas In Your City
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Allproducts', {
                data: vendors.map(item => item),
              })
            }>
            <Text
              style={[
                styles.input,
                {
                  fontSize: 13,
                  fontWeight: '900',
                  marginTop: 20,
                  color: '#5a0d09',
                  marginRight: 5,
                },
              ]}>
              View All
            </Text>
          </TouchableOpacity>
        </View> */}
        {/* <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View>
            <FlatList
              data={vendors}
              contentContainerStyle={{
                flexGrow: 1,
                paddingTop: 10,
              }}
              showsVerticalScrollIndicator={false}
              horizontal={false}
              numColumns={100000}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Productdescription')}>
                    <View style={styles.mnb}>
                      <Image
                        style={{
                          height: 150,
                          width: 200,
                          borderRadius: 10,
                          alignSelf: 'center',
                        }}
                        source={{
                          uri: `http://192.168.1.19:8000/Vendor/${item?.spaimage1}`,
                        }}
                      />
                      <View>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '800',
                            color: 'black',
                            width: 200,
                          }}>
                          {item.businessName}
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '800',
                            color: 'black',
                            width: 200,
                          }}>
                          {' '}
                          <FontAwesome6
                            name="location-dot"
                            color="black"
                            size={10}
                            style={{margin: 10}}
                          />{' '}
                          {item.address}
                        </Text>
                      </View>
                      <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={
                          item?.reviews?.reduce(
                            (a, data) => a + data.rating,
                            0,
                          ) / item?.reviews?.length
                        }
                        fullStarColor={'black'}
                        starSize={20}
                        containerStyle={styles.starRatingContainer}
                      />
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </ScrollView> */}
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
        {/* <Text
          style={{
            fontSize: 20,
            color: '#5a0d09',
            fontWeight: '900',
            margin: 10,
          }}>
          Relaxing Massage
        </Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View>
            <FlatList
              data={Service}
              contentContainerStyle={{
                flexGrow: 1,
                paddingTop: 10,
              }}
              showsVerticalScrollIndicator={false}
              horizontal={false}
              numColumns={3}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Allproducts')}>
                    <View style={{margin: 10}}>
                      <ImageBackground
                        style={{
                          height: 100,
                          width: 100,
                          alignSelf: 'center',
                        }}
                        imageStyle={{borderRadius: 50}}
                        source={{
                          uri: `http://192.168.1.19:8000/Service/${item?.Service_Image}`,
                        }}>
                        <View>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: '900',
                              color: 'white',
                              textAlign: 'center',
                              marginTop: '40%',
                            }}>
                            {item.ServiceName}
                          </Text>
                        </View>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 15,
              color: '#5a0d09',
              fontWeight: '900',
              margin: 10,
            }}>
            Top Discount Spas In Your City
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Allproducts', {
                data: topdiscount.map(item => item),
              })
            }>
            <Text
              style={{
                fontSize: 13,
                color: '#5a0d09',
                fontWeight: '900',
                margin: 10,
              }}>
              View All
            </Text>
          </TouchableOpacity>
        </View> */}
        {/* <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View>
            <FlatList
              data={topdiscount}
              contentContainerStyle={{
                flexGrow: 1,
                paddingTop: 10,
              }}
              showsVerticalScrollIndicator={false}
              horizontal={false}
              numColumns={100000}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Productdescription')}>
                    <View style={styles.mnb}>
                      <Image
                        style={{
                          height: 150,
                          width: 200,
                          borderRadius: 10,
                          alignSelf: 'center',
                        }}
                        source={{
                          uri: `http://192.168.1.19:8000/Vendor/${item?.spaimage1}`,
                        }}
                      />
                      <View>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '800',
                            color: 'black',
                            width: 200,
                          }}>
                          {item?.businessName}
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '800',
                            color: 'black',
                            width: 200,
                          }}>
                          {' '}
                          <FontAwesome6
                            name="location-dot"
                            color="black"
                            size={10}
                            style={{margin: 10}}
                          />{' '}
                          {item?.address}
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{
                              fontSize: 10,
                              fontWeight: '800',
                              color: 'black',
                              marginLeft: 10,
                              textDecorationLine: 'line-through',
                            }}>
                            ₹ {item?.basicprice}
                          </Text>
                          <Text
                            style={{
                              fontSize: 10,
                              fontWeight: '800',
                              color: 'black',

                              marginLeft: 10,
                            }}>
                            ₹{' '}
                            {item?.basicprice -
                              (item?.basicprice * item?.mindiscount) / 100}
                          </Text>
                          <Text
                            style={{
                              fontSize: 10,
                              fontWeight: '800',
                              color: 'black',

                              marginLeft: 10,
                            }}>
                            {item.mindiscount}% off
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </ScrollView>
        <View>
          <ImageBackground
            style={{
              height: 150,
              width: '100%',
              alignSelf: 'center',
            }}
            imageStyle={{}}
            source={require('../assets/test_bg.jpg')}>
            <View></View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '800',
                color: '#b41b12',
                marginLeft: 10,
                textAlign: 'center',
                marginTop: '15%',
              }}>
              Stress Can Affect Our Bodies And Health
            </Text>
            <Text
              style={{
                fontSize: 8,
                fontWeight: '800',
                color: '#b41b12',
                marginLeft: 10,
                textAlign: 'center',
              }}>
              If you feel tired after a working day, we are happy to give you an
              enjoyable and healthy solution to find your balance again. Come in
              and our we provide the perfect treatment and help you achieve the
              perfect mind-body harmony.
            </Text>
          </ImageBackground>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 15,
              color: '#5a0d09',
              fontWeight: '900',
              margin: 10,
            }}>
            Trending Spa Best Of Price
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Allproducts', {
                data: trending.map(item => item),
              })
            }>
            <Text
              style={{
                fontSize: 13,
                color: '#5a0d09',
                fontWeight: '900',
                margin: 10,
              }}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View>
            <FlatList
              data={trending}
              contentContainerStyle={{
                flexGrow: 1,
                paddingTop: 10,
              }}
              showsVerticalScrollIndicator={false}
              horizontal={false}
              numColumns={100000}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Productdescription')}>
                    <View style={styles.mnb}>
                      <Image
                        style={{
                          height: 150,
                          width: 200,
                          borderRadius: 10,
                          alignSelf: 'center',
                        }}
                        source={{
                          uri: `http://192.168.1.19:8000/Vendor/${item?.spaimage1}`,
                        }}
                      />
                      <View>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '800',
                            color: 'black',
                            width: 200,
                          }}>
                          {item.businessName}
                        </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '800',
                            color: 'black',
                            width: 200,
                          }}>
                          {' '}
                          <FontAwesome6
                            name="location-dot"
                            color="black"
                            size={10}
                            style={{margin: 10}}
                          />{' '}
                          {item?.address}
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{
                              fontSize: 10,
                              fontWeight: '800',
                              color: 'black',
                              marginLeft: 10,
                              textDecorationLine: 'line-through',
                            }}>
                            ₹ {item?.basicprice}
                          </Text>
                          <Text
                            style={{
                              fontSize: 10,
                              fontWeight: '800',
                              color: 'black',

                              marginLeft: 10,
                            }}>
                            ₹{' '}
                            {item?.basicprice -
                              (item?.basicprice * item?.mindiscount) / 100}
                          </Text>
                          <Text
                            style={{
                              fontSize: 10,
                              fontWeight: '800',
                              color: 'black',

                              marginLeft: 10,
                            }}>
                            {item.mindiscount}% off
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </ScrollView> */}
      </ScrollView>
    </Animated.View>
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
  dpimage: {
    height: 160,
    width: 200,
    borderRadius: 12,
  },
  productb: {
    marginLeft: 10,
    marginRight: 10,
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
});

<View style={{flexDirection: 'row'}}>
  <View style={styles.inputView}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TextInput
        value={Search}
        keyboardType="name-phone-pad"
        onChangeText={Search => setSearch(Search)}
        placeholder="Search For Spa *"
        placeholderTextColor="black"
        style={styles.input}
      />
      <FontAwesome name="search" size={20} style={{margin: 15}} color="black" />
    </View>
  </View>
</View>;

// phone with flag
import React, {useState, useEffect} from 'react';
import {View, TextInput, Button, Alert, StyleSheet} from 'react-native';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';
import {getCountry} from 'react-native-localize';

const YourComponent = () => {
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

  const onSubmit = () => {
    // Perform your desired action with the phone number and country code
    Alert.alert(
      'Form Submitted',
      `Phone Number: ${phoneNumber}\nCountry Code: ${countryCode}`,
    );
  };

  const toggleCountryPicker = () => {
    setCountryPickerVisible(!countryPickerVisible);
  };

  return (
    <View style={styles.container}>
      <PhoneInput
        value={phoneNumber}
        onChangePhoneNumber={number => setPhoneNumber(number)}
        onPressFlag={toggleCountryPicker}
        style={styles.phoneInput}
        initialCountry={countryCode} // Set the initial country code
        flagStyle={styles.flag}
      />
      <Button
        title={selectedCountry ? selectedCountry.name : 'Select Country'}
        onPress={toggleCountryPicker}
        style={styles.countryButton}
      />
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
      <Button title="Submit" onPress={onSubmit} style={styles.submitButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  phoneInput: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  flag: {
    width: 30,
    height: 20,
  },
  countryButton: {
    marginBottom: 20,
  },
  countryPickerButton: {
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  countryPickerCloseButton: {
    width: 20,
    height: 20,
  },
  submitButton: {
    width: '100%',
  },
});

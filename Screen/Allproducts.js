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
  FlatList,
  Image,
  Modal,
  Animated,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Waterdrop from '../Waterdropds';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
function Allproducts({
  navigation,
  maxStars = 5,
  defaultRating = 0,
  onChangeRating,
  disabled = false,
  route,
}) {
  // const {data} = route.params;
  // console.log('item', data);
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
  const datas = [
    {
      name: 'Thai Body Massage ',
      image: require('../assets/high1.webp'),
    },
    {
      name: 'All Massage Deals ',
      image: require('../assets/high2.webp'),
    },
    {
      name: 'Fully Body Massage',
      image: require('../assets/high1.webp'),
    },

    {
      name: 'Couple Massage',
      image: require('../assets/high2.webp'),
    },
    {
      name: 'Ayurvedic Massage',
      image: require('../assets/high3.webp'),
    },
  ];
  const {width} = Dimensions.get('window');
  const buttonWidth = width * 1;

  const {height} = Dimensions.get('window');
  const componentHeight = height * 0.65; // 50% o

  const [Search, setSearch] = useState('');

  const [rating, setRating] = useState(defaultRating);

  const handleRating = value => {
    if (disabled) {
      setRating(value);
      onChangeRating && onChangeRating(value);
    }
  };

  const renderStar = value => {
    const isFilled = value <= rating;

    return (
      <TouchableOpacity onPress={() => handleRating(value)} key={value}>
        <Icon
          name={isFilled ? 'star' : 'star-outline'}
          size={24}
          color={isFilled ? 'black' : 'black'}
        />
      </TouchableOpacity>
    );
  };

  const stars = [];
  for (let i = 1; i <= maxStars; i++) {
    stars.push(renderStar(i));
  }
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const handleModal = () => {
    setModalVisible(() => !modalVisible);
    setCategory(false);
    setAll(true);
  };
  const handleModal1 = () => {
    setModalVisible1(() => !modalVisible1);
    setCategory(true);
  };
  const [All, setAll] = useState(true);
  const [high, sethigh] = useState(false);
  const [low, setlow] = useState(false);
  const [acsending, setacsending] = useState(false);
  const [Category, setCategory] = useState(false);
  const onpress6 = () => {
    setAll(true);
    sethigh(false);
    setlow(false);
    setacsending(false);
    setCategory(false);
  };
  const onpress1 = () => {
    setAll(false);
    sethigh(false);
    setlow(false);
    setacsending(false);
    setCategory(true);
  };
  const onpresss = () => {
    setAll(false);
    sethigh(true);
    setlow(false);
    setacsending(false);
    setCategory(false);

    setModalVisible(() => !modalVisible);
  };
  const onpresss1 = () => {
    setAll(false);
    sethigh(false);
    setlow(true);
    setacsending(false);
    setCategory(false);

    setModalVisible(() => !modalVisible);
  };
  const onpresss2 = () => {
    setAll(false);
    sethigh(false);
    setlow(false);
    setacsending(true);
    setModalVisible(() => !modalVisible);
  };

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

  console.log("import axios from 'axios';", category);

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

  return (
    // <View style={{flex: 1, backgroundColor: interpolatedColor}}>
    <View style={{flex: 1, backgroundColor: '#ffff'}}>
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
          All Products{' '}
        </Text>
      </View>

      {/* <View style={{flexDirection: 'row'}}>
          <View style={styles.inputView}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TextInput
                value={Search}
                keyboardType="name-phone-pad"
                onChangeText={Search => setSearch(Search)}
                placeholder="Search  *"
                placeholderTextColor="black"
                // style={styles.input}
              />
              <FontAwesome
                name="search"
                size={20}
                style={{margin: 10}}
                color="black"
              />
            </View>
          </View>
        </View> */}
      <View showsHorizontalScrollIndicator={false} horizontal={true}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
          }}>
          {/* <TouchableOpacity onPress={() => onpress6()}>
            <View style={[styles.added]}>
              <Text style={styles.added2}>All</Text>
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => handleModal1()}>
            <View
              style={[
                styles.added,
                {flexDirection: 'row', alignItems: 'center'},
              ]}>
              <Text style={styles.added2}>Category</Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={20}
                style={{paddingLeft: 8}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleModal()}>
            <View
              style={[
                styles.added,
                {flexDirection: 'row', alignItems: 'center'},
              ]}>
              <Text style={styles.added2}>Sort</Text>
              <MaterialCommunityIcons
                name="sort-ascending"
                size={20}
                style={{paddingLeft: 8}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[
                styles.added,
                {flexDirection: 'row', alignItems: 'center'},
              ]}>
              <Text style={styles.added2}>Price</Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={20}
                style={{paddingLeft: 8}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Product  */}
      <ScrollView>
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
                    <Text style={styles.spatitle5}>{item.offer}%&nbsp;OFF</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* {All ? (
          <>
            <View>
              <FlatList
                data={data}
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
                      onPress={() =>
                        navigation.navigate('Productdescription', {item})
                      }>
                      <View style={styles.mnb}>
                        <Image
                          style={{
                            height: 200,
                            width: '100%',
                            borderRadius: 10,
                            alignSelf: 'center',
                          }}
                          source={{
                            uri: `http://192.168.1.19:8000/Vendor/${item?.spaimage1}`,
                          }}
                        />
                        <View>
                          <View
                            style={{marginLeft: 5, marginTop: 5, padding: 5}}>
                            <Text
                              style={{
                                fontSize: 13,
                                fontWeight: '800',
                                color: 'black',
                                width: 200,
                              }}>
                              {item?.businessName}
                            </Text>

                            <View style={{flexDirection: 'row'}}>
                              <View>
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
                                    (item?.basicprice * item?.mindiscount) /
                                      100}
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
                            <View>
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
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </>
        ) : (
          <></>
        )}
        {Category ? (
          <>
            <View>
              <FlatList
                data={data}
                contentContainerStyle={{
                  flexGrow: 1,
                  paddingTop: 10,
                }}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                numColumns={1}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity>
                      <View style={styles.mnb}>
                        <Image
                          style={{
                            height: 200,
                            width: '100%',
                            borderRadius: 10,
                            alignSelf: 'center',
                          }}
                          source={item.image}
                        />
                        <View>
                          <View
                            style={{marginLeft: 10, marginTop: 5, padding: 5}}>
                            <Text
                              style={{
                                fontSize: 13,
                                fontWeight: '800',
                                color: 'black',
                                width: 200,
                              }}>
                              {item.name}
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                              <View>
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
                                  Bangalore
                                </Text>
                              </View>
                              <View>
                                <Text
                                  style={{
                                    fontSize: 15,
                                    fontWeight: '800',
                                    color: 'black',
                                    textDecorationLine: 'line-through',
                                  }}>
                                  <FontAwesome
                                    name="rupee"
                                    size={15}
                                    color="black"
                                  />{' '}
                                  2800
                                </Text>
                              </View>
                              <View>
                                <Text
                                  style={{
                                    fontSize: 15,
                                    fontWeight: '800',
                                    color: 'black',
                                    marginLeft: 10,
                                  }}>
                                  <FontAwesome
                                    name="rupee"
                                    size={15}
                                    color="black"
                                  />{' '}
                                  2400
                                </Text>
                              </View>
                            </View>
                            <View>
                              <StarRating
                                disabled={true}
                                maxStars={5}
                                rating={starCount}
                                selectedStar={rating =>
                                  onStarRatingPress(rating)
                                }
                                starSize={15}
                                fullStarColor={'black'}
                                starStyle={{marginHorizontal: 10}}
                              />
                              <View
                                style={{
                                  fontSize: 5,
                                  fontWeight: '800',
                                  color: 'black',
                                  flexDirection: 'row',
                                }}>
                                {stars}
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </>
        ) : (
          <></>
        )}
        {high ? (
          <>
            <View>
              <FlatList
                data={data}
                contentContainerStyle={{
                  flexGrow: 1,
                  paddingTop: 10,
                }}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                numColumns={1}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity>
                      <View style={styles.mnb}>
                        <Image
                          style={{
                            height: 200,
                            width: '100%',
                            borderRadius: 10,
                            alignSelf: 'center',
                          }}
                          source={item.image}
                        />
                        <View>
                          <View
                            style={{marginLeft: 10, marginTop: 5, padding: 5}}>
                            <Text
                              style={{
                                fontSize: 13,
                                fontWeight: '800',
                                color: 'black',
                                width: 200,
                              }}>
                              {item.name}
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                              <View>
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
                                  Bangalore
                                </Text>
                              </View>
                              <View>
                                <Text
                                  style={{
                                    fontSize: 15,
                                    fontWeight: '800',
                                    color: 'black',
                                    textDecorationLine: 'line-through',
                                  }}>
                                  <FontAwesome
                                    name="rupee"
                                    size={15}
                                    color="black"
                                  />{' '}
                                  2800
                                </Text>
                              </View>
                              <View>
                                <Text
                                  style={{
                                    fontSize: 15,
                                    fontWeight: '800',
                                    color: 'black',
                                    marginLeft: 10,
                                  }}>
                                  <FontAwesome
                                    name="rupee"
                                    size={15}
                                    color="black"
                                  />{' '}
                                  2400
                                </Text>
                              </View>
                            </View>
                            <View>
                              <StarRating
                                disabled={true}
                                maxStars={5}
                                rating={starCount}
                                selectedStar={rating =>
                                  onStarRatingPress(rating)
                                }
                                starSize={15}
                                fullStarColor={'black'}
                                starStyle={{marginHorizontal: 10}}
                              />
                              <View
                                style={{
                                  fontSize: 5,
                                  fontWeight: '800',
                                  color: 'black',
                                  flexDirection: 'row',
                                }}>
                                {stars}
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </>
        ) : (
          <></>
        )}
        {low ? (
          <>
            <View>
              <FlatList
                data={data}
                contentContainerStyle={{
                  flexGrow: 1,
                  paddingTop: 10,
                }}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                numColumns={1}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity>
                      <View style={styles.mnb}>
                        <Image
                          style={{
                            height: 200,
                            width: '100%',
                            borderRadius: 10,
                            alignSelf: 'center',
                          }}
                          source={item.image}
                        />
                        <View>
                          <View
                            style={{marginLeft: 10, marginTop: 5, padding: 5}}>
                            <Text
                              style={{
                                fontSize: 13,
                                fontWeight: '800',
                                color: 'black',
                                width: 200,
                              }}>
                              {item.name}
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                              <View>
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
                                  Bangalore
                                </Text>
                              </View>
                              <View>
                                <Text
                                  style={{
                                    fontSize: 15,
                                    fontWeight: '800',
                                    color: 'black',
                                    textDecorationLine: 'line-through',
                                  }}>
                                  <FontAwesome
                                    name="rupee"
                                    size={15}
                                    color="black"
                                  />{' '}
                                  2800
                                </Text>
                              </View>
                              <View>
                                <Text
                                  style={{
                                    fontSize: 15,
                                    fontWeight: '800',
                                    color: 'black',
                                    marginLeft: 10,
                                  }}>
                                  <FontAwesome
                                    name="rupee"
                                    size={15}
                                    color="black"
                                  />{' '}
                                  2400
                                </Text>
                              </View>
                            </View>
                            <View>
                              <StarRating
                                disabled={true}
                                maxStars={5}
                                rating={starCount}
                                selectedStar={rating =>
                                  onStarRatingPress(rating)
                                }
                                starSize={15}
                                fullStarColor={'black'}
                                starStyle={{marginHorizontal: 10}}
                              />
                              <View
                                style={{
                                  fontSize: 5,
                                  fontWeight: '800',
                                  color: 'black',
                                  flexDirection: 'row',
                                }}>
                                {stars}
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </>
        ) : (
          <></>
        )}
        {acsending ? (
          <>
            <View>
              <FlatList
                data={data}
                contentContainerStyle={{
                  flexGrow: 1,
                  paddingTop: 10,
                }}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                numColumns={1}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity>
                      <View style={styles.mnb}>
                        <Image
                          style={{
                            height: 200,
                            width: '100%',
                            borderRadius: 10,
                            alignSelf: 'center',
                          }}
                          source={item.image}
                        />
                        <View>
                          <View
                            style={{marginLeft: 10, marginTop: 5, padding: 5}}>
                            <Text
                              style={{
                                fontSize: 13,
                                fontWeight: '800',
                                color: 'black',
                                width: 200,
                              }}>
                              {item.name}
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                              <View>
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
                                  Bangalore
                                </Text>
                              </View>
                              <View>
                                <Text
                                  style={{
                                    fontSize: 15,
                                    fontWeight: '800',
                                    color: 'black',
                                    textDecorationLine: 'line-through',
                                  }}>
                                  <FontAwesome
                                    name="rupee"
                                    size={15}
                                    color="black"
                                  />{' '}
                                  2800
                                </Text>
                              </View>
                              <View>
                                <Text
                                  style={{
                                    fontSize: 15,
                                    fontWeight: '800',
                                    color: 'black',
                                    marginLeft: 10,
                                  }}>
                                  <FontAwesome
                                    name="rupee"
                                    size={15}
                                    color="black"
                                  />{' '}
                                  2400
                                </Text>
                              </View>
                            </View>
                            <View>
                              <StarRating
                                disabled={true}
                                maxStars={5}
                                rating={starCount}
                                selectedStar={rating =>
                                  onStarRatingPress(rating)
                                }
                                starSize={15}
                                fullStarColor={'black'}
                                starStyle={{marginHorizontal: 10}}
                              />
                              <View
                                style={{
                                  fontSize: 5,
                                  fontWeight: '800',
                                  color: 'black',
                                  flexDirection: 'row',
                                }}>
                                {stars}
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </>
        ) : (
          <></>
        )} */}
      </ScrollView>
      <Modal
        animated
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        onBackButtonPress={() => setIsModalVisible1(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.share123}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{color: '#b41b12', fontWeight: '800', fontSize: 17}}>
                  Sort By
                </Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(() => !modalVisible)}>
                  <AntDesign
                    name="closecircle"
                    color="black"
                    size={25}
                    style={{margin: 10}}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => onpresss1()}>
                <View>
                  <Text
                    style={[
                      styles.added2,
                      {
                        textAlign: 'left',
                        padding: 5,
                        color: 'black',
                        fontWeight: '700',
                      },
                    ]}>
                    {' '}
                    Price By Low to High
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onpresss()}>
                <View>
                  <Text
                    style={[
                      styles.added2,
                      {
                        textAlign: 'left',
                        padding: 5,
                        color: 'black',
                        fontWeight: '700',
                      },
                    ]}>
                    {' '}
                    Price By High to Low
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onpresss2()}>
                <View>
                  <Text
                    style={[
                      styles.added2,
                      {
                        textAlign: 'left',
                        padding: 5,
                        color: 'black',
                        fontWeight: '700',
                      },
                    ]}>
                    {' '}
                    Product Name By A-Z
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animated
        animationType="fade"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          setModalVisible1(!modalVisible1);
        }}
        onBackButtonPress={() => setIsModalVisible1(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.share123}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{color: '#b41b12', fontWeight: '800', fontSize: 15}}>
                  Category
                </Text>
                <TouchableOpacity
                  onPress={() => setModalVisible1(() => !modalVisible1)}>
                  <AntDesign
                    name="closecircle"
                    color="black"
                    size={25}
                    style={{margin: 10}}
                  />
                </TouchableOpacity>
              </View>
              <FlatList
                data={category}
                contentContainerStyle={{
                  flexGrow: 1,
                  paddingTop: 10,
                }}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                numColumns={1}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity>
                      <Text
                        style={[
                          styles.added2,
                          {
                            textAlign: 'left',
                            padding: 5,
                            color: 'black',
                            fontSize: 13,
                            fontWeight: '600',
                          },
                        ]}>
                        {item?.catname}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Allproducts;
const styles = StyleSheet.create({
  mnb: {
    // backgroundColor: 'white',
    margin: 10,
    padding: 5,
    borderRadius: 20,
    // flexDirection: 'row',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '400',
    // paddingLeft: 30,
    color: '#b41b12',
    width: 200,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 10,
  },
  ratingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10,
  },
  inputView: {
    width: '95%',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    // justifyContent: 'center',
    padding: 1,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    margin: 5,
    borderWidth: 1,
  },
  input: {
    color: '#b41b12',
    fontWeight: '400',
    fontSize: 15,
  },
  added: {
    borderWidth: 0.5,
    borderColor: '#808080',
    backgroundColor: '#ffff',
    borderRadius: 20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 10,
    // borderColor: onpress4 === true ? '#0995fe' : 'transparent',
  },
  added2: {
    color: '#121111c7',
    textAlign: 'center',
    fontSize: 14,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 0,
    padding: 20,
    shadowColor: '#000',
    // shadowOffset: {
    //   width: 2,
    //   height: 2,
    // },
    shadowOpacity: 0.16,
    shadowRadius: 10,
    elevation: 10,
    width: '100%',
    borderRadius: 10,
  },

  productb: {
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 12,
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
    fontSize: 13,
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

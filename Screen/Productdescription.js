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
  FlatList,
  Modal,
  Linking,
} from 'react-native';
import Waterdrop from '../Waterdropds';
import RNBounceable from '@freakycoder/react-native-bounceable';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageViewer from 'react-native-image-zoom-viewer';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
const Editprofile = ({
  navigation,
  maxStars = 5,
  defaultRating = 0,
  onChangeRating,
  disabled = false,
  route,
}) => {
  // const {item} = route.params;
  // console.log("item===>",item);
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
  const [Deals, setDeals] = useState(true);
  const [About, setAbout] = useState(false);
  const [Gallery, setGallery] = useState(false);
  const [Parking, setParking] = useState(false);
  const [Reviews, setReviews] = useState(false);
  const [acc, setacc] = useState(true);
  const [acc1, setacc1] = useState(false);
  const [acc2, setacc2] = useState(false);
  const [acc3, setacc3] = useState(false);
  const [acc4, setacc4] = useState(false);
  const onpresss = () => {
    setDeals(true);
    setAbout(false);
    setGallery(false);
    setParking(false);
    setReviews(false);
  };
  const onpresss1 = () => {
    setDeals(false);
    setAbout(true);
    setGallery(false);
    setParking(false);
    setReviews(false);
  };
  const onpresss2 = () => {
    setDeals(false);
    setAbout(false);
    setGallery(true);
    setParking(false);
    setReviews(false);
  };
  const onpresss3 = () => {
    setDeals(false);
    setAbout(false);
    setGallery(false);
    setParking(true);
    setReviews(false);
  };
  const onpresss4 = () => {
    setDeals(false);
    setAbout(false);
    setGallery(false);
    setParking(false);
    setReviews(true);
  };
  const {width} = Dimensions.get('window');
  const buttonWidth = width * 1;

  const {height} = Dimensions.get('window');
  const componentHeight = height * 0.4; // 50% o

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
          size={15}
          color={isFilled ? 'black' : 'black'}
        />
      </TouchableOpacity>
    );
  };

  const stars = [];
  for (let i = 1; i <= maxStars; i++) {
    stars.push(renderStar(i));
  }

  const [modalVisible1, setModalVisible1] = useState(false);

  const handleOpenModal1 = () => {
    setModalVisible1(true);
  };

  const handleCloseModal1 = () => {
    setModalVisible1(false);
  };
  const [modalVisible, setModalVisible] = useState(false);

  const handleModal = () => {
    setModalVisible(() => !modalVisible);
  };
  const [Message, setMessage] = useState('');
  const calculateTextInputHeight = () => {
    const lineHeight = 25; // You can adjust this value based on the line height of your TextInput
    const lines = Math.max(2, Message.split('\n').length);
    return lineHeight * lines;
  };
  const Separator = () => <View style={styles.separator} />;

  const openMapsDirections = address => {
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&&destination=${address}`;

    Linking.openURL(mapsUrl).catch(err =>
      console.error('An error occurred', err),
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
    outputRange: ['rgb(239, 235, 216)', 'rgb(248, 248, 255)'],
  });

  const images = [
    {uri: 'http://localhost:8000/Vendor/1693631845514_Spin.jfif'},
    {uri: 'http://localhost:8000/Vendor/1693631845519_Lakmetherapi.jfif'},
    {uri: 'http://localhost:8000/Vendor/1693631845519_Spin.jfif'},
    {uri: 'http://localhost:8000/Vendor/1693631845519_Lakmetherapi.jfif'},
  ];

  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fffff'}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <ImageBackground
        style={{width: buttonWidth, height: componentHeight}}
        resizeMode={'stretch'}
        source={require('../assets/high1.webp')}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo
              name="chevron-left"
              color="white"
              size={25}
              style={{marginTop: 36}}
            />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 18,
              fontWeight: '800',
              color: 'white',
              paddingLeft: 10,
              marginTop: 36,
            }}>
            Unisex Salon
          </Text>
        </View>

        <View
          style={{
            position: 'relative',
          }}>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              marginTop: 190,
            }}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  onpresss();
                  setacc(true);
                  setacc1(false);
                  setacc2(false);
                  setacc3(false);
                  setacc4(false);
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: '700',
                    color: '#ffff',
                    borderWidth: 1,
                    borderColor: acc ? 'red' : '#ffff',
                    padding: 5,
                    borderRadius: 5,
                  }}>
                  Deals
                </Text>
                {/* {Deals ? (
                  <>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 20,
                        textAlign: 'center',
                      }}></Text>
                  </>
                ) : (
                  <></>
                )} */}
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  onpresss1();
                  setacc(false);
                  setacc1(true);
                  setacc2(false);
                  setacc3(false);
                  setacc4(false);
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: '700',
                    color: '#ffff',
                    borderWidth: 1,
                    borderColor: acc1 ? 'red' : '#ffff',
                    padding: 5,
                    borderRadius: 5,
                  }}>
                  About
                </Text>
                {/* {About ? (
                  <>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 20,
                        textAlign: 'center',
                      }}></Text>
                  </>
                ) : (
                  <></>
                )} */}
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  onpresss2();
                  setacc(false);
                  setacc1(false);
                  setacc2(true);
                  setacc3(false);
                  setacc4(false);
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: '700',
                    color: '#ffff',
                    borderWidth: 1,
                    borderColor: acc2 ? 'red' : '#ffff',
                    padding: 5,
                    borderRadius: 5,
                  }}>
                  Gallery
                </Text>
                {/* {Gallery ? (
                  <>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 20,
                        textAlign: 'center',
                      }}></Text>
                  </>
                ) : (
                  <></>
                )} */}
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  onpresss3();
                  setacc(false);
                  setacc1(false);
                  setacc2(false);
                  setacc3(true);
                  setacc4(false);
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: '700',
                    color: '#ffff',
                    borderWidth: 1,
                    borderColor: acc3 ? 'red' : '#ffff',
                    padding: 5,
                    borderRadius: 5,
                  }}>
                  Parking
                </Text>
                {/* {Parking ? (
                  <>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 20,
                        textAlign: 'center',
                      }}></Text>
                  </>
                ) : (
                  <></>
                )} */}
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  onpresss4();
                  setacc(false);
                  setacc1(false);
                  setacc2(false);
                  setacc3(false);
                  setacc4(true);
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontWeight: '700',
                    color: '#ffff',
                    borderWidth: 1,
                    borderColor: acc4 ? 'red' : '#ffff',
                    padding: 5,
                    borderRadius: 5,
                  }}>
                  Reviews
                </Text>
                {/* {Reviews ? (
                  <>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 20,
                        textAlign: 'center',
                      }}></Text>
                  </>
                ) : (
                  <></>
                )} */}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
      <TouchableOpacity
      // onPress={() => openMapsDirections(item?.address)}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: '500',
            color: 'black',
            paddingLeft: 10,
            paddingTop: 10,
          }}>
          Bangalore Rajaji Nagar
        </Text>
      </TouchableOpacity>
      {Deals ? (
        <>
          <ScrollView
            style={{
              borderRadius: 10,
            }}>
            <View
              style={{
                // backgroundColor: '#f0f0f0',
                margin: 3,
                padding: 5,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '700',
                  color: 'black',
                  // textAlign: 'center',
                }}>
                Hair Cut (20 mins)+ Steam (20 mins)+ Welcome Drinks (10 mins)
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '500',
                    color: 'black',
                    padding: 5,
                  }}>
                  Valid for&nbsp;:&nbsp;
                  <Text
                    style={{
                      fontSize: 13,
                      color: 'red',
                      padding: 5,
                    }}>
                    Person
                  </Text>
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '500',
                    color: 'black',
                    padding: 5,
                  }}>
                  Timing&nbsp;:&nbsp;
                  <Text
                    style={{
                      fontSize: 13,
                      color: 'red',
                      padding: 5,
                    }}>
                    6:00 AM - 6:00 PM
                  </Text>
                </Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => handleOpenModal1()}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '500',
                      color: 'black',
                      padding: 5,
                    }}>
                    Valid on&nbsp;:&nbsp;
                    <Text
                      style={{
                        fontSize: 13,
                        color: 'red',
                        padding: 5,
                      }}>
                      click here to check
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.spatitle3}>₹2344</Text>
                  <Text style={styles.spatitle4}>₹3002</Text>
                  <Text style={styles.spatitle5}>20%&nbsp;OFF</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Bookslot')}>
                    <Entypo
                      name="plus"
                      color="black"
                      size={25}
                      style={{margin: 1}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Separator />
          </ScrollView>
        </>
      ) : (
        <></>
      )}
      {About ? (
        <>
          <ScrollView
            style={{
              margin: 5,
              // backgroundColor: '#f0f0f0',
              // marginTop: -150,
              borderRadius: 10,
              padding: 10,
            }}>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 14,
                  fontWeight: '400',
                  textAlign: 'justify',
                }}>
                {'        '}Contrary to popular belief, Lorem Ipsum is not
                simply random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old. Richard
                McClintock, a Latin professor at Hampden-Sydney College in
                Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                comes from a line in section 1.10.32. The standard chunk of
                Lorem Ipsum used since the 1500s is reproduced below for those
                interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                Bonorum et Malorum" by Cicero are also reproduced in their exact
                original form, accompanied by English versions from the 1914
                translation by H. Rackham.
              </Text>
            </View>
          </ScrollView>
        </>
      ) : (
        <></>
      )}
      {Gallery ? (
        <>
          <ScrollView
            style={{
              margin: 5,
              // backgroundColor: '#f0f0f0',
              // marginTop: -150,
              borderRadius: 10,
              padding: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{width: '50%', height: 200}}
                resizeMode={'cover'}
                source={require('../assets/photo1.webp')}
              />

              <Image
                style={{width: '50%', height: 200}}
                resizeMode={'cover'}
                source={require('../assets/pinkreg.jpg')}
              />
            </View>
            <Image
              style={{width: '100%', height: 130}}
              resizeMode={'cover'}
              source={require('../assets/pinkspa.jpg')}
            />
            <Image
              style={{width: '100%', height: 200}}
              resizeMode={'cover'}
              source={require('../assets/pinkreg.jpg')}
            />
          </ScrollView>
        </>
      ) : (
        <></>
      )}
      {Parking ? (
        <>
          <ScrollView
            style={{
              margin: 5,
              borderRadius: 10,
              padding: 10,
            }}>
            <View
              style={{
                padding: 5,
                borderRadius: 10,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <AntDesign name="car" color="black" size={40} />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    paddingLeft: 21,
                  }}>
                  Four Wheeler Parking
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialCommunityIcons
                  name="motorbike"
                  color="black"
                  size={40}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 14,
                    paddingLeft: 21,
                  }}>
                  Two Wheeler Parking
                </Text>
              </View>
            </View>
          </ScrollView>
        </>
      ) : (
        <></>
      )}
      {Reviews ? (
        <>
          <View
            style={{
              margin: 5,

              borderRadius: 10,
              padding: 8,
            }}>
            <TouchableOpacity
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              activeOpacity={1}
              onPress={() => handleModal()}>
              <Animated.View style={[{transform: [{scale: buttonScale}]}]}>
                <Text
                  style={{
                    color: '#ffff',
                    fontSize: 15,
                    borderWidth: 1,
                    padding: 5,
                    width: 120,
                    backgroundColor: 'red',
                    borderColor: 'red',
                    borderRadius: 5,
                  }}>
                  + Add Review{' '}
                </Text>
              </Animated.View>
            </TouchableOpacity>
          </View>
          <ScrollView
            style={{
              borderRadius: 10,
              padding: 8,
            }}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: '700'}}>
              Reviews{' '}
            </Text>
            <View
              style={{
                padding: 10,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View>
                  <Text
                    style={{
                      backgroundColor: '#DBE9FA',
                      borderRadius: 50,
                      height: 50,
                      width: 50,
                      padding: 9,
                      textAlign: 'center',
                      fontSize: 20,
                      fontWeight: '900',
                      color: 'black',
                    }}>
                    S
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={{marginLeft: 10}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '600',
                        color: 'black',
                      }}>
                      Sam
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: '700',
                        color: 'black',
                      }}>
                      {moment(new Date()).format('DD/MM/YYYY')}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    fontSize: 5,
                    fontWeight: '700',
                    flexDirection: 'row',
                    position: 'absolute',
                    right: 0,
                  }}>
                  {stars}
                </View>
              </View>

              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  margin: 5,
                }}>
                Using the styles from above, set start and end like this to make
                the gradient go from left to right, instead of from top to
                bottom.
              </Text>
            </View>
            <Separator />
            <View
              style={{
                padding: 10,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View>
                  <Text
                    style={{
                      backgroundColor: '#DBE9FA',
                      borderRadius: 50,
                      height: 50,
                      width: 50,
                      padding: 9,
                      textAlign: 'center',
                      fontSize: 20,
                      fontWeight: '900',
                      color: 'black',
                    }}>
                    S
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={{marginLeft: 10}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '600',
                        color: 'black',
                      }}>
                      Sam
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: '700',
                        color: 'black',
                      }}>
                      {moment(new Date()).format('DD/MM/YYYY')}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    fontSize: 5,
                    fontWeight: '700',
                    flexDirection: 'row',
                    position: 'absolute',
                    right: 0,
                  }}>
                  {stars}
                </View>
              </View>

              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  margin: 5,
                }}>
                Using the styles from above, set start and end like this to make
                the gradient go from left to right, instead of from top to
                bottom.
              </Text>
            </View>
            <Separator />
            <View
              style={{
                padding: 10,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View>
                  <Text
                    style={{
                      backgroundColor: '#DBE9FA',
                      borderRadius: 50,
                      height: 50,
                      width: 50,
                      padding: 9,
                      textAlign: 'center',
                      fontSize: 20,
                      fontWeight: '900',
                      color: 'black',
                    }}>
                    S
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={{marginLeft: 10}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '600',
                        color: 'black',
                      }}>
                      Sam
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: '700',
                        color: 'black',
                      }}>
                      {moment(new Date()).format('DD/MM/YYYY')}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    fontSize: 5,
                    fontWeight: '700',
                    flexDirection: 'row',
                    position: 'absolute',
                    right: 0,
                  }}>
                  {stars}
                </View>
              </View>

              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  margin: 5,
                }}>
                Using the styles from above, set start and end like this to make
                the gradient go from left to right, instead of from top to
                bottom.
              </Text>
            </View>

            <Separator />
            <View
              style={{
                padding: 10,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View>
                  <Text
                    style={{
                      backgroundColor: '#DBE9FA',
                      borderRadius: 50,
                      height: 50,
                      width: 50,
                      padding: 9,
                      textAlign: 'center',
                      fontSize: 20,
                      fontWeight: '900',
                      color: 'black',
                    }}>
                    S
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View style={{marginLeft: 10}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '600',
                        color: 'black',
                      }}>
                      Sam
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: '700',
                        color: 'black',
                      }}>
                      {moment(new Date()).format('DD/MM/YYYY')}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    fontSize: 5,
                    fontWeight: '700',
                    flexDirection: 'row',
                    position: 'absolute',
                    right: 0,
                  }}>
                  {stars}
                </View>
              </View>

              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  margin: 5,
                }}>
                Using the styles from above, set start and end like this to make
                the gradient go from left to right, instead of from top to
                bottom.
              </Text>
            </View>
          </ScrollView>
        </>
      ) : (
        <></>
      )}
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
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'black', fontSize: 15, fontWeight: '700'}}>
                  Write a Review
                </Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(() => !modalVisible)}>
                  <AntDesign
                    name="closecircle"
                    color="black"
                    size={25}
                    style={{margin: 5}}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  fontSize: 5,
                  fontWeight: '800',
                  color: '#e22217',
                  flexDirection: 'row',
                }}>
                {stars}
              </View>
              <View style={styles.inputView1}>
                <TextInput
                  value={Message}
                  keyboardType="name-phone-pad"
                  multiline={true}
                  // numberOfLines={10} // You can remove this line
                  onChangeText={newMessage => setMessage(newMessage)} // Use a different parameter name to avoid shadowing
                  placeholder="Add Review"
                  placeholderTextColor="black"
                  textAlignVertical="top"
                  style={[
                    styles.input,
                    {
                      padding: 10,
                    },
                  ]}
                />
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => setModalVisible(() => !modalVisible)}>
                  <Text
                    style={[
                      styles.button,
                      {
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 15,
                        fontWeight: '900',
                      },
                    ]}>
                    Submit Review{' '}
                  </Text>
                </TouchableOpacity>
              </View>
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
              <TouchableOpacity
                onPress={() => setModalVisible1(() => !modalVisible1)}
                style={{alignSelf: 'flex-end'}}>
                <AntDesign
                  name="closecircle"
                  color="black"
                  size={25}
                  style={{margin: 10}}
                />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  padding: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',

                    paddingLeft: 3,
                  }}>
                  <MaterialCommunityIcons
                    name="checkbox-blank-outline"
                    color="black"
                    size={18}
                    style={{marginTop: 8}}
                  />
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      fontWeight: '800',
                      marginTop: 5,
                      marginLeft: 5,
                    }}>
                    Sunday
                  </Text>
                </View>
                <View style={{flexDirection: 'row', paddingLeft: 3}}>
                  <MaterialCommunityIcons
                    name="checkbox-blank-outline"
                    color="black"
                    size={18}
                    style={{marginTop: 8}}
                  />
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      fontWeight: '800',
                      marginTop: 5,
                      marginLeft: 5,
                    }}>
                    Monday
                  </Text>
                </View>
                <View style={{flexDirection: 'row', paddingLeft: 3}}>
                  <MaterialCommunityIcons
                    name="checkbox-blank-outline"
                    color="black"
                    size={18}
                    style={{marginTop: 8}}
                  />
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      fontWeight: '800',
                      marginTop: 5,
                      marginLeft: 5,
                    }}>
                    Tuesday
                  </Text>
                </View>
                <View style={{flexDirection: 'row', paddingLeft: 3}}>
                  <MaterialCommunityIcons
                    name="checkbox-blank-outline"
                    color="black"
                    size={18}
                    style={{marginTop: 8}}
                  />
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      fontWeight: '800',
                      marginTop: 5,
                      marginLeft: 5,
                    }}>
                    Wednesday
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <MaterialCommunityIcons
                    name="checkbox-blank-outline"
                    color="black"
                    size={18}
                    style={{marginTop: 8}}
                  />
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      fontWeight: '800',
                      marginTop: 5,
                      marginLeft: 5,
                    }}>
                    Thrusday
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <MaterialCommunityIcons
                    name="checkbox-blank-outline"
                    color="black"
                    size={18}
                    style={{marginTop: 8}}
                  />
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      fontWeight: '800',
                      marginTop: 5,
                      marginLeft: 5,
                    }}>
                    Friday
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Editprofile;
const styles = StyleSheet.create({
  inputView: {
    // width: '90%',
    // height: 100,
    // backgroundColor: 'white',
    // borderBottomLeftRadius: 10,
    // borderTopLeftRadius: 2,
    // borderBottomRightRadius: 10,
    // borderTopRightRadius: 10,
    // height: 50,
    marginBottom: 30,
    justifyContent: 'center',
    padding: 20,
    shadowColor: '#e22217',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginLeft: 20,
    marginTop: 10,
  },
  input: {
    color: 'gray',
    fontWeight: '400',
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 5,
    height: 100,
  },
  button: {
    backgroundColor: '#e22217', // Replace with your desired button color
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginLeft: 22,
    marginRight: 22,
  },
  buttonText: {
    color: 'white', // Replace with your desired text color
    fontSize: 13,
    fontWeight: 'bold',
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
    padding: 10,
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
  separator: {
    width: '90%',
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
  inputView1: {
    marginLeft: 20,
    margin: 10,
    marginRight: 20,
    // borderBottomWidth: 0.5,
    // borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  inputView1: {
    paddingBottom: 10,
    paddingTop: 5,
    marginRight: 20,
    // borderBottomWidth: 0.5,
    // borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  spatitle1: {
    fontSize: 15,
    color: '#212121',
  },
  spatitle2: {
    fontSize: 14,
  },
  spatitle3: {
    fontSize: 20,
    fontWeight: '800',
    color: '#212121',
    paddingTop: 5,
    // paddingBottom: 3,
  },
  spatitle4: {
    paddingLeft: 10,
    textDecorationLine: 'line-through',
    color: '#2121212',
    paddingTop: 5,
    paddingBottom: 3,
  },
  spatitle5: {
    marginLeft: 10,
    color: '#ffff',
    padding: 5,

    backgroundColor: 'red',
  },
});

import {StyleSheet, Text, View, ScrollView,TouchableOpacity, StatusBar} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
const Aboutus = ({navigation}) => {
  return (
    <View style={{flex: 1,backgroundColor:"#f0f0f0"}}>
        <StatusBar backgroundColor="#e22217" />
        <View
        style={{flexDirection: 'row', padding: 10, backgroundColor: '#e22217'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo
            name="chevron-left"
            color="white"
            size={25}
            // style={{margin: 10}}
          />
        </TouchableOpacity> 
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 15,
            marginLeft: 20,
            fontWeight:"800"
          }}>
     About Us
        </Text>
      </View>
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.head1}>About us</Text>
          <Text style={styles.head1d}>abc, xyz Taluk</Text>
          <Text style={styles.head1d}>
          Karnataka 562123
          </Text>
          <Text style={styles.head1d}>
          +91-985869433
          </Text>
          <Text style={styles.head1d}>
          example@gmail.com
          </Text>
        </View>

        
      </ScrollView>
    
    </View>
  );
};

export default Aboutus;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
borderRadius:20,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  head1: {
    fontSize: 18,
    fontWeight: '800',
    color: 'black',
    textAlign:"center"
  },
  head2: {
    fontSize: 15,
    fontWeight: '900',
    color: '#e22217',
    textAlign:'justify',
   
    
  },
  head1d:{
    fontSize: 14,
    fontWeight: '800',
    color: 'black',
    textAlign:"center"
  }
});

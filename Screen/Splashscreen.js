
import React, { useEffect, useState } from 'react'
import { View, Image, StatusBar,SafeAreaView  } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Splashscreen = ({navigation}) => {
    const [user, setuser] = useState({});
    useEffect(() => {
        retrieveData()           
      }, []);

    useEffect(() => {
        if (Object.keys(user).length > 0) {
            condition()
        }
    }, [user])
    

    const  retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('user');
          if (value !== null) {
            // We have data!!
            console.log(value);
            setuser(JSON.parse(value));
          }
          else{
            setTimeout(() => {
            navigation.navigate('Login');
        }, 3000);
          }
        } catch (error) {
         
        }
      };

      const condition = () => {
          console.log(user)
        if (Object.keys(user).length > 0) {
            setTimeout(() => {
            navigation.navigate('Tabs');
        }, 3000);
        }
        
      }
    
 
    return (
        <SafeAreaView  style={{flex:1, justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
             <StatusBar backgroundColor="grey" />
             <Image
            style={{width:'74%', height:110}}
            resizeMode={'stretch'}
            source={require('../assets/logo.jpg')}
          />
        </SafeAreaView >
    )
}

export default Splashscreen

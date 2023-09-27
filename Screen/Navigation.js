import {StyleSheet, Text, View, Linking} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splashscreen from './Splashscreen';
import Login from './Login';
import Register from './Register';
import Forgotpassword from './Forgotpassword';
import Home from './Home';
import Changepassword from './Changepassword';
import Verifyforgotpassword from './Verifyforgotpassword';
import Search from './Search';
import Category from './Category';
import Tabs from './Tabs';
import Profile from './Profile';
import Editprofile from './Editprofile';
import Allproducts from './Allproducts';
import Productdescription from './Productdescription';
import Bookslot from './Bookslot';
import Policy from './Policy';
import Contactus from './Contactus';
import Aboutus from './Aboutus';
import Customestatusbar from './Customestatusbar';
import CheckOut from './CheckOut';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Splashscreen">
        <Stack.Screen
          name="Splashscreen"
          component={Splashscreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Customestatusbar"
          component={Customestatusbar}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Aboutus"
          component={Aboutus}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Contactus"
          component={Contactus}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Policy"
          component={Policy}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Bookslot"
          component={Bookslot}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Productdescription"
          component={Productdescription}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Allproducts"
          component={Allproducts}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Editprofile"
          component={Editprofile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Category"
          component={Category}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verifyforgotpassword"
          component={Verifyforgotpassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Changepassword"
          component={Changepassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Forgotpassword"
          component={Forgotpassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CheckOut"
          component={CheckOut}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});

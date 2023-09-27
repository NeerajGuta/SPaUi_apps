import React, {useRef, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Animated, TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Screens
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import Category from './Category';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const [selectedIcon, setSelectedIcon] = useState('Home');

  const handleTabPress = ({route}) => {
    if (route.name === 'Home') {
      // Always show the name of the "Home" tab
      setSelectedIcon('Home');
    } else if (selectedIcon === route.name) {
      setSelectedIcon(null);
    } else {
      setSelectedIcon(route.name);
    }
  };

  const tabBarComponent = ({state, descriptors, navigation}) => {
    return (
      <Animated.View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#f1f1f1',
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const icons = {
            Home: 'home-outline',
            Profile: 'person-outline',
            Search: 'search-outline',
            Category: 'grid-outline',
          };
          const icons1 = {
            Home: 'home',
            Profile: 'person',
            Search: 'search',
            Category: 'grid',
          };
          const showName = selectedIcon === route.name;

          // Scale the focused tab
          const scale = isFocused ? {transform: [{scaleX: scaleValue}]} : {};

          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                handleTabPress({route});
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              }}
              style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 5,
                ...scale,
                // backgroundColor: isFocused ? '#e22217' : 'transparent',
                // borderRadius: isFocused ? 5 : 0, // Apply border radius conditionally
                // marginHorizontal: isFocused ? 5 : 0, // Apply margin conditionally
              }}>
              <Icon
                name={isFocused ? icons1[route.name] : icons[route.name]}
                size={23}
                color={isFocused ? '#e22217' : '#212121'}
                style={{
                  fontWeight: isFocused ? '700' : '600',
                }}
              />
              {/* {showName && ( */}
              <Text
                style={{
                  color: isFocused ? '#e22217' : '#212121',
                  marginLeft: 5,
                  fontSize: isFocused ? 12 : 12,
                  fontWeight: isFocused ? '600' : '600',
                  // backgroundColor: isFocused ? '#f5f5f5' : 'transparent',
                  padding: 4,
                  borderRadius: isFocused ? 5 : 0, // Apply border radius conditionally
                }}>
                {label}
              </Text>
              {/* )} */}
            </TouchableOpacity>
          );
        })}
      </Animated.View>
    );
  };

  return (
    <Tab.Navigator tabBar={props => tabBarComponent(props)}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default AppTabs;

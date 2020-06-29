import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BirthdayForm from './src/BirthdayForm';
import BirthdayList from './src/BirthdayList';
import NextBirthday from './src/NextBirthday';
import BirthdayProvider from './src/contexts/BirthdayProvider';

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const mainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Next Birthday" component={NextBirthday} />
    <Tab.Screen name="All Birthdays" component={BirthdayList} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <BirthdayProvider>
        <RootStack.Navigator mode="modal">
          <RootStack.Screen name="Birthday App" component={mainTabs} />
          <RootStack.Screen
            name="Birthday Form Modal"
            component={BirthdayForm}
          />
        </RootStack.Navigator>
      </BirthdayProvider>
    </NavigationContainer>
  );
};

export default App;

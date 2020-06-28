import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BirthdayForm from './src/BirthdayForm';
import BirthdayList from './src/BirthdayList';
import NextBirthday from './src/NextBirthday';
import BirthdayProvider from './src/contexts/BirthdayProvider';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BirthdayProvider>
        <Tab.Navigator>
          <Tab.Screen name="Next Birthday" component={NextBirthday} />
          <Tab.Screen name="All Birthdays" component={BirthdayList} />
          <Tab.Screen name="Add Birthday" component={BirthdayForm} />
        </Tab.Navigator>
      </BirthdayProvider>
    </NavigationContainer>
  );
};

export default App;

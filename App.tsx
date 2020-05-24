import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import BirthdayForm from './src/BirthdayForm';
import BirthdayList from './src/BirthdayList';
import BirthdayProvider from './src/contexts/BirthdayProvider';

const App = () => {
  return (
    <BirthdayProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <BirthdayForm />
          <BirthdayList />
        </ScrollView>
      </SafeAreaView>
    </BirthdayProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;

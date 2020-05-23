import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import BirthdayForm from './src/BirthdayForm';
import BirthdayList from './src/BirthdayList';
import BirthdaysContext, {Birthday} from './src/contexts/BirthdaysContext';

const App = () => {
  const birthdaysHook = useState<Birthday[]>([]);

  return (
    <BirthdaysContext.Provider value={birthdaysHook}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <BirthdayForm />
          <BirthdayList />
        </ScrollView>
      </SafeAreaView>
    </BirthdaysContext.Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;

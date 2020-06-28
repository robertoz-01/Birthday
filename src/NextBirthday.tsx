import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import useBirthdayStore from './hooks/useBirthdayStore';
import {Birthday} from './contexts/BirthdaysContext';

export default function NextBirthday() {
  const {nextBirthday} = useBirthdayStore();

  const bday = nextBirthday();
  if (bday) {
    return (
      <>
        <Text style={styles.birthdayListHeader}>Next Birthday</Text>
        <View style={styles.birthdayEntry}>
          <View style={styles.dateBox}>
            <Text>{`${bday.date.getDate()}/${
              bday.date.getMonth() + 1
            }/${bday.date.getFullYear()}`}</Text>
          </View>
          <Text>{bday.name}</Text>
        </View>
      </>
    );
  } else {
    return <Text>No Birthday added yet!</Text>;
  }
}

const styles = StyleSheet.create({
  birthdayList: {
    borderTopColor: '#606060',
    borderTopWidth: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
  },
  dateBox: {
    width: 80,
  },
  birthdayListHeader: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  birthdayEntry: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
  },
});

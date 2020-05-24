import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import useBirthdayStore from './hooks/useBirthdayStore';

export default function BirthdayList() {
  const {birthdays} = useBirthdayStore();

  return (
    <View style={styles.birthdayList}>
      {birthdays.map((bd) => {
        return (
          <View style={styles.birthdayEntry}>
            <View style={styles.dateBox}>
              <Text>{`${bd.date.getDate()}/${
                bd.date.getMonth() + 1
              }/${bd.date.getFullYear()}`}</Text>
            </View>
            <Text>{bd.name}</Text>
          </View>
        );
      })}
    </View>
  );
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
  birthdayEntry: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
  },
});

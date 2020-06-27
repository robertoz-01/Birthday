import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import useBirthdayStore from './hooks/useBirthdayStore';

export default function BirthdayList() {
  const {birthdays} = useBirthdayStore();

  return (
    <>
      <Text style={styles.birthdayListHeader}>All Birthdays</Text>
      <View style={styles.birthdayList} testID={'birthdayList'}>
        {birthdays.map((bd) => {
          return (
            <View style={styles.birthdayEntry} key={bd.id}>
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
    </>
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

import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import useBirthdayStore from './hooks/useBirthdayStore';
import {useNavigation} from '@react-navigation/native';

export default function BirthdayList() {
  const {birthdays} = useBirthdayStore();
  const navigation = useNavigation();

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
      <TouchableOpacity
        onPress={() => navigation.navigate('Birthday Form Modal')}
        style={styles.button}>
        <Text style={styles.buttonText}>Add a birthday</Text>
      </TouchableOpacity>
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
  button: {
    marginTop: 30,
    backgroundColor: '#fafaf0',
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonText: {
    fontSize: 20,
  },
});

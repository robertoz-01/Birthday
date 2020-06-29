import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import useBirthdayStore from './hooks/useBirthdayStore';
import {useNavigation} from '@react-navigation/native';

export default function NextBirthday() {
  const {nextBirthday} = useBirthdayStore();
  const navigation = useNavigation();

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
    return (
      <>
        <Text>No Birthday added yet!</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Birthday Form Modal')}
          style={styles.button}>
          <Text style={styles.buttonText}>Add a birthday</Text>
        </TouchableOpacity>
      </>
    );
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

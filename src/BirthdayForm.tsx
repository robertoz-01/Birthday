import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import useBirthdayStore from './hooks/useBirthdayStore';
import {useNavigation} from '@react-navigation/native';

export default function BirthdayForm() {
  const [name, onChangeName] = React.useState('');
  const [date, onChangeDate] = React.useState(new Date());
  const {addBirthday} = useBirthdayStore();
  const navigation = useNavigation();

  const onPressSave = () => {
    addBirthday({name, date});
    navigation.goBack();
  };

  return (
    <View style={styles.addForm}>
      <Text style={styles.formLabel}>Name</Text>
      <TextInput
        style={styles.formInput}
        onChangeText={(text) => onChangeName(text)}
        value={name}
      />
      <Text style={styles.formLabel}>Birthday</Text>
      <DatePicker mode="date" date={date} onDateChange={onChangeDate} />
      <TouchableOpacity onPress={onPressSave} style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addForm: {
    alignItems: 'center',
    padding: 10,
  },
  formLabel: {
    fontSize: 25,
    marginTop: 15,
    marginBottom: 20,
  },
  formInput: {
    height: 35,
    fontSize: 15,
    borderColor: '#606060',
    borderWidth: 1,
    alignSelf: 'stretch',
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

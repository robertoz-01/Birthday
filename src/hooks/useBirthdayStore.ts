import React, {useContext} from 'react';
import uuid from 'uuid-random';
import BirthdaysContext, {Birthday} from '../contexts/BirthdaysContext';

const useBirthdayStore = () => {
  const [birthdays, setBirthdays] = useContext(BirthdaysContext);

  const addBirthday = (birthday: Birthday) => {
    if (!birthday.id) {
      birthday.id = uuid();
    }
    setBirthdays([...birthdays, birthday]);
  };

  return {birthdays, addBirthday};
};

export default useBirthdayStore;

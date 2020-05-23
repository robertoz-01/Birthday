import React, {useContext} from 'react';
import BirthdaysContext, {Birthday} from '../contexts/BirthdaysContext';

const useBirthdayStore = () => {
  const [birthdays, setBirthdays] = useContext(BirthdaysContext);

  const addBirthday = (birthday: Birthday) => {
    setBirthdays([...birthdays, birthday]);
  };

  return {birthdays, addBirthday};
};

export default useBirthdayStore;

import {useContext} from 'react';
import uuid from 'uuid-random';
import BirthdaysContext, {Birthday} from '../contexts/BirthdaysContext';
import {setYear, getYear, differenceInDays} from 'date-fns';

const useBirthdayStore = () => {
  const [birthdays, setBirthdays] = useContext(BirthdaysContext);

  const addBirthday = (birthday: Birthday) => {
    if (!birthday.id) {
      birthday.id = uuid();
    }
    setBirthdays([...birthdays, birthday]);
  };

  const nextBirthday = () => {
    const thisYear = getYear(Date.now());
    const sortedBirthdays = birthdays.sort((bdate1, bdate2) =>
      differenceInDays(
        setYear(bdate1.date, thisYear),
        setYear(bdate2.date, thisYear),
      ),
    );
    return sortedBirthdays.find(
      (bdate) =>
        differenceInDays(setYear(bdate.date, thisYear), Date.now()) >= 0,
    );
  };

  return {birthdays, addBirthday, nextBirthday};
};

export default useBirthdayStore;

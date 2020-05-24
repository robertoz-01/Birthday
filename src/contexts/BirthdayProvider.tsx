import React, {useState} from 'react';
import BirthdaysContext, {Birthday} from './BirthdaysContext';

interface Props {
  children: React.ReactNode;
}

const BirthdayProvider = (props: Props) => {
  const birthdaysHook = useState<Birthday[]>([]);

  return (
    <BirthdaysContext.Provider value={birthdaysHook}>
      {props.children}
    </BirthdaysContext.Provider>
  );
};

export default BirthdayProvider;

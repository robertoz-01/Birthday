import React, {Dispatch, SetStateAction} from 'react';

export type Birthday = {
  id?: string;
  name: string;
  date: Date;
};

const BirthdaysContext = React.createContext<
  [Birthday[], Dispatch<SetStateAction<Birthday[]>>]
>([[], () => {}]);

export default BirthdaysContext;

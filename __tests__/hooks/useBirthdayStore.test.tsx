import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';
import useCounter from '../../src/hooks/useBirthdayStore';
import BirthdayProvider from '../../src/contexts/BirthdayProvider';
test('addBirthday add a new birthday in the list', () => {
  const {result} = renderHook(() => useCounter(), {wrapper: BirthdayProvider});
  expect(result.current.birthdays).toEqual([]);

  act(() => {
    result.current.addBirthday({
      date: new Date(2020, 3, 29, 0, 0, 0),
      name: 'Ro',
    });
  });

  expect(result.current.birthdays[0].name).toEqual('Ro');
  expect(result.current.birthdays[0].date).toEqual(
    new Date(2020, 3, 29, 0, 0, 0),
  );
  expect(result.current.birthdays[0].id).not.toBe(undefined);
});

import {renderHook, act} from '@testing-library/react-hooks';
import {addMonths, subYears} from 'date-fns';
import useBirthdayStore from '../../src/hooks/useBirthdayStore';
import BirthdayProvider from '../../src/contexts/BirthdayProvider';
test('addBirthday add a new birthday in the list', () => {
  const {result: hook} = renderHook(() => useBirthdayStore(), {
    wrapper: BirthdayProvider,
  });
  expect(hook.current.birthdays).toEqual([]);

  act(() => {
    hook.current.addBirthday({
      date: new Date(2020, 3, 29, 0, 0, 0),
      name: 'Ro',
    });
  });

  expect(hook.current.birthdays[0].name).toEqual('Ro');
  expect(hook.current.birthdays[0].date).toEqual(
    new Date(2020, 3, 29, 0, 0, 0),
  );
  expect(hook.current.birthdays[0].id).not.toBe(undefined);
});

test('nextBirthday returns the next happening birthday', () => {
  const {result: hook} = renderHook(() => useBirthdayStore(), {
    wrapper: BirthdayProvider,
  });

  act(() => {
    hook.current.addBirthday({
      date: subYears(addMonths(Date.now(), 1), 80),
      name: 'Grandma',
    });
  });

  act(() => {
    hook.current.addBirthday({
      date: subYears(addMonths(Date.now(), -1), 30),
      name: 'Me',
    });
  });

  act(() => {
    hook.current.addBirthday({
      date: subYears(addMonths(Date.now(), 2), 60),
      name: 'Dad',
    });
  });

  expect(hook.current.nextBirthday().name).toEqual('Grandma');
});

test('nextBirthday returns also a birthday in a previous day of the year if no following', () => {
  const {result: hook} = renderHook(() => useBirthdayStore(), {
    wrapper: BirthdayProvider,
  });

  act(() => {
    hook.current.addBirthday({
      date: subYears(addMonths(Date.now(), -2), 30),
      name: 'Me',
    });
  });

  act(() => {
    hook.current.addBirthday({
      date: subYears(addMonths(Date.now(), -1), 60),
      name: 'Dad',
    });
  });

  expect(hook.current.nextBirthday().name).toEqual('Me');
});

test('nextBirthday returns nothing if no birthday is given', () => {
  const {result: hook} = renderHook(() => useBirthdayStore(), {
    wrapper: BirthdayProvider,
  });

  expect(hook.current.nextBirthday()).toEqual(undefined);
});

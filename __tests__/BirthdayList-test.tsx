import 'react-native';
import React from 'react';

import {render} from 'react-native-testing-library';
import useBirthdayStore from '../src/hooks/useBirthdayStore';
jest.mock('../src/hooks/useBirthdayStore');

import BirthdayList from '../src/BirthdayList';

it('renders no birthdays', () => {
  useBirthdayStore.mockReturnValue({
    birthdays: [],
  });

  const rendered = render(<BirthdayList />);
  const containerView = rendered.getByTestId('birthdayList');
  expect(containerView.props.children).toEqual([]);
});

it('renders some birthdays', () => {
  useBirthdayStore.mockReturnValue({
    birthdays: [
      {name: 'Roberto', date: new Date(1986, 11, 18, 0, 0, 0, 0)},
      {name: 'Test', date: new Date(1985, 10, 14, 0, 0, 0, 0)},
    ],
  });

  const rendered = render(<BirthdayList />);

  const containerView = rendered.getByTestId('birthdayList');
  expect(containerView.props.children.length).toEqual(2);

  expect(rendered.getByText('Roberto')).toBeTruthy();
  expect(rendered.getByText('18/12/1986')).toBeTruthy();
});

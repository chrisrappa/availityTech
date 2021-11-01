import App from './App';
import React from 'react';
import { render } from '../src/components/testComponents/render';


test('Should render register component when visited', () => {
  const tree = render(<App />);

  expect(tree).toMatchSnapshot();
});

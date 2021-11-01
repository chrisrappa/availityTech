import React from 'react';
import { getByTestId, fireEvent, cleanup } from '@testing-library/react';
import { render } from '../src/components/testComponents/render';
import Register from '../src/components/Register';


afterEach(cleanup);

test('When Register component is visited, then it should render', () => {
  const registerComponent = render(<Register />);

  expect(registerComponent).toMatchSnapshot();
})

test('When application starts, firstName input should have placeholder', () => {

  const { container } = render(<Register />);
  const firstName = getByTestId(container, "firstName");

  expect(firstName.textContent).toContain("First Name");

})


test('When submit button is clicked submitHandler then it should dispatch info in state variables', () => {

  

})
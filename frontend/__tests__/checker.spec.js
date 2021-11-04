import React from 'react';
import checker from '../src/components/validator';
import { render } from '../src/components/testComponents/render';

describe('checker', () => {

  test('should return false passing in array of parenthesis that do not close properly', () => {
    
    const { checker } = render(<checker inputArray = '(()'/>);

    expect(checker).toBe(false);


  })

})
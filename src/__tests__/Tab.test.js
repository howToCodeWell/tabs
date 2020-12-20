import React from 'react'
import { render, screen } from '@testing-library/react'
import Tab from '../Components/Tab'
import '@testing-library/jest-dom/extend-expect'

test('Tests a Tab', () => {
  const temp = render(<Tab />)
    expect(screen.getByTestId('my-test-id')).toHaveTextContent('First Tab');
})

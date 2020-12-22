import React from 'react'
import { render, screen } from '@testing-library/react'
import Tab from '../Components/Tab'
import '@testing-library/jest-dom/extend-expect'

test('Tests a Tab', () => {
  render(<Tab className={`htcw-tab`} label={`First Tab`}/>)
  expect(screen.getByText(`First Tab`)).toHaveAttribute('class', 'htcw-tab')
})

import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Tab from '../Components/Tab'
import '@testing-library/jest-dom/extend-expect'
import TabList from '../Components/TabList'

test('Tests a clickable TabList', async () => {
  render(<TabList containerClassName={`tab-container`} listClassName={`tab-list-container`}>
      <Tab label={`First Tab`} className={`htcw-tab`} onClick={ () => alert('hello')  } />
      <Tab label={`Second Tab`} className={`htcw-tab`}  />
    </TabList>)
  global.alert = jest.fn();
  const clickableTab = screen.getByText(`First Tab`)
  fireEvent.click(clickableTab)
  expect(global.alert).toHaveBeenCalledTimes(1);
})


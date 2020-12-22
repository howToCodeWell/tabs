import React from 'react'
import { render, screen } from '@testing-library/react'
import Tab from '../Components/Tab'
import '@testing-library/jest-dom/extend-expect'
import TabList from '../Components/TabList'

test('Tests a TabList', () => {
  render(<TabList containerClassName={`tab-container`} listClassName={`tab-list-container`}>
    <Tab label={`First Tab`} className={`htcw-tab`}/>
    <Tab label={`Second Tab`} className={`htcw-tab`}/>
  </TabList>)
  expect(screen.getByTestId(`tab-container`)).toHaveAttribute('class', 'tab-container')

  const list = screen.getByTestId(`tab-list-container`)
  expect(list).toHaveAttribute('class', 'tab-list-container')
  // Check that we have two children
  expect(list.children).toHaveLength(2)

  // Child one
  const childOne = list.children[0]
  expect(childOne).toHaveAttribute('class', 'htcw-tab')
  expect(childOne).toHaveTextContent(`First Tab`)

  // Child two
  const childTwo = list.children[1]
  expect(childTwo).toHaveAttribute('class', 'htcw-tab')
  expect(childTwo).toHaveTextContent(`Second Tab`)
})


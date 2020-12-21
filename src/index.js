import React from 'react'
import ReactDOM from 'react-dom'
import Tab from './Components/Tab'
import TabList from './Components/TabList'

ReactDOM.render(
  <React.StrictMode>
    <TabList containerClassName={`tab-container`} listClassName={`list-reset flex border-b`}>
      <Tab label={`First Tab`} className={`bg-gray-500 border-r-2 border-gray-100 inline-block py-2 px-4 text-pink-300 font-semibold hover:text-black hover:bg-pink-300`} onClick={ () => alert('Hello Coders')  } />
      <Tab label={`Second Tab`} className={`bg-gray-500 inline-block py-2 px-4 text-pink-300 font-semibold hover:text-black hover:bg-pink-300`} onClick={ () => alert('Happy Coding')  } />
    </TabList>
  </React.StrictMode>,
  document.getElementById('root')
)

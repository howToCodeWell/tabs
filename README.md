# Tabs React Component
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/howtocodewell/tabs)
![Travis (.org) branch](https://img.shields.io/travis/howtocodewell/tabs/main)
![GitHub issues](https://img.shields.io/github/issues/howtocodewell/tabs)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/howtocodewell/tabs)
![Twitter Follow](https://img.shields.io/twitter/follow/howtocodewell)

This component displays tabs.
It is used as part of [https://howtocodewell.net](https://howtocodewell.net])

## Install
```bash
$ npm install @howtocodewell/tabs
```
## Example
To see an example of the component run 
```bash
$ npm start
```
## Test
To test the component
```bash
$ npm  test
```

## Usage
```javascript
import { TabList, Tab } from '@howtocodewell/tabs'

<TabList containerClassName={`tab-container`} listClassName={`list-reset flex border-b`}>
  <Tab label={`First Tab`} className={`bg-gray-500 border-r-2 border-gray-100 inline-block py-2 px-4 text-pink-300 font-semibold hover:text-black hover:bg-pink-300`} onClick={ () => alert('Hello Coders')  } />
  <Tab label={`Second Tab`} className={`bg-gray-500 inline-block py-2 px-4 text-pink-300 font-semibold hover:text-black hover:bg-pink-300`} onClick={ () => alert('Happy Coding')  } />
</TabList>

```

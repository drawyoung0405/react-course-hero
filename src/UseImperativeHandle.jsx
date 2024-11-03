import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import SelectLanguages from './components/SelectLanguages';
import { Select } from 'antd';

function UseImperativeHandle() {
  console.log('ImperativeHandle render')

  return (
    <div>
      <h1>UseImperativeHandle</h1>

      <div 
        className='cursor-pointer'
      >
        Languages: {name || 'N/A'} <DownOutlined />
      </div>
      <SelectLanguages />
    </div>
  )
}

export default UseImperativeHandle
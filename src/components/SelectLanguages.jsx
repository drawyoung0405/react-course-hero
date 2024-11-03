import React from 'react'
import { Select } from 'antd';

function SelectLanguages() {

  return (
    <div>
      <Select
        style={{ width: 300 }}
        options={[
          { value: 'javascript', label: 'Javascript' },
          { value: 'react', label: 'React' },
          { value: 'angular', label: 'Angular' },
          { value: 'vue', label: 'Vue' },
        ]}
      />
    </div>
    
  )
}

export default SelectLanguages
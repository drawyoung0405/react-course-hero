import React from 'react'
import { Select } from 'antd';

const SelectLanguages = React.forwardRef(({ name, setName }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useImperativeHandle(ref, () => {
    return {
      openSelect() {
        setIsOpen(prevState => !prevState)
      }
    }
  })

  return (
    <div>
      {isOpen && (
        <Select
          value={name}
          style={{ width: 300 }}
          onChange={(value) => {
            setName(value)
          }}
          options={[
            { value: 'javascript', label: 'Javascript' },
            { value: 'react', label: 'React' },
            { value: 'angular', label: 'Angular' },
            { value: 'vue', label: 'Vue' },
          ]}
        />
      )}
      
    </div>
    
  )
})

export default SelectLanguages
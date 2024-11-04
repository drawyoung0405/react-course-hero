import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import SelectLanguages from './components/SelectLanguages';


/* forwardRef + useImperativeHandle
làm sao component cha có thể truy cập vào hàm bên trong component con.

*/

function UseImperativeHandle() {
  const [name, setName] = React.useState('');
  const languageRef = React.useRef(null);


  console.log('UseImperativeHandle');

  return (
    <div>
      <h1>UseImperativeHandle</h1>

      <div 
        className='cursor-pointer'
        onClick={() => languageRef.current.openSelect()}
      >
        Languages: {name || 'N/A'} <DownOutlined />
      </div>
      <SelectLanguages name={name} setName={setName} ref={languageRef}  />
    </div>
  )
}

export default UseImperativeHandle
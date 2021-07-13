import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pickColor } from '../actions/index'

function ColorPicker() {

  const [color, setColor] = useState('red')
  const dispatch = useDispatch()

  return (
    <div className={'picker'}>
      <div 
        style={{
        width: '50px',
        height: '40px', 
        backgroundColor: color
      }}></div>
      <input 
        type="color"
        value={color}
        onChange={ e => { 
          setColor( e.target.value )
          dispatch(pickColor(e.target.value))
        }}
      />
    </div>
  )
}

export default ColorPicker
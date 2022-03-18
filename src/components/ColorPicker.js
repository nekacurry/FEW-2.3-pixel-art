import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pickColor } from '../actions/index'

function ColorPicker() {

  const [color, setColor] = useState('red')
  const dispatch = useDispatch()

  return (
    <div className='tools'>
    <div className={'picker'}>
      <input 
        type="color"
        value={color}
        onChange={ e => { 
          setColor( e.target.value )
          dispatch(pickColor(e.target.value))
        }}
      />
    </div>
    <div className='eraser'>
    <input 
        className='erase-button'
        type='button'
        value={'Erase'}
        onClick={ e => {
          setColor( '#ffffff00' )
          dispatch(pickColor('#ffffff00'))
        }}
      />
    </div>
  </div>
  )
}

export default ColorPicker
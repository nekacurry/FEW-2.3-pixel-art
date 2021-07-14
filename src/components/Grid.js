import { useSelector, useDispatch } from 'react-redux';
import { setColor } from '../actions/index'
import { useRef } from 'react'
import { exportComponentAsPNG } from 'react-component-export-image'


function Grid() {
  const arr = useSelector(state => state.grid)
  const selectedColor = useSelector(state => state.color)
  const dispatch = useDispatch()

  const panelRef = useRef()

  return (
    <div>
      <div className='Grid' ref={panelRef}>
        {arr.map((color, i) => <div 
          style ={{ backgroundColor: color}} 
          onClick={() => dispatch(setColor(selectedColor, i))}
        />)}
      </div>
      <button 
        onClick={() => exportComponentAsPNG(panelRef, { html2CanvasOptions: {backgroundColor: null}})}
        className='save-btn'>
          Save
        </button>
    </div>
  )
}

export default Grid 
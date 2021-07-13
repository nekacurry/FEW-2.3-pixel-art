import { useSelector, useDispatch } from 'react-redux';
import { fillColor, reset } from '../actions/index'

function Buttons() {
  const { color } = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div className={'buttons'}>
      <button
        className={'fill-button'}
        onClick={() => dispatch(fillColor(color))}
      >Fill Color</button>

      <button className="reset-button" onClick={(e) => {
        dispatch(reset())
      }}>Reset</button>
    </div>
  )
}

export default Buttons
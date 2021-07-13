import { useSelector, useDispatch } from 'react-redux';
import { fillColor } from '../actions/index'

function FillColor() {
  const { color } = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <button
      className={'fill'}
      onClick={() => dispatch(fillColor(color))}
    >Fill Color</button>
  )
}

export default FillColor
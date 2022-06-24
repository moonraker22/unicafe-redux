import { useDispatch } from 'react-redux'
import { set } from '../features/filterSlice'

const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    dispatch(set(event.target.value))
    // input-field value is in variable event.target.value
  }
  const style = {
    marginBottom: 10,
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter
